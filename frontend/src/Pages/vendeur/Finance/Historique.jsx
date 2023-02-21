import React from 'react';
import StatClientTab from '../../../components/Tableaux/StatClientTab';

export default function Historique(){

    return(
        <StatClientTab 
            id="Balance"
            rule="VMBalance"
            tableProps={{
                //title: "Historique de mes ventes",
                filterKeys:[],
                hidden:['id','idContact','idReceveur'],
                paddings: 2,
            }}
            groupBy
            stats
            charts={['pie','bar','line','matrix']}
        />		  
    )
}