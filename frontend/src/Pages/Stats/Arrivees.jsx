import React, { useContext } from 'react';
import StatClientTab from '../../components/Tableaux/StatClientTab';
import LoadedComponent from '../../components/LoadedComponent';
import { ContextSessions } from '../../context/SessionContext';
import Ranking from '../../components/Ranking';

export default function Arrivees(){
    const session = useContext(ContextSessions)
    return(
        <div id="tabStatsVentes">
            {/*<Ranking
                data={[
                    {
                        id:23,
                        name:"salim",
                        age:30
                    },
                    {
                        id:24,
                        name:"ilyes",
                        age:37
                    },
                    {
                        id:25,
                        name:"hakim",
                        age:35
                    }
                ]}
                //keys={['name','age']}
                index="name"
            />*/}
            <StatClientTab 
                id="Arrivees"
                rule="ArriveeEmploye" //{session.session['autorisations'] && session.session['autorisations'].includes(1307) ? "ArriveeAdmin" : "ArriveeEmploye"}
                tableProps={{
                    title: "Historique des arrivées",
                    filterKeys:[],
                    hidden:['id','idArrivee','idArticle','Arrivee','Designation'],
                    paddings: 2,
                    defaultRpp: 10,
                    collapses: session.session['autorisations'] && session.session['autorisations'].includes(1310) && [{title:"Détails", fct:
                        (row)=>{ return(<div style={{backgroundColor:'#FFF',padding:12}}>
                            <LoadedComponent
                                id={`tab${row['idArrivee']}${row['idArticle']}`}
                                rule="histoAes"
                                params={{where: [[
                                    {label: 'idArrivee', operator: '=', value: row['idArrivee']},
                                    {label: 'idArticle', operator: '=', value: row['idArticle']}
                                ]]}}
                                component="./Tableaux/ClientTab"
                                filterFromLC={true}
                                otherProps={{
                                    title:`Liste des ${row['Marque']} ${row['Modele']} ${row['Couleur']}, arrivée ${row['Arrivee']}`,
                                    hidden:['idAes','idArrivee','idArticle','Article'],
                                    filterKeys:['Article','CB','RFID'],
                                    paddings:8
                                }}
                            />
                            </div>
                        )}
                    }],
                }}
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
                machineLearning
            />		  
        </div>
    )
} 