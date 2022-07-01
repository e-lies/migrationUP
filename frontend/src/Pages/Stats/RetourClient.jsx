import React, { useContext } from 'react';
import StatClientTab from '../../components/Tableaux/StatClientTab';
import { Typography } from '@material-ui/core';
import { ContextSessions } from '../../context/SessionContext';

export default function RetourClient(){
    const session = useContext(ContextSessions)
    return(
        <div id="tabStatsVentes">
            <StatClientTab 
                id="RetourClient"
                rule="RetourClientEmploye" //{session.session['autorisations'] && session.session['autorisations'].includes(1307)? "RetourClientAdmin" : "RetourClientEmploye"}
                tableProps={{
                    title: "Retours client",
                    filterKeys:[],
                    hidden: ["id","idClient"],
                    paddings: 0,
                    defaultRpp: 10,
                    cellFunctions: {
                        idClient: (val,row)=>{
                          return( <Typography variant="body2">{ row['Client'] }</Typography> )
                        }
                    }
                }}
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
                MachineLearning
            />		  
        </div>
    )
} 