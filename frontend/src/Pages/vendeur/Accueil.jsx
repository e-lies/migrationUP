import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { ContextSessions } from '../../context/SessionContext';
import { CrudContext } from '../../context/ServerContext';
//import { Cards } from '../../context/AllCards';
import { useSize } from '../../reducers/Hooks';
import LoadedComponent from '../../components/LoadedComponent';
import MultiCharts from '../../components/Tableaux/MultiCharts';
import LocalSaves from '../../components/LocalSaves';
import Filtres from '../../components/Filtres';
import { Typography, Tooltip, Icon, Card, Link } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
    toggle: {
        width: '20%'
    },
    toggleSelected: {
        width: '20%',
        color: theme.palette.secondary.light
    },
    typo: {
        margin: 24,
        color: theme.palette.grey[600]
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 300,
        height: 200,
        margin: 12,
        padding: 12,
        color: theme.palette.grey[600]
    },
    numbers: {
        color: theme.palette.grey[800],
        marginRight: 12
    }
}))
var idComp;
export default function Accueil(){
    const server = useContext(CrudContext)
    const session = useContext(ContextSessions)
    const [from,setFrom] = useState("year")
    const [open,setOpen] = useState(false)
    const [mouvements,setMouvements] = useState([])
    const [aes,setAes] = useState([])
    const [commandes,setCommandes] = useState([])
    const classes = useStyles()
    const {width} = useSize("enCours")
    
    useEffect(()=>{
        idComp = server.componentCreation("Accueil")
        server.read([{rule:"VMMouvementsValides"}],idComp,false,(dt)=>setMouvements(dt))
        server.read([{rule:"VMAes"}],idComp,false,(dt)=>setAes(dt))
        server.read([{rule:"VMCommandesEnCours"}],idComp,false,(dt)=>setCommandes(dt))
    },[])

    const limit = (rule)=>{
        let d = new Date()
        let label = rule === "VMMouvementsClotures" ? "dhValidation" : "DH"
        switch (from){
            case "day" :
                d.setDate(d.getDate()-1)
                return {where:[{label,operator:'>',value:d.getFullYear()+'-'+parseInt(d.getMonth()+1)+'-'+d.getDate()}]}
            
            case "week" :
                d.setDate(d.getDate()-7)
                return {where:[{label,operator:'>',value:d.getFullYear()+'-'+parseInt(d.getMonth()+1)+'-'+d.getDate()}]}
            
            case "month" :
                d.setMonth(d.getMonth()-1)
                return {where:[{label,operator:'>',value:d.getFullYear()+'-'+parseInt(d.getMonth()+1)+'-'+d.getDate()}]}
            
            case "year" :
                d.setFullYear(d.getFullYear()-1)
                return {where:[{label,operator:'>',value:d.getFullYear()+'-'+parseInt(d.getMonth()+1)+'-'+d.getDate()}]}
            
            default: return null
        }
    }
    
    return(
        <div className={classes.root}> 
            <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
                <div id="toggleGroup" style={{display:'flex'}}>
                    <h2 id="codes"></h2>
                <Typography className={classes.typo} variant="h6"> Depuis </Typography>
                <ToggleButtonGroup
                    style={{margin:12}}
                    value={from}
                    exclusive
                    onChange={(e,v)=>setFrom(v)}
                    aria-label="Vue"
                >
                    <Tooltip key="all" title="Données depuis le début de l'utilisation de l'appli">
                    <ToggleButton value="all" selected={from=== 'all'} aria-label="all" /*className={from === 'all' ? classes.toggleSelected : classes.toggle}*/>
                        <Icon> first_page </Icon>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="year" title="Données depuis 1 an">
                    <ToggleButton value="year" selected={from==='year'} aria-label="year" /*className={from === 'year' ? classes.toggleSelected : classes.toggle}*/>
                        <Typography variant="h6"> 1 A </Typography>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="month" title="Données depuis 1 mois">
                    <ToggleButton value="month" selected={from==='month'} aria-label="month" /*className={from === 'month' ? classes.toggleSelected : classes.toggle}*/>
                        <Typography variant="h6"> 1 M </Typography>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="week" title="Données depuis 1 semaine">
                    <ToggleButton value="week" selected={from === 'week'} aria-label="week" /*className={from === 'week' ? classes.toggleSelected : classes.toggle}*/>
                        <Typography variant="h6"> 1 S </Typography>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="day" title="Données depuis hier">
                    <ToggleButton value="day" selected={from === 'day'} aria-label="day" /*className={from === 'day' ? classes.toggleSelected : classes.toggle}*/>
                        <Typography variant="h6"> 1 j </Typography>
                    </ToggleButton>
                    </Tooltip>
                </ToggleButtonGroup>
                </div>
                { width > 800 &&
                 <div id="header">
                    <Typography variant="h5" color="primary"> {`${session.session.userName}`} </Typography>
                 </div>
                }
            </div>
            <div>
            <MultiCharts
                rules={["VMMouvementsClotures","VMCommandesCloturees"]}
                //defaultParams={limit("VMMouvementsClotures")}
                //propsForAll={}
                // filterKeys={['Marque','dhValidation']}
           />
            {/*<Icon onClick={()=>setOpen(!open)}> edit </Icon>
            <LocalSaves
                storageKey="accueil"
                group="time"
                title="Sauvegarde de temps"
                open={open}
                onClose={()=>setOpen(false)}
                onLoadSave={(save)=>setFrom(save['value'])}
                stateToSave={from}
            />*/}
           </div>
            <div id="datas" style={{marginTop:24,display:'flex',flexWrap:'wrap',justifyContent:'space-around',width:'100%',flex:3}}>
                <div id="chartAccueil" style={{padding:12,flex:2,minWidth:370}}>
                <LoadedComponent
                    id="pieMouv"
                    component="./Tableaux/Charts"
                    rule="VMMouvementsClotures"
                    params={limit("VMMouvementsClotures")}
                    otherProps={{
                        title:"Approvisionnements par marque",
                        type:"pie",
                        chartParams:{label:'Marque',value:'qtePreparee',op:'sum'}
                    }}
                    //chartProps={{onLegendClick:e=> cards.addCard("Equipe",e.label,"Nom","like") }}
                />
                <LoadedComponent
                    id="lineCommande"
                    component="./Tableaux/Charts"
                    rule="VMCommandesCloturees"
                    params={limit("VMCommandesCloturees")}
                    otherProps={{
                        title:"Evolution du chiffre d'affaire par client",
                        type:"line",
                        chartParams:{id:'Client', X:'DH', Y:'Total',op:'sum',color:null,precision:['day','week','month'].includes(from) ? 'day' : 'month',interpolated:true }
                    }}
                    //chartProps={{onLegendClick:e=> cards.addCard("Prescripteur",e.label,"Nom","like") }}
                />
                </div>
                <div id="cards">
                    <Link href="#/siraj/vendeur/Articles/Entrées"><Card
                        elevation={2}
                        id="entrees"
                        className={classes.card}
                    >
                        <Typography className={classes.numbers} variant="h4">
                            {mouvements.length} 
                        </Typography>    
                        <Typography variant="h5">
                            approvisionnements à valider
                        </Typography>
                    </Card></Link>
                    <Link href="#/siraj/vendeur/Articles/Aes"><Card
                        elevation={2}
                        id="aes"
                        className={classes.card}
                    >
                        <Typography className={classes.numbers} variant="h4">
                            {aes.length} 
                        </Typography>    
                        <Typography variant="h5">
                            articles en stock
                        </Typography>
                    </Card></Link>
                    <Link href="#/siraj/vendeur/Ventes/Commande"><Card
                        elevation={2}
                        id="commandes"
                        className={classes.card}
                    >
                        <Typography className={classes.numbers} variant="h4">
                            {commandes.length} 
                        </Typography>    
                        <Typography variant="h5">
                            commandes en cours
                        </Typography>
                    </Card></Link>
                </div>
            </div>
        </div>
    )
}