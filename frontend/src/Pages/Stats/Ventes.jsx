import React, { useContext, useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import StatClientTab from '../../components/Tableaux/StatClientTab';
import Alerts from '../../components/Alerts';
import Maps from '../../components/Maps/Maps';
import moment from 'moment';
import { ContextSessions } from '../../context/SessionContext';
import { CrudContext } from '../../context/ServerContext';
import * as fcts from '../../reducers/Functions'; 
import {FormControl, InputLabel, Select, Input, MenuItem, Icon, Tooltip, Typography, Snackbar} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}
const useStyles = makeStyles((theme) => ({
    formControl: {
      display: 'flex',
      flexWrap: 'nowrap',
      marginBottom: theme.spacing(4),
      minWidth: 120,
      maxWidth: 300,
    },
    typo: {
        color: theme.palette.grey[600]
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
}));  

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const positions = ['Commune','Wilaya','idMagasin']
const values = ['Quantite','Gratuits','PT','Benefice']
const operations = {number:[
    {label:'Minimum',value:'minim'},{label:'Maximum',value:'maxim'},{label:'Somme',value:'sum'},{label:'Moyenne',value:'avg'},{label:'Médiane',value:'median'}
    ],
    date:[
        {label:'Minimum',value:'minim'},{label:'Maximum',value:'maxim'},{label:'Moyenne',value:'avgDate'},{label:'Médiane',value:'medianDate'}
    ],
    time:[
        {label:'Minimum',value:'minim'},{label:'Maximum',value:'maxim'},{label:'Moyenne',value:'avgDate'},{label:'Médiane',value:'medianDate'}			
    ],
    text:[
        {label:'Différents',value:'count'}
    ]		
}

const DynaMap = (props) =>{
    const { schema, data } = props
    const classes = useStyles();
    const [groupedData,setGroupedData] = useState([])
    const [positionKey,setPositionKey] = useState({position:null,value:null,operation:null})
    const [mouseOverMarker,setMouseOverMarker] = useState(null)
    const [mapProps,setMapProps] = useState({})

    const handleChange = (event,type) => {
        setPositionKey({...positionKey,[type]:event.target.value});
    };

    useEffect(()=>{
        if(positionKey.position && positionKey.value && positionKey.operation){
            let fct = fcts.nestData([positionKey.position])
			let grps = fct(data);
            let gd = grps.map(g=>{
                return {
                    group: g[positionKey.position],
                    value: g.children[positionKey.operation](positionKey.value)+(schema.columns[positionKey.value]['suffix'] || ""),
                    position: { lat: g.children.avg('lat'), lng: g.children.avg('lng')}
                }
            })
            setGroupedData(gd)
        }
    },[JSON.stringify(positionKey)])
    
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
            <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-position">Regrouper:</InputLabel>
                <Select
                    id="position-chip"
                    label="Grouper par"
                    value={positionKey.position}
                    onChange={e=>handleChange(e,'position')}
                    input={<Input id="select-multiple-chip" />}
                    MenuProps={MenuProps}
                >
                    {positions.map((pos) => (
                        <MenuItem key={pos} value={pos}>
                            {schema?.columns[pos]?.label || pos}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-values">Valeur:</InputLabel>
                <Select
                    id="value-chip"
                    label="Valeur"
                    value={positionKey.value}
                    onChange={e=>handleChange(e,'value')}
                    MenuProps={MenuProps}
                >
                    {values.map((val) => (
                        <MenuItem key={val} value={val}>
                            {schema.columns[val]?.label || val}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-operations">Opération:</InputLabel>
                <Select
                    id="operation-chip"
                    label="Opération"
                    value={positionKey.operation}
                    onChange={e=>handleChange(e,'operation')}
                    MenuProps={MenuProps}
                >
                    {positionKey.value && operations[fcts.globalType(schema.columns[positionKey.value]['type'])].map((op) => (
                        <MenuItem key={op.value} value={op.value}>
                            { op.label }
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            </div>
            <Snackbar
                anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
                autoHideDuration={4000}
                open={mouseOverMarker}
                onClose={()=>setMouseOverMarker(null)}
                message={mouseOverMarker}
                key="snackCopy"
            />
            {groupedData && groupedData.length > 0 && (<Maps
                idMap="ventesMaps"
                zoom={mapProps.zoom || 10}
                center={mapProps.center || undefined}
                data={ groupedData }
                mapProps={{
                    onCenterChanged:center=>{ console.log("mapProps = ",mapProps); setMapProps({...mapProps,center}) },
                    onZoomChanged:zoom=>{ console.log("mapProps = ",mapProps); setMapProps({...mapProps,zoom}) },
                    onBoundsChanged: jsn=>console.log("bounds = ",jsn)
                }}
                markers={{
                    position:'position',
                    onMouseOver:jsn=> setMouseOverMarker(`${jsn.group} : ${jsn.value}`),
                    onMouseOut:jsn=>setMouseOverMarker(null),
                    onClick:jsn=>console.log(jsn),
                    label: 'value'
                }}
                onError={()=>console.log('close')}
                //onClick={jsn=>console.log(jsn)}
                mapStyle={{width:document.body.clientWidth-70,height:document.body.clientHeight-110}}
            />)}
        </div>
    )
}

export default function Ventes(){
    const server = useContext(CrudContext)
    const session = useContext(ContextSessions)
    const classes = useStyles();
    const theme = useTheme();
    const [mapData,setMapData] = useState(null)
    const [from, setFrom] = useState("3m");
    
    const closeMaps = ()=>{
        setMapData(null)
    }
    
   /* useEffect(()=>{
		if(positionKey.operation && positionKey.position && positionKey.value){
			let fct = fcts.nestData(positionKey.position)
			let grps = fct(mapData);
			for(let i = 0; i < grps.length; i++){
				positionKey.position.map(oc=>{ if(oc.col && oc.op){
					//let opLabel = operations[fcts.globalType(columns[oc.col]['type'])].filter(p=>p.value===oc.op)[0]['label']
					grps[i][oc.op+"("+oc['col']+")"] = grps[i]['children'][oc['op']](oc['col'])
				}
				return false
				})
			}
			let grpData = [...grps];
			grpData.forEach(g=>{ delete g['children'] })
			//recréer les columns du new tableau
			let groupedColumns = new Object();
			state.groupCols.forEach(gc=>{ groupedColumns[gc] = columns[gc] })
			state.opCols.forEach(oc=>{
				if(oc.col !== null && oc.op !== null){
					groupedColumns[oc.op+"("+oc.col+")"] = {label:oc.label+"("+(columns[oc.col]['label'] || oc.col)+")",type:columns[oc.col].type}
				}	
			})
			dispatch({type:'data',data:grpData,columns:groupedColumns})
		}
	},[JSON.stringify(positionKey)])*/

    const params = ()=>{
        switch (from) {
            case "day":
              return {where:[[{col:'DateCreation',operator:'>=',value:moment().subtract(1,'days').format('YYYY-MM-DD')}]]}
              
            case "week":
              return {where:[[{col:'DateCreation',operator:'>=',value:moment().subtract(1,'weeks').format('YYYY-MM-DD')}]]}
              
            case "month":
                return {where:[[{col:'DateCreation',operator:'>=',value:moment().subtract(1,'months').format('YYYY-MM-DD')}]]} 
              
            case "3m":
                return {where:[[{col:'DateCreation',operator:'>=',value:moment().subtract(3,'months').format('YYYY-MM-DD')}]]}

            case "6m":
                return {where:[[{col:'DateCreation',operator:'>=',value:moment().subtract(6,'months').format('YYYY-MM-DD')}]]}
                
            case "year":
              return {where:[[{col:'DateCreation',operator:'>=',value:moment().subtract(1,'years').format('YYYY-MM-DD')}]]}
              
            default:
              return null;
          }
    }

    return(
        <div id="tabStatsVentes">
            <div id="toggleGroup" style={{display: "flex", flexWrap:'wrap', justifyContent:'space-around', alignItems:'center' }}>
                <Typography className={classes.typo} variant="h6">
                    Depuis
                </Typography>
                <ToggleButtonGroup
                    style={{ margin: 12 }}
                    value={from}
                    exclusive
                    onChange={(e, v) => setFrom(v)}
                    aria-label="Vue"
                >
                    <Tooltip
                    key="all"
                    title="Données depuis le début de l'utilisation de l'appli"
                    >
                    <ToggleButton
                        value="all"
                        selected={from === "all"}
                        aria-label="all" /*className={from === 'all' ? classes.toggleSelected : classes.toggle}*/
                    >
                        <Icon> first_page </Icon>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="year" title="Données depuis 1 an">
                    <ToggleButton
                        value="year"
                        selected={from === "year"}
                        aria-label="year" /*className={from === 'year' ? classes.toggleSelected : classes.toggle}*/
                    >
                        <Typography variant="h6"> 1 A </Typography>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="month" title="Données depuis 6 mois">
                    <ToggleButton
                        value="6m"
                        selected={from === "6m"}
                        aria-label="6month" /*className={from === 'month' ? classes.toggleSelected : classes.toggle}*/
                    >
                        <Typography variant="h6"> 6 M </Typography>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="month" title="Données depuis 3 mois">
                    <ToggleButton
                        value="3m"
                        selected={from === "3m"}
                        aria-label="3month" /*className={from === 'month' ? classes.toggleSelected : classes.toggle}*/
                    >
                        <Typography variant="h6"> 3 M </Typography>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="month" title="Données depuis 1 mois">
                    <ToggleButton
                        value="month"
                        selected={from === "month"}
                        aria-label="month" /*className={from === 'month' ? classes.toggleSelected : classes.toggle}*/
                    >
                        <Typography variant="h6"> 1 M </Typography>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="week" title="Données depuis 1 semaine">
                    <ToggleButton
                        value="week"
                        selected={from === "week"}
                        aria-label="week" /*className={from === 'week' ? classes.toggleSelected : classes.toggle}*/
                    >
                        <Typography variant="h6"> 1 S </Typography>
                    </ToggleButton>
                    </Tooltip>
                    <Tooltip key="day" title="Données depuis hier">
                    <ToggleButton
                        value="day"
                        selected={from === "day"}
                        aria-label="day" /*className={from === 'day' ? classes.toggleSelected : classes.toggle}*/
                    >
                        <Typography variant="h6"> 1 j </Typography>
                    </ToggleButton>
                    </Tooltip>
                </ToggleButtonGroup>
            </div>
            <StatClientTab 
                id="VenteEmploye"
                rule="VentesEmploye"//{session.session['autorisations'] && session.session['autorisations'].includes(1307) ? "VentesAdmin" : "VentesEmploye"}
                params={params()}
                tableProps={{
                    title: "Lignes vente",
                    filterKeys:[],
                    hidden: ['Commande','idMagasin','idVendeur','Designation','lat','lng'],
                    paddings:2,
                    defaultRpp: 10,
                    checkedFunctions:[{
                        label:'Carte',
                        icon:'map',
                        fct:data=>{
                            setMapData(data)
                        }
                    }]
                }} 
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
                machineLearning
            />

            <Alerts
                id="mapsAlert"
                open={mapData}
                fullScreen
                handleClose={closeMaps}
            >
                <DynaMap
                    schema={server.schemas.select?.VentesEmploye || {}}
                    data={mapData}
                />
            </Alerts>	  
        </div>
    )
} 