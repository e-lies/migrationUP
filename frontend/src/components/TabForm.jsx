import React, { Component, useReducer, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CrudContext } from '../context/ServerContext';
import { ExportToCsv } from 'export-to-csv';
import ReactTab from './ReactTab';
import ClientTab from './Tableaux/ClientTab';
import Alerts from './Alerts';
import Formulaire from './Formuls';
import Draggable from 'react-draggable-component';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
 alertInsert: {	backgroundColor: theme.palette.error.main,
			color: theme.palette.error.contrastText
  },
  alertUpdate: {	backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText
  },
  alertUpdates: {	backgroundColor: theme.palette.primary.light,
			color: theme.palette.primary.contrastText
  },
  alertClone: {	backgroundColor: theme.palette.secondary.main,
			color: theme.palette.secondary.contrastText
  }
}))

 const options = { 
    fieldSeparator: ';',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
   // showTitle: true,
    title: 'My Awesome CSV',
    //useTextFile: false,
    //useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

function reducer(state,action){
	switch(action.type){
		case 'load':
			let fil = action.props.location ? action.props.location.search.match(/filtre=\[(.+)\]/) : null;//dans JSON.parse, les clés doivent etre entre ""
			let defaultFilter = fil !== null && fil.length > 0 ? JSON.parse(unescape(fil[0].split('tre=')[1])) : [];
			let other = action.props.otherFct || [];
			let examine = other.reduce((acc,cur)=>{
				if(cur.scope.includes("line")){ acc = acc.concat(cur) }
				return acc
			},[])
			let examines = other.reduce((acc,cur)=>{
				if(cur.scope.includes("lines")){ acc = acc.concat(cur) }
				return acc	},[])
			let globals = other.reduce((acc,cur)=>{
				if(cur.scope.includes("global")){ acc = acc.concat(cur) }
				return acc	},[])
			if(action.props.update){
			 examine = [...examine,{icon:'edit',label:'Modifier',color:'secondary',fct:action.handleUpdate}]
			}
			if(action.props.updates){
				examines = [...examines,{icon:'edit',label:'Modifier les sélections',color:'secondary',fct:action.handleUpdates}]
			}
			if(action.props.deletes){
				examine = [...examine,{icon:'delete',label:'Supprimer',color:'error',fct:action.handleDeletes}]
				examines = [...examines,{icon:'delete',label:'Supprimer les sélections',color:'error',fct:action.handleDeletes}]
			}
			if(action.props.clone){
				examine = [...examine,{icon:'file_copy',label:'Cloner',color:'primary',fct:action.handleClone}]
			}
			if(action.props.insert){
			  globals = [...globals,{icon:'add',label:`Créer ${action.props.insert}`,color:'primary',fct:action.handleInsert}];
			}
			if(action.props.export){
				examines = [...globals,{icon:'cloud_download',label:'Exporter en CSV',color:'secondary',fct:action.handleExport}]
			}
			let tp = action.props.tabParams ?  {rule:action.props.tabRule,params:action.props.tabParams} : {rule:action.props.tabRule}
			action.context.read([tp],action.idComp,true)
			return {...state, idComp:action.idComp, examine, examines, globals, defaultFilter}
		break;
		case 'reload':
			let tabPar = action.props.tabParams ?  {rule:action.props.tabRule,params:action.props.tabParams} : {rule:action.props.tabRule}
			action.context.read([tabPar],action.idComp,true)
			return state;
		break;
		case 'close':
			return {...state,dialog:{}}
		break;
		case 'insert':
			let insrt = {type:"insert",rule:action.rule,hidden:['id']}
			return {...state,dialog:
			 {action:'insert',icon:'add_box',classes:'alertInsert',title:`Ajout ${action.rule}`,content:insrt}}
		break;
		case 'update':
			 let updt = {type:"update",rule:action.rule,cond:[{label:'id',operator:'=',value:action.line.id}],hidden:['id']}
			return {...state,dialog:
			 {action:'update',icon:'edit',classes:'alertUpdate',title:`Modification ${action.line[action.uniqueCol]}`,content:updt}}
		break;
		case 'updates':
			let ids = action.lines.map(line=>{return line.id})
			let updts = {type:"update",rule:action.rule,cond:[{label:'id',operator:'in',value:ids}],populate:false,hidden:['id']}			
			return {...state,dialog:
			 {action:'updates',icon:'playlist_play',classes:'alertUpdates',title:`Modification de ${action.lines.length} ligne(s) ${action.rule}`,content:updts}}
		break;
		case 'deletes':
			let sid = action.lines.map(line=>{return line.id})
			action.context.write([{rule:action.rule,type:'delete',idComp:action.idComp,where:[{label:'id',operator:'in',value:sid}]}],action.callback)
			return state
		break;
		case 'clone':
			/* comme clone est un insert, on ne peut comparé par id, d'ou le unqiueColI... */
			let cln = {type:"insert",
				rule:action.rule,
				popOd:true,
				cond:[{label:action.uniqueColI,operator:'=',value:action.line[action.uniqueColS]}],
				populate:true,hidden:['id']}
			 return {...state,dialog:
			  {action:'clone',icon:'file_copy',classes:'alertClone',title:`Cloner la ligne ${action.line[action.uniqueColS]}`,content:cln}}
		break;
		default : action.fct(action.data)
	}
}

function PaperComponent(props) {
  return (
    <Draggable style={{position:'relative'}} >
      <Paper {...props} />
    </Draggable>
  );
}

const TabForm = props =>{ //otherFct=[{classe:'decoration',icon:'zoom-in',label:'détail',scope:['line',lines','global'],fct:()=>{return...}}]
//insert={rule:'Techniciens'}  update={rule}
//uniqueCols sont les colonnes uniques pour chaque règle [{insert:'Nom',update:'id',delete:'Code'}]
	let { tabProps, tabRule, tabParams, uniqueCols, insert, update, updates, deletes, clone, otherFct } = props;
	const classes = useStyles()
	const context = useContext(CrudContext)
	const [state,dispatch] = useReducer(reducer,{
												idComp:"",
												dialog:{},
												examine:[],
												examines:[],
												globals:[],
												defaultFilter: []
										})
	useEffect(()=>{
		const idComp = context.componentCreation("TabForm");
		context.getSchema("select",tabRule);
		if(insert || clone){ context.getSchema("insert",insert) }
		if(update){ context.getSchema("update",update) }
		if(updates){ context.getSchema("update",updates) }
		if(deletes){ context.getSchema("delete",deletes) }
		dispatch({type:'load',idComp,context,handleInsert,handleDeletes,handleUpdate,handleUpdates,handleClone,handleExport,props})

	},[])
	
	const reload = ()=>{ 
		dispatch({type:'reload',context,props})
	}
	const handleClose = ()=>{ dispatch({type:'close'}) }
	const handleExport = data =>{
		let name = window.prompt("Comment souhaitez-vous nommer le fichier qui contiendra ces "+data.length+" enregistrements?");		
		if(name && name !== null){
			let opt = {...options}
			opt['title'] = "Export de "+data.length+" enregistrements";
			opt['filename'] = name;
			const csvExporter = new ExportToCsv(opt);
	 		csvExporter.generateCsv(data);
	 	}
	}
	const handleInsert = ()=>{
		dispatch({type:'insert',rule:insert})
	}
	const handleUpdate = line=>{
		dispatch({type:'update',uniqueCol:uniqueCols && uniqueCols['select'] ? uniqueCols['select'] : 'id',rule:update,line})
	}
	const handleUpdates = lines=>{
		dispatch({type:'updates',rule:updates,lines})
	}
	const handleDeletes = lines=>{
		if(!Array.isArray(lines)) { lines = [lines] }
		let labels = lines.map(e=>{ return uniqueCols['deletes'] ? e[uniqueCols['deletes']] : e['id'] })
		let conf = window.confirm("Confirmez-vous la suppression de "+labels.join(','))
		if(conf){
			dispatch({type:'deletes',callback:()=>{alert("Suppression bien effectuée");reload()},context,uniqueCol:uniqueCols['select'] || 'id',rule:deletes,lines})
		}
	}
	const handleClone = line=>{
		dispatch({type:'clone',rule:insert,uniqueColI:uniqueCols['insert'] || 'id',uniqueColS:uniqueCols['select'] || 'id',line})
	}
	let linesFct = (otherFct && otherFct.filter(f=>{ return f.scope.includes("lines") }).length > 0) || updates || deletes
	let dataKey = tabParams ? JSON.stringify(tabParams) : 'all';
	const globalTools = <div style={{display:'flex',justifyContent:'space-around'}}>
		{state.globals.map(g=>{
			return(<Tooltip title={g.label}>
			<Fab onClick={e=>g.fct()} color={g.color || "primary"}>
				<Icon>{g.icon}</Icon>
			</Fab>
			</Tooltip>)
		})}
	</div>
	return(
		<div id="TabForm">
			{/*<ReactTab
				{...tabProps}
				data={context.data[tabRule] && context.data[tabRule][dataKey] ? context.data[tabRule][dataKey]['data'] : []}
				checkb={linesFct}	
				examine={state.examine}
				examines={state.examines}
				send={state.globals}
			/>*/}
			<ClientTab
				{...tabProps}
				schema={context.schemas.select[tabRule]}
				data={context.data[tabRule] && context.data[tabRule][dataKey] ? context.data[tabRule][dataKey]['data'] : []}
				lineFunctions={state.examine}
				checkedFunctions={state.examines}
				//tools={[globalTools]}
				defaultFilter={state.defaultFilter}
			/>
			<Alerts id={`dial${state.dialog.title}`}
				//draggable
				width= { document.body.clientWidth > 720 ? "50%" : "75%" }
				open={Object.keys(state.dialog).includes('action')}
		        handleClose={handleClose}
		        headerFooterFormat={{icon:state.dialog.icon,title:state.dialog.title,classes:classes[state.dialog.classes]}}
			>
				{Object.keys(state.dialog).includes('action') && 
		          	<Formulaire {...state.dialog.content} callback={(rep,status)=>{
		          		if(status < 300) { alert(`${state.dialog.title} Ok`);
							reload()
		          			handleClose()
		          		}
		          		else { alert(`Un problème est survenu lors de l'opération \n ${state.dialog.title}`) }
		        }} /> }
			</Alerts>
			{/*<Dialog
		        open={Object.keys(state.dialog).includes('action')}
		        onClose={handleClose}
		        fullWidth={true}
        		maxWidth="md"
		        PaperComponent={PaperComponent}
		    >
		        <DialogTitle style={{cursor:'move'}} id="draggable-dialog-title">
		          <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
		          <Typography variant="h5"> {state.dialog.title} </Typography>
		          <IconButton aria-label="close" onClick={handleClose}>
			          <CloseIcon />
        	      </IconButton>
        	      </div>
		        </DialogTitle>
		        <DialogContent>
		          {Object.keys(state.dialog).includes('action') && 
		          	<Formulaire {...state.dialog.content} callback={(rep,status)=>{
		          		if(status < 300) { alert(`${state.dialog.title} Ok`);
							reload()
		          			handleClose()
		          		}
		          		else { alert(`Un problème est survenu lors de l'opération \n ${state.dialog.title}`) }
		          	}} /> }
		        </DialogContent>
		        <DialogActions>
		          
		        </DialogActions>
		      </Dialog>*/}
		</div>	
	)
}
export default TabForm