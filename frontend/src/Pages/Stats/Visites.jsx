import React, {useContext,useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import StatClientTab from '../../components/Tableaux/StatClientTab';
import Maps from '../../components/Maps/Maps';
import Alerts from '../../components/Alerts';
import IdCard from '../../components/IdCard';
import { CrudContext } from '../../context/ServerContext';
import { ContextSessions } from '../../context/SessionContext';
import {FormControl, InputLabel, Select, Input, MenuItem, Chip} from '@material-ui/core';
import { Itinerary, Path } from '../../reducers/Functions'

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
const positions = [{label:'Client',key:'clientPosition'},{label:'Visite',key:'employePosition'}]

export default function Visites(){
    const server = useContext(CrudContext)
    const session = useContext(ContextSessions)
    const classes = useStyles();
    const theme = useTheme();
    const [mapData,setMapData] = useState(null)
    const [positionKey,setPositionKey] = useState([])
    const [selectedMarker,setSelectedMarker] = useState()
    const [mouseOverMarker,setMouseOverMarker] = useState()
    const [mapProps,setMapProps] = useState({})
    const closeMaps = ()=>{
        setMapData(null)
    }
    const handleChange = (event) => {
        setPositionKey(event.target.value);
    };
    
    return(
        <div id="tabStatsVisites">
            <StatClientTab
                id="Visites"
                rule="VisitesEmploye"//{session.session['autorisations'] && session.session['autorisations'].includes(1307) ? "VisitesAdmin" : "VisitesEmploye"}
                tableProps={{
                    title: "Visites",
                    filterKeys:[],
                    hidden: ['id','idClient','idEmploye','idContat','clientPosition','employePosition','Designation'],
                    paddings:2,
                    defaultRpp: 10,
                    checkedFunctions:[{
                        label:'Carte',
                        icon:'map',
                        fct:data=>{
                            setMapData(data.sort((a,b)=>a.id-b.id).map((jsn,i)=>{return {...jsn,index:i}}))
                        }
                    }]
                }} 
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
            />		  
            <Alerts
                id="mapsAlert"
                open={mapData}
                fullScreen
                handleClose={closeMaps}
            >
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Vue:</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={positionKey}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {positions.map((pos) => (
                            <MenuItem key={pos.key} value={pos.key} style={getStyles(pos.label, positionKey, theme)}>
                                {pos.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Maps
                    idMap="visitsMaps"
                    zoom={mapProps.zoom || 10}
                    center={mapProps.center || undefined}
                    data={ mapData 
                        ? (positionKey.length > 1 
                            ? mapData.reduce((acc,cur)=>acc.concat({...cur,positions:cur['clientPosition'],nature:'Client',index:'C'+cur.index}).concat({...cur,positions:cur['employePosition'],nature:'Employé',index:'V'+cur.index}),[])
                            : (positionKey.length===1 ? mapData.map(md=>{return {...md,nature:positionKey[0]==='clientPosition' ? 'Client' : 'Employé',positions:md[positionKey[0]]}}) : [])) 
                        : []
                    }
                    mapProps={{
                        onCenterChanged:center=>{ console.log("mapProps = ",mapProps); setMapProps({...mapProps,center}) },
                        onZoomChanged:zoom=>{ console.log("mapProps = ",mapProps); setMapProps({...mapProps,zoom}) },
                        onBoundsChanged: jsn=>console.log("bounds = ",jsn)
                    }}
                    markers={{
                        position:'positions',
                        onMouseOver:jsn=>{setMapProps({...mapProps,center:jsn.employePosition}); setMouseOverMarker(jsn)},
                        onMouseOut:jsn=>setMouseOverMarker(undefined),
                        onClick:jsn=>setSelectedMarker(jsn),
                        label: m => m['index']
                    }}
                    polylineProps={mouseOverMarker ? [{
                        options:{
                            strokeColor: '#FF0000',
                            strokeOpacity: 0.8,
                            strokeWeight: 3,
                            fillColor: '#FF0000'
                        },
                        path:mouseOverMarker ? mapData.filter(md=>md.id=mouseOverMarker.id).map(p=>JSON.parse(p.employePosition)) : []
                    }] : []}
                    infoWindows={selectedMarker ? [{
                        position:selectedMarker.positions,
                        onCloseClick:()=>setSelectedMarker(undefined),
                        fct:()=>{ return(
                            <IdCard
                                cardStyle={{flex:1,minWidth:320,maxWidth:400,backgroundColor:theme.palette.primary.main,color:theme.palette.primary.contrastText}}
                                contentStyle={{padding:4}}
                                columns={(server.schemas.select['Vehicule'] && server.schemas.select['Vehicule']['columns']) || {}}
                                /*jsn={server.data['Vehicule'] && server.data['Vehicule']['all']
                                    ? server.data['Vehicule']['all']['data'].find(v=>v.id===state.devis.idVehicule) 
                                    : {}
                                }*/
                                jsn={selectedMarker}
                                type={selectedMarker['Nature']}
                                title={selectedMarker['Nature'] === "Client" ? "Contact" : "Employe"}
                                images="Image"//{state.devis.idVehicule && vehicules.find(v=>v.id===state.devis.idVehicule) && vehicules.find(v=>v.id===state.devis.idVehicule)['logoCategorie']}
                                lists={['Employe','dhDebut','dhFin','Contact','Operation','totalVente']}
                            />
                        )}
                    }] : []}
                    onError={()=>console.log('close')}
                    //onClick={jsn=>console.log(jsn)}
                    mapStyle={{width:document.body.clientWidth-70,height:document.body.clientHeight-110}}
                />
                </div>
            </Alerts>
        </div>
    )
} 