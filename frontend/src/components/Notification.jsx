import React, { useEffect, useContext, Suspence, lazy } from 'react';
import ContextSessions from './context/SessionContext';
import CrudContext from './context/ServerContext';
import Cards from './context/AllCards';
import { 
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Badge, IconButton, Icon, Avatar
 } from '@material-ui/core';
const LoadedComponent = lazy(()=> import('./components/LoadedComponent'))
const Accordion = lazy(()=> import('./components/Accordion') )

export const notifs = [{
    label: "Interventions",
    rule: "InterventionPrescripteur",
    params: {where:[{label:'Etat',operator:'=',value:'Demande'}],order:[{ordre:'DESC',col:'DhDemande'}]},
    icon: "directions_run",
    cond: () => session.session.role === "Prescripteur",
    levels: [["Delais","Couleur"]],
    functions: []
  },{
    label: "Intervention(s) à dispatcher",
    rule: "InterventionDispatcheur",
    params: {where:[{label:'Etat',operator:'=',value:'Demande'}],order:[{ordre:'DESC',col:'DhDemande'}]},
    icon: "alarm",
    cond: () => session.session.role === "Dispatcheur",
    levels: [["Delais","Couleur"]],
    functions: [
      (data)=>{<div>
        <Badge badgeContent={data.length} style={{backgroundColor:data.Couleur}}>
          <Typography variant="subtitle1"> {`Interventions ${data.Delais}`} </Typography>
        </Badge>
      </div>},
      (data)=>{
        
      }
    ]
  },{
    label: "Intervention En Cours",
    rule: "InterventionDispatcheur",
    params: {where:[{label:'Etat',operator:'in',value:['Dispatche','Planification'}],order:[{ordre:'DESC',col:'DhDispatch'}]},
    icon: "directions_run",
    cond: () => session.session.role === "Dispatcheur",
    levels: [["Delais","Couleur"]],
    functions: []
  },{
    label: "InterventionACloturer",
    rule: "InterventionDispatcheur",
    params: {where:[{label:'Etat',operator:'=',value:'Validation'}],order:[{ordre:'DESC',col:'DhFin'}]},
    icon: "network_locked",
    cond: () => session.session.role === "Dispatcheur",
    levels: [],
    functions: []
  },{
    label: "DeplacementsPlanifies",
    rule: "DeplacementsPlanifies",
    params: {where:[{label:'idEquipe',operator:'=',value:session.session.idEquipe}],order:[{ordre:'ASC',col:'debutPrevu'}]},
    icon: "directions_run",
    cond: () => session.session.isChef,
    levels: [],
    functions: []
  },{
    label:"DeplacementTechnicien",
    rule: "DepTech",
    params: {where:[{label:'Etat',operator:'=',value:'planification'}]},
    icon: "directions_run",
    cond: () => session.session.role === "Technicien" && !session.session.isChef,
    levels: [],
    functions: []
  }
]

export default function Notification() {
  const server = useContext(CrudContext)
  const session = useContext(ContextSessions)
  const defaultSummary = (data,notif)=>{
    return( <div>
      <Icon>{notif.icon || null}</Icon>
      <Badge color="secondary" badgeContent={data.length}>
        <Typography variant="h5"> {notif.label} </Typography>
      </Badge>
    </div>)
  }
  return(
      <Suspence fallback={<div id="fallb">Chargement en cours...</div>} > 
      { notifs.filter(n=>n['cond'] === undefined || n['cond'](session)).map(notif=>{
        let key = notif.params ? JSON.stringify(notif.params) : 'all'
         if(server.data[rule] && server.rule[rule][key]){
          return(
            <ExpansionPanel id={`expand${notif.rule}`}>
              <ExpansionPanelSummary>
                { notif.summary(server.data[rule][key].data,notif) || defaultSummary(server.data[rule][key].data,notif) }
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <LoadedComponent
                  component={Accordion}
                  rule={levels.rule}
                  params={levels.params || {}}
                  levels={levels.levels}
                  functions={levels.functions}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
         }
        })
      }
      </Suspence>
  )  
}