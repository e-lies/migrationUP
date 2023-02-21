import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ContextSessions } from '../../../context/SessionContext';
import { CrudContext } from '../../../context/ServerContext';
import { ContextForms } from "../../../context/Forms";
import LoadedComponent from '../../../components/LoadedComponent';
import ClientTab  from '../../../components/Tableaux/ClientTab';
import Alerts from '../../../components/Alerts';
//import Barcode from '../../../components/Barcode/Barcode';
import Progress from '../../../components/Progress';
import { Typography, Badge, Icon, IconButton, Divider, Paper, InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      justifyContent: 'space-around',  
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#FFF'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
}));

const Aes = (props) =>{ //En mettant directement le ClientTab dans le collapse, les données ne se chargent pas !!?...
    const { row, conf } = props
    const srv = useContext(CrudContext)
    return(
        <ClientTab
            id={`lm${row.id}`}
            title={`Liste ${row.Article}`}
            schema={srv.schemas.select['VMLigneMouvement'] || {}}
            data={srv.data['VMLigneMouvement'] && srv.data['VMLigneMouvement']['all']['data'].filter(dt=>{return dt.idMouvement===row.id}) }
            hidden={['id','idMouvement','DH']}
            filterKeys={['CB','RFID']}
            paddings={8}
            cellFunctions={{idArticleEnStock:(schema,val,row)=>{
                return( <Icon color={conf.includes(row['idArticleEnStock']) ? "primary" : "secondary"}>
                    { conf.includes(row['idArticleEnStock']) ? "check_circle" : "help" }
                </Icon>)} 
            }}
        />
    )
}

export default function Entrees(props){
    const classes = useStyles()
    const session = useContext(ContextSessions)
    const server = useContext(CrudContext)
    const forms = useContext(ContextForms)
    const [openCode,setOpenCode] = useState(false)
    const [codeValue,setCodeValue] = useState("")
    const [confirmed, setConfirmed] = useState([])
    const [unexpected, setUnexpected] = useState([])
    const [showUnexpected,setShowUnexpected] = useState(false)
    const [defaultData, setDefaultData] = useState([{Qte:1}])
    useEffect(()=>{
        let idComp = server.componentCreation("Entrees")
        server.getSchema("select","VMLigneMouvement",idComp)
        server.read([{rule:"VMLigneMouvement"}],"Entrees")
    },[])
  
    const onScan = code=>{
        if(confirmed.filter(c=>c===code).length + unexpected.filter(u=>u===code) < 1){
            if(server.data['VMLigneMouvement'] && server.data['VMLigneMouvement']['all'] && code.length > 1){
                let codes = server.data['VMLigneMouvement']['all']['data'].filter(dt=>[dt['CB'],dt['rfid']].join(',').split(',').includes(code))
                codes.length > 0
                ? setConfirmed([...confirmed,...codes.map(c=>c['idArticleEnStock'])])
                : setUnexpected(unexpected.concat(code))
            }
        }
    }
    const onEnterCode = e =>{
        if(e.which === 13) { 
            onScan(codeValue)
            e.target.select()
        }
    }
    const condChange = (i,k,v,st) =>{
        let b = true
        if(k==='idArticle'){
            if(st.filter(s=>v===s['idArticle']).length > 0){
                alert("Cet article est déjà sélectionné !! \n Veuillez modifier la quantité de la demande existante !")
                b = false
            }
        }
        return b
    }
    return( <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'space-between'}}>
        {/*<Barcode
            open={openCode}
            onClose={()=>setOpenCode(false)}
            className={classes.iconButton}
            type='barcode'
            multiple
            onChange={e=>onScan(e)}
            contentFct={
                (codes)=>
                (<Progress type="circle" color="primary" value={confirmed.length} total={server.data['VMLigneMouvement'] && server.data['VMLigneMouvement']['all'] ? server.data['VMLigneMouvement']['all']['data'].length : null} />)
            }
            onRemoveCode={code=>{setUnexpected(unexpected.filter(u=>u!==code)); setConfirmed(confirmed.filter(c=>c!==code))}}
            onValidate={v=>console.log(v)}
        />*/}
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} onClick={e=>setOpenCode(true)} aria-label="codes">
                <Icon> code </Icon>
            </IconButton>
            <InputBase
                autoFocus
                className={classes.input} 
                placeholder="Scanner les code-barres"
                inputProps={{
                    'aria-label': 'Scanner les code-barres',
                    onChange:(e)=>{setCodeValue(e.target.value)},
                    value: codeValue ,
                    onKeyUp: onEnterCode
                }}
            />
            <Progress
                type="circle" 
                thickness={5}
                value={confirmed.length} 
                total={server.data['VMLigneMouvement'] && server.data['VMLigneMouvement']['all'] ? server.data['VMLigneMouvement']['all']['data'].length : 100000}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.iconButton} aria-label="unexpected" onClick={e=>setShowUnexpected(true)}>
                <Badge color="error" showZero badgeContent={unexpected.length}>
                    <Icon size="medium"> find_in_page </Icon>
                </Badge>    
            </IconButton>
        </Paper>
        <LoadedComponent
            id="demandesMouvement"
            component="./Tableaux/ClientTab"
            rule="VMMouvementsValides"
            /*params={{where: [
                {label: 'idMagasinDemandeur', operator: '=', value: session.session.idMagasin}
            ]}}*/
            propToRender={[confirmed]}
            otherProps={{
                title:"Approvisionnements",
                hidden:['id','idMagasinDemandeur','qtePreparee'],
                tools:[
                    ()=> <IconButton
                            color="primary"
                            onClick={()=>forms.addForm(
                                "insert",
                                "VMDemandeMouvement",{  
                                addRows: true,
                                deletable: true,
                                condChange,
                                onEnter:(i,k,v)=>{ 
                                    if(k==="Qte"){ document.getElementById('AddRow').click() }
                                    else if(k==="idArticle"){ document.querySelector(`[name=Qte${i}]`).select() }
                                    return false 
                                },
                                defaultData,
                                callback:(rep,st)=>{
                                    if(st < 300){
                                        alert(`${rep[0]['count']} demandes bien envoyées`)
                                        forms.removeForm("insert","VMDemandeMouvement")
                                        server.read([{rule:"VMLigneMouvement"}],"Entrees",true)
                                        server.read([{rule:"VMMouvementsValides"}],"Entrees",true)
                                    }
                                    else{ alert("Une erreur s'est produite \n Veuillez vérifier le résultat !") }
                                    setDefaultData([{Qte:1}])
                                }}
                            )}
                        >
                        <Icon style={{fontSize:'1.5em'}} size="medium">add_circle</Icon>
                    </IconButton>
                ],
                lineFunctions: [{ label: "Valider", icon: "check_all", color: "primary", fct:(row)=>{
                    let conf = window.confirm(`Accepter ces ${row['Article']} ?`)
                    if(conf){  
                        server.write(
                            [{type:'update',rule:'ClotureMouvement',where:[{label:'id',operator:'=',value:row['id']}]}],
                            (rep,st)=>{
                                if(st < 300){
                                    alert(`Validation des ${row['Article']} bien effectuée \n Vous pouvez maintenant utiliser ces articles...`)
                                    server.read([{rule:"VMLigneMouvement"}],"Entrees",true)
                                    server.read([{rule:"VMMouvementsValides"}],"Entrees",true)
                                }
                                else{
                                    alert("Une erreur s'est produite !! \n Veuillez vérifier votre serveur !")
                                }
                            }
                        ) 
                    }}},
                    { label: "Refuser", icon: "block", color: "secondary", fct:(row)=>{
                        forms.addForm("update", "ConflitMouvement", {
                            titre: "Justifiez votre refus",
                            where: [{ label: "id", operator: "=", value: row['id'] }],
                            defaultData: [{ Commentaire: "Je n'ai pas reçu ces articles" }],
                            populate: false,
                            callback: (rep, st) => {
                                if(st < 300){
                                    alert(`Refus bien enregistré`)
                                    forms.removeForm("update","ConflitMouvement")
                                    server.read([{rule:"VMLigneMouvement"}],"Entrees",true)
                                    server.read([{rule:"VMMouvementsValides"}],"Entrees",true)
                                }
                                else{
                                    alert("Une erreur s'est produite !! \n Veuillez vérifier votre serveur !")
                                }
                            },
                        })
                    }}
                ],
                speedFct: true,
                cellFunctions: {
                    qteDemandee:(val,row)=>{ return(
                      <Progress
                        type="circle" 
                        color={val === row['qtePreparee'] ? "primary" : "secondary"}
                        thickness={4}
                        value={row['qtePreparee']} 
                        total={val}
                        textFct={(v,t)=>(<Typography variant="subtitle2" component="div" color="textSecondary">
                                {`${v}/${t}`}
                            </Typography>)}
                    />
                    )}
                },
                collapses: [{
                    title:"Articles",
                    fct: (row)=>{ return(row.id ? 
                        (<div style={{display:'flex',justifyContent:'flex-end'}}>
                            <Aes row={row} conf={confirmed} />
                        </div>)
                        : <span> </span> )}
                }]
            }}
        />
        <Alerts 
			id="dialogUnexpected"
		  	type="info"
			draggable={true}
			open={showUnexpected}
			handleClose={()=>setShowUnexpected(false)}
			//onOk={()=>selectMag(mag)}
			headerFooterFormat={{title:'Code-barres imprévus',icon:'find_in_page'}}
		  >
			<div style={{display:'flex',flexDirection:'column'}}>
                {unexpected.map(un=>{ return( <Typography variant="subtitle1"> { un } </Typography> ) })}
			</div>
	    </Alerts>
    </div>)
}