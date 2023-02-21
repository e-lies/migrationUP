import React, { useContext } from 'react';
import StatClientTab from '../../components/Tableaux/StatClientTab';
import { ContextSessions } from '../../context/SessionContext';

export default function RetourFournisseur(){
    const session = useContext(ContextSessions)
    return(
        <div id="tabStatsRetourF">
            <StatClientTab 
                id="RetourFourn"
                rule="RetourFournEmploye"//{session.session['autorisations'] && session.session['autorisations'].includes(1307) ? "RetourFournAdmin" : "RetourFournEmploye"}
                tableProps={{
                    //title: "Ventes",
                    filterKeys:[],
                    hidden: ['id','Commande','Type'],
                    paddings:2,
                    defaultRpp: 10
                }} 
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line']}
                machineLearning
            />		  
        </div>
    )
} 