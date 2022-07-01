import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import StatClientTab from '../../../components/Tableaux/StatClientTab';

export default function Aes(){

    return(
        <div id="tabStatsVentes">
            <StatClientTab 
                id="VMAes"
                rule="VMAes"
                tableProps={{
                    title: "En stock",
                    hidden:['id','idCategorie','idArticle','Categorie','id_magasin'],
                    filterKeys:[],
                    paddings: 2,
                    defaultRpp: 10,
                    cellFunctions: {
                        Etat: (val,row)=>{
                            return (<Typography variant="body2">
                                {val === "Attente" ?
                                 (<React.Fragment><Icon color="default">pause</Icon> En attente</React.Fragment>) :
                                 (val === "Ok" ?
                                    (<React.Fragment><Icon color="primary">done</Icon> En stock</React.Fragment>) :
                                    (<React.Fragment><Icon color="error">remove_shopping_cart</Icon> Sortie</React.Fragment>)
                                )
                        }</Typography>)
                        }
                    }
                }}
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}}
                groupBy
                stats
                charts={['pie','bar','line']}
            />		  
        </div>
    )
} 