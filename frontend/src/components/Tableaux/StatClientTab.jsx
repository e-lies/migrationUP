import React, { Component, useReducer, useEffect, useState, useContext } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ContextForms } from '../../context/Forms';
import { useSize } from '../../reducers/Hooks';
import * as functions from '../../reducers/Functions';
import Charts from './Charts';
import ClientTab from './ClientTab';
import Stats from './Stats';
import SpeedDials from './SpeedDials';
import Alerts from '../Alerts';
import GroupBy from './GroupBy';
import AddColumn from './AddColumn';
import { Autocomplete } from "@material-ui/lab";
import { handleExport } from '../../reducers/excelExport';
import { TextField, Icon, IconButton, Drawer, List, ListSubheader, ListItem, ListItemIcon, ListItemText, Typography, Divider, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	header: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText
	},
	check: { 
		color: theme.palette.secondary.main
	},
	checked: {
    color: theme.palette.secondary.light,
    textShadow: '2px',
  },
  unchecked: {
    color: theme.palette.text.disabled,
    //fontWeight:'bold',
 },
 	alerts: {	
		//minWidth: 360,
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText
  	}
}))

const statType = (column) =>{
	let type = functions.globalType(column.type)
	switch (type){
		case "number":
			return [
			{label:'Min', fct:'minim'},
			{label:'Max', fct:'maxim'},
			{label:'Somme', fct:'sum'},
			{label:'Moy', fct:'avg'},
			{label:'Méd', fct:'median'}
		]
		case "date":
			return [
			{label:'Min', fct:'minim'},
			{label:'Max', fct:'maxim'},
			{label:'Moy', fct:'avgDate'},
			//{label:'Médiane', fct:'medianDate'}
		]
		case "time":
			return [
			{label:'Min', fct:'minim'},
			{label:'Max', fct:'maxim'}
		]
		default:
			return [
			{label:'Différent', fct:'different'}
		]
	}
}

const DisplayCols = props=>{
    const { open, title, schema, cols, hidden, visibleIcon, hiddenIcon, changeVisibility, onClose } = props;
    const classes = useStyles()
    const checkedIcon = (label)=>{  return !hidden || !hidden.includes(label) }
    return(
        <div id="DisplayCols">
        <Drawer anchor="left" open={open}>
            <List style={{width:260}}
            	subheader={<ListSubheader style={{display:'flex',justifyContent:'space-between'}}>
            		 { title } <IconButton onClick={onClose}><Icon>clear</Icon></IconButton>
            		</ListSubheader>}
            >
              {cols.map((text, index) => {let cls=checkedIcon(text) ? classes.checked : classes.unchecked;
                return(<ListItem button key={text} onClick={()=>changeVisibility(text)} >
                  <ListItemIcon className={cls} > <IconButton aria-label="colonnes">
                      {checkedIcon(text) ? <Icon className={classes.checked}>{visibleIcon}</Icon> : <Icon className={classes.unchecked}>{hiddenIcon}</Icon> }
                  </IconButton></ListItemIcon>
                  <Typography variant="subtitle2" className={cls}>{text}</Typography>
                </ListItem>)}
              )}
            </List>
        </Drawer>
        </div>    
    )
}

function reducer(state,action){
	switch(action.type){
		case "load" : 
			let fil = action.location ? action.location.search.match(/filtre=\[(.+)\]/) : null;//dans JSON.parse, les clés doivent etre entre ""
			let defaultFilter = fil !== null && fil.length > 0 ? JSON.parse(unescape(fil[0].split('tre=')[1])) : [];
			let saved = localStorage.getItem(`stat${action.id}`)
			if(!saved){ localStorage.setItem(`stat${action.id}`,"{}"); saved = localStorage.getItem(`stat${action.id}`) }
			return {...state,functions:action.functions,backups:JSON.parse(saved),defaultFilter}
		break;
		case "visibility" :
			return {...state,visibility:!state.visibility}
		break;
		case "hidden" :
			let hidden = !state.hidden.includes(action.col) ?
				state.hidden.concat(action.col) : state.hidden.filter(h=>h!==action.col)
			return {...state,hidden}
		break;
		case "params":
			return {...state,params:action.params}
		break;
		case "filterKeys" :
			let filterKeys = !state.filterKeys.includes(action.col) ?
				state.filterKeys.concat(action.col) : state.filterKeys.filter(f=>f!==action.col)
			return {...state,filterKeys}
		break;
		case "fonction" :
			return {...state,fonction:action.fonction,dataFonction:action.data}
		break;
		case "addCol" :
			return {...state,addCol:true}
		break;
		case "newCol" :
			var schema = {...state.schema}
			schema.columns[action.title] = {label:action.title,type:action.colType}
			//let expressions = [...state.expressions]
			return {...state,schema,expressions:state.expressions.concat(action),addCol:false}
		break;
		case "rpp":
			return {...state,rpp:action.rows}
		break;
		case "displayBackup" :
			return {...state,saved:true}
		break;
		case "addBackup" :
			let addBackup = {...state.backups,[action.name]:{schema:state.schema,filterKeys:state.filterKeys,hidden:state.hidden,expressions:state.expressions,rpp:state.rpp}}
			localStorage.setItem(`stat${action.id}`,JSON.stringify(addBackup))
			return {...state, backups:addBackup}
		break;
		case "deleteBackup" :
			let deleteBackup = {...state.backups}
			delete deleteBackup[action.name]
			localStorage.setItem(`stat${action.id}`,JSON.stringify(deleteBackup))
			return {...state, backups:deleteBackup}
		break;
		case "setBackup" : 
			schema = {...state.schema}
			if(state.backups[action.name]['expressions']){
				state.backups[action.name]['expressions'].forEach(exp=>{ 
					schema.columns[exp['title']] = { label: exp['title'], type: exp['colType'] }
				})
			}
			let setBackup = state.selectedBackup === action.name 
				? { hidden: action.props.hidden, filterKeys: action.props.filterKeys, expressions: [] } 
				: state.backups[action.name]
			let newName = state.selectedBackup === action.name ? null : action.name
			return {...state,...setBackup,schema,selectedBackup:newName}
		break;
		case "close" :
			return {...state,addCol:false,charts:null,saved:false}
		break;
		default : { console.log("Fonction inconnue !");
			return state
		}
	}
}

const StatClientTab = props =>{ //stats [{id:['min','max','sum','avg'],name:['count']}] si un key à comme valeur [], ça veut dire toute les fct possibles selon le type
	//params donne d'éventuels paramètres supplémantaires pour le data context (cols, where, group, order)
	const { id, rule, schema, data, params, stats, charts, groupBy, exportation, location, tableProps } = props; 
	//charts = ["pie","bar","radar","line","matrix"]
	//let fk = filterKeys || []
	const forms = useContext(ContextForms)
	const classes = useStyles()
	const { width, isMobile } = useSize()
	const [selectedStat,setSelectedStat] = React.useState({})
	const [state,dispatch] = useReducer(reducer,
		{
		 rpp: tableProps.defaultRpp || 5,
		 schema:{},
		 params:{}, //from the child
		 filterConf:false,
		 filterKeys: (tableProps && tableProps.filterKeys) || [],
		 defaultFilter: [],
		 hidden: (tableProps && tableProps.hidden) || [],
		 visibility:false,
		 fonction:null,
		 colConf:false,
		 functions:[],
		 dataFonction:[],
		 addCol:false,
		 expressions:[],
		 backups: {},
		 selectedBackup: null,
		 saved:false
		})
	useEffect(()=>{
		let functions = [];
		if(charts && width > 800){
			functions =	[{icon:'pie_chart',title:'Camembert',classes:classes.alerts,fonction:'pie',fct:data=>dispatch({type:'fonction',data,fonction:'pie'})},
				{icon:'bar_chart',title:'Diagramme',classes:classes.alerts,fonction:'bar',fct:data=>dispatch({type:'fonction',data,fonction:'bar'})},
				{icon:'timeline',title:'Courbes',classes:classes.alerts,fonction:'line',fct:data=>dispatch({type:'fonction',data,fonction:'line'})},
				{icon:'wifi_tethering',title:'Radar',classes:classes.alerts,fonction:'radar',fct:data=>dispatch({type:'fonction',data,fonction:'radar'})},
				{icon:'view_comfy',title:'Matrice',classes:classes.alerts,fonction:'matrix',fct:data=>dispatch({type:'fonction',data,fonction:'matrix'})}
			].filter(ch=>{ return charts.includes(ch.fonction) });
		}
		else if(charts){
			functions = [{icon:'multiline_chart',title:'Graphes',classes:classes.alerts,fct:data=>dispatch({type:'fonction',data,fonction:'charts'})}]
		}
		if(groupBy){ 
			functions.push({icon:'account_tree',title:'Regrouper',classes:classes.alerts,fonction:"groupBy",fct:data=>dispatch({type:'fonction',data,fonction:"groupBy"})})
		}
		if(stats){
			functions.push({icon:'format_list_numbered_rtl',title:'Statistiques',classes:classes.alerts,fonction:"stats",fct:data=>dispatch({type:'fonction',data,fonction:"stats"})})
		}
		/*if(exportation){
			functions.push({icon:'cloud_download',title:'Exporter',fct:data=>handleExport(data,state.schema.columns || (context.schemas.select[rule] && context.schemas.select[rule]['columns']),title,state.hidden) })
		}*/
		dispatch({type:"load",id,functions,params,location})
	},[JSON.stringify(params)])
	
	const saveConfig = (name) =>{
		let saved = localStorage.getItem(`stat${rule}`)
		if(!saved){ localStorage.setItem(`stat${rule}`,"{}"); saved = localStorage.getItem(`stat${rule}`) }
		let nSaved = {...JSON.parse(saved),[name]:state}
		localStorage.setItem(`stat${rule}`,JSON.stringify(nSaved))
	}
	const dials = [
		{icon:'visibility',label:'Visibles',color:'secondary',fct:()=>dispatch({type:'visibility'})},
		{icon:'filter_list',label:'Filtres',color:'secondary',fct:e=>dispatch({type:'filterConf'})},
		{icon:'post_add',label:'Créer une colonne',color:'secondary',fct:()=>dispatch({type:'addCol'})},
		{icon:'save_alt',label:'Enregistrer cette config',color:'secondary',fct:()=> dispatch({type:"displayBackup"})},
		/*{icon:'save',label:'Enregistrer ce tableau pour autres utilisateurs',color:'secondary',fct:()=> saveReport("table")}*/
	];
	const contextDataKey = params ? JSON.stringify(params) : "all"
	const theme = useTheme()
	
	const displayStats = (col,data,column) =>{
		if(data && data.length > 0){
		   return(
			<Autocomplete
				id={`statElm${col}`}
				label={`Stats ${column.label || col}`}
				options={statType(column).filter(f=>!(selectedStat[col] || []).map(ss=>ss.label).includes(f.label))}
				value={selectedStat[col]}
				onChange={(e,v)=>setSelectedStat({...selectedStat,[col]:v})}
				multiple={true}
				getOptionLabel={option=> `${option.label}: ${data[option.fct](col)}`}
				renderOption={(option) => (
					<Typography style={{display:'flex',flexWrap:'nowrap'}} variant="caption">
						{`${option.label}: `}<b>
							{` ${typeof data[option.fct](col) === 'number' ? data[option.fct](col).toFixed(2) : data[option.fct](col)}`}
						</b>
					</Typography>
				)}
				style={{ width: '100%', margin:0 }}
				renderInput={(params) => <TextField {...params} label={`Stats ${column.label || col}`} />}
				/>
		   )
		}
		else{
			return( <span> _ </span> )
		}
	}

	const sd = () =>{
		return( <div style={{paddingBottom:32,paddingLeft:10,width:'100%'}}>
			<SpeedDials 
				tooltipOpen={parseInt(document.body.clientWidth) < 400}
				speedProps={{FabProps:{size:"small",style:{backgroundColor:theme.palette.secondary.main,marginLeft:-5}}}}
				tooltipPlacement="right"
				icon="build"
				iconRotation={width < 600 ? 225 : 135}
				direction={width < 600 ? "down" : "right"}
				label="Configuration tableau"
				actions={dials}
			/></div>)
	}

	/*const saveReport = (component,form)=>{
		let data = {}
		if(component === "table"){
			data = {
				component:'./Tableaux/StatClientTab',
				rule,
				params:JSON.stringify(params),
				paramState:JSON.stringify(state.params),
				props:JSON.stringify({...props,export:true})
			}
		}
		else{
			data = {
				component:'./Tableaux/Charts',
				rule,
				params:JSON.stringify(params),
				paramState:JSON.stringify(state.params),
				props:JSON.stringify({type:component,chartParams:form})
			}
		}
		forms.addForm("insert","Reports",{
			defaultData:[data],
			hidden:['component','rule','params','paramState','props'],
			complement:{idCategory:(dt,inp,id)=>{ return(
				<IconButton 
					onClick={()=>{
						forms.removeForm("insert","Reports")
						setTimeout(()=>forms.addForm("insert","categoryReport",{
							callback:(r,s)=>{
								if(s < 400){
									alert("Catégorie bien ajoutée !");
									forms.removeForm("insert","categoryReport")
									context.getSchema("insert","Reports","Group",true)
									saveReport(component,form)
								}
							}
						}),1000)
					}}
				>
					<Icon size="medium" color="secondary"> add_sign </Icon>
				</IconButton>
			)}},
			callback: (rep,st)=>{
				if(st < 400){
					alert("Ajout du rapport réussi")
					forms.removeForm("insert","Reports")
				}
				else{ alert("Une erreur s'est produite lors de la création du rapport !") }
			}
		})
	}*/

	let columns = schema?.columns || {}
	return(
		<div id="statTab">
		  <ClientTab
			{...tableProps}
			id={id}
			hidden={state.hidden}
			headerFct={displayStats}
			filterKeys={state.filterKeys}
			defaultRpp={state.rpp}
			checkColor="secondary"
			onChangeRowsPerPage={(rows)=>dispatch({type:'rpp',rows})}
			onChangeParams={(st)=>dispatch({type:'params',params:st})}
			//caption={caption || null}
			tools={[sd]}
			schema={schema}
			data={data}
			expressions={state.expressions}
			checkedFunctions={[...state.functions,...tableProps.checkedFunctions||[]]}
			exports={exportation}
		  />
		  <DisplayCols key="visColumns"
			title="Colonnes visibles"
			open={state.visibility}
			schema={schema || {}}
			cols = {Object.keys(schema.columns)}
			hidden={state.hidden}
			visibleIcon="visibility"
			hiddenIcon="visibility_off"
			changeVisibility={col=>dispatch({type:'hidden',col})}
			onClose={()=>dispatch({type:"visibility"})}
		  />
		  <Drawer anchor="top" open={state.addCol}>
			<div className={classes.alerts} style={{display:'flex',justifyContent:'space-between',marginBottom:'15px'}}>
				<Icon> post_add </Icon>
				<Typography variant="h5"> Créer une nouvelle colonne </Typography>
		  		<IconButton color="inherit" onClick={()=>dispatch({type:"close"})}><Icon>clear</Icon></IconButton>
			</div>
			<AddColumn
		  		columns={schema?.columns || {}}
		  		firstData={data[0] || []} 
		  		onConfirm={(title,colType,exp)=>dispatch({type:'newCol',title,colType,exp})}
		  	/>
		  </Drawer>
		  <Alerts id="dialogSaved"
		  	type="info"
			draggable={true}
			open={state.saved}
			handleClose={()=>dispatch({type:"close"})}
			onOk={()=>dispatch({type:"close"})}
			headerFooterFormat={{title:'Configurations sauvegardées',icon:'save'}}
		  >
			  <List style={{width:260}}
			  	component="nav"
            	subheader={<ListSubheader style={{display:'flex'}}>
					<IconButton
						color="primary" 
						onClick={()=>{ let name = window.prompt("Donnez un nom à la configuration actuelle"); if(name){ dispatch({type:"addBackup",id,name}) } }}
					>
						<Icon fontSize="large"> add_circle </Icon>
					</IconButton>
            		</ListSubheader>}
            >
				  { Object.keys(state.backups).map(bck=>{
					return(
						<ListItem button key={`back${bck}`}>
							{ state.selectedBackup === bck && <Icon color="secondary" style={{marginRight:8}}>check</Icon> }
							<ListItemText onClick={()=>dispatch({type:"setBackup",name:bck,props},alert(`Configuration ${bck} ${bck === state.selectedBackup ? "désactivée" : "appliquée"} !`)/*, dispatch({type:"close"})*/ )}>
								{bck} 
							</ListItemText> 
							<ListItemIcon 
								onClick={()=>{let conf = window.confirm("Supprimer cette configuration ?"); if(conf){ dispatch({type:"deleteBackup",id,name:bck}) }}}
							>
								<IconButton color="secondary"> <Icon fontSize="large"> delete </Icon> </IconButton>
							</ListItemIcon>
							<Divider />
						</ListItem>
					)  
				  }) }
			  </List>
		  </Alerts>
		  <Alerts id="dialogCharts"//width={ state.fonction === "bar" ? "auto" : 500 } height="auto"
		  	//draggable={width > 520 && ["bar","line","matrix"].includes(state.fonction) ? false : true}
		  	fullScreen//={width < 520 || ["bar","line","matrix"].includes(state.fonction)}
		  	open={charts && (charts.includes(state.fonction) || state.fonction==='charts')}
			handleClose={()=>dispatch({type:"fonction",fonction:null})}
			headerFooterFormat={state.functions.filter(f=>f.fonction===state.fonction)[0]}
		  >
			<Charts 
				type={state.fonction} 
				schema={schema} 
				data={state.dataFonction} 
				//onChange={} 
				//saveReport={saveReport}
			/>
		  </Alerts>
		  <Alerts id="dialogGroup"
		  	fullScreen
		  	open={state.fonction === "groupBy"}
			handleClose={()=>dispatch({type:"fonction",fonction:null})}
			headerFooterFormat={state.functions.filter(f=>f.fonction===state.fonction)[0]}
		  >
			<GroupBy 
				columns={Object.keys(columns).reduce((acc,cur)=>{ 
					if(!state.hidden || !state.hidden.includes(cur)){ acc[cur]=columns[cur] }
					return acc}	, {})}
				data={state.dataFonction}
				rule={rule}
				whereParams={{...params || {},where:[...params && params['where'] ? params['where'] : [],...state.params && state.params['filters'] ? state.params['filters'] : []]}}
			/>
		  </Alerts>
		  <Alerts id="dialogStat"
		  	fullScreen
		  	open={state.fonction === "stats"}
			handleClose={()=>dispatch({type:"fonction",fonction:null})}
			headerFooterFormat={state.functions.filter(f=>f.fonction===state.fonction)[0]}
		  >
			<Stats schema={schema} data={state.dataFonction} />
		  </Alerts>
		</div>
	)
}
StatClientTab.defaultProps = {
	data: [],
	schema: {},
	params: [],
	exportation: true,
	groupBy: true,
	tableProps: {}
}
export default StatClientTab