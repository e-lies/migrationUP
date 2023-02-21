import React, {useContext} from 'react';
import StatClientTab from '../../components/Tableaux/StatClientTab';
//import { ContextSessions } from '../../context/SessionContext';

export default function PreAchat(){
    //const session = useContext(ContextSessions)
    return(
        <div id="tabStatsVentes">
            <StatClientTab 
                id="PreAchat"
                rule="PreAchat"//{session.session['autorisations'] && session.session['autorisations'].includes(1307) ? "VentesAdmin" : "VentesEmploye"}
                tableProps={{
                    title: "Pré-achats",
                    filterKeys:[],
                    hidden: ['id','refAchat'],
                    paddings:2,
                    defaultRpp: 10
                }} 
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
            />		  
        </div>
    )
} 