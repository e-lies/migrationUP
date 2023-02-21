import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import StatClientTab from '../../components/Tableaux/StatClientTab';
import { ContextSessions } from '../../context/SessionContext';

export default function ArticleEnStock(){
    const session = useContext(ContextSessions)
    return(
        <div id="tabStatsVentes">
            <StatClientTab 
                id="AesSuperviseur"
                rule="AesEmploye" //{session.session['autorisations'] && session.session['autorisations'].includes(1307) ? "AesAdmin" : "AesEmploye" }
                tableProps={{
                    title: "Articles en stock",
                    hidden:['id','idArticle','Catégorie','Rfid','Carton','idMagasin','Designation'],
                    filterKeys:[],
                    paddings: 2,
                    defaultRpp: 10,
                    cellFunctions: {
                        idCategorie: (val,row)=>{
                            return (<Typography variant="body2"> {row['Catégorie']} </Typography>)
                        },
                        idMagasin: (val,row)=>{
                            return (<Typography variant="body2"> {row['Magasin']} </Typography>)
                        }
                    }
                }}
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}}
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
            />		  
        </div>
    )
} 
/* <StatClientTab 
                id="Articles"
                rule="AdminArticles"
                tableProps={{
                    //title: "Articles par magasin",
                    hidden:['Categorie','idArticle','PU'],
                    filterKeys:[],
                    paddings: 2,
                    defaultRpp: 10,
                    cellFunctions: {
                        idCategorie: (val,row,schCol)=>{
                            return (<Typography variant="body2"> {row['Catégorie']} </Typography>)
                        },
                        idMagasin: (val,row,schCol)=>{
                            let mag = schCol.possibles.find(s=>s.value===row['idMagasin'])
                            return (<Typography variant="body2"> {mag ? mag['label'] : ""} </Typography>)
                        }
                    },
                    collapses:[{
                        title:"Détail",
                        fct:(row,schema)=>{
                            let mag = schema.columns['idMagasin']['possibles'].find(s=>s.value===row['idMagasin'])
                            return( <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'#FFF'}}>
                                <LoadedComponent
                                    id={`Aes${row.idMagasin}${row.idArticle}`}
                                    rule="AesSuperviseur"
                                    params={{
                                        where:[
                                            {label:'idArticle',operator:'=',value:row.idArticle},
                                            {label:'idMagasin',operator:'=',value:row.idMagasin}
                                        ]
                                    }}
                                    component="./Tableaux/ClientTab"
                                    otherProps={{
                                        title:`Liste des ${row.Article} dans ${mag ? mag['label'] : ""}`,
                                        hidden:['id','idArticle','Marque','Modele','Couleur','idMagasin','Magasin'],
                                        paddings:12
                                    }}
                                />
                                </div>
                            )
                        }
                    }]
                }}
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}}
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
            />		  */