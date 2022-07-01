import React, {useContext} from 'react';
import StatClientTab from '../../components/Tableaux/StatClientTab';
import { ContextSessions } from '../../context/SessionContext';

export default function Commandes(){
    const session = useContext(ContextSessions)
    return(
        <div id="tabStatsVentes">
            <StatClientTab
                id="Commandes"
                rule="CommandesEmploye" //{session.session['autorisations'] && session.session['autorisations'].includes(1307) ? "CommandesAdmin": "CommandesEmploye"}
                tableProps={{
                    title: "Ventes",
                    filterKeys:[],
                    hidden: ['Etat','Type','idMagasin','idEmploye','Designation'],
                    paddings:2,
                    defaultRpp: 10,
                    //speechRecognition:true
                }} 
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
            />		  
        </div>
    )
} 