import React, { useContext } from 'react';
import StatClientTab from '../../components/Tableaux/StatClientTab';
import { ContextSessions } from '../../context/SessionContext';

export default function LignesCommande(){
    const session = useContext(ContextSessions)
    return(
        <div id="tabStatsVentes">
            <StatClientTab 
                id="LignesCommande"
                rule="LignesCommandeEmploye" //{session.session['autorisations'] && session.session['autorisations'].includes(1307) ? "LignesCommandeAdmin" : "LignesCommandeEmploye"}
                /*contextParams={{where:session.session['autorisations'] && session.session['autorisations'].includes(1307)
                    ? []
                    : [[{label:'idMagasin',operator:'=',value:session.session.idMagasin}]]
                }}*/
                tableProps={{
                    title: "Toute Commande",
                    filterKeys:[],
                    hidden: ['idCommande','idMagasin','Designation'],
                    defaultRpp: 10,
                    paddings:2
                }} 
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
            />		  
        </div>
    )
} 