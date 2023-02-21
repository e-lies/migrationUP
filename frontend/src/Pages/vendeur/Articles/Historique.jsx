import React from 'react';
import StatClientTab from '../../../components/Tableaux/StatClientTab';
import LoadedComponent from "../../../components/LoadedComponent";
import { Typography, Icon } from '@material-ui/core';

export default function Aes(){

    return(
        <div id="tabStatsVentes">
            <StatClientTab 
                id="VMMouvements"
                rule="VMMouvementsClotures"
                tableProps={{
                    title: "Historique approvisionnements",
                    hidden:['id','idMagasinDemandeur'],
                    filterKeys:[],
                    paddings: 2,
                    //defaultRpp: 10,
                    collapses: [{title:"Articles", fct:
                        (row)=>{ return(<div style={{paddingBottom:12}}>
                            <LoadedComponent
                                id={`tab${row['idArrivee']}${row['idArticle']}`}
                                rule="VMLMClotures"
                                params={{where: [[
                                    {label: 'idMouvement', operator: '=', value: row['id']}
                                ]]}}
                                component="./Tableaux/ClientTab"
                                otherProps={{
                                    title:`Liste des ${row['Marque']} ${row['Modele']} ${row['Couleur']}`,
                                    hidden:['idMouvement'],
                                    filterKeys:['CB','RFID','qtePreparee','qteDemandee','DH'],
                                    paddings:8
                                }}
                            />
                            </div>
                        )}
                    }]
                }}
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}}
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
            />		  
        </div>
    )
} 