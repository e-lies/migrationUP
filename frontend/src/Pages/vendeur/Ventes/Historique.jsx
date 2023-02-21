import React, { useContext } from 'react';
import StatClientTab from '../../../components/Tableaux/StatClientTab';
import { ContextForms } from "../../../context/Forms";

export default function Historique(){
    const forms = useContext(ContextForms)
    return(
        <StatClientTab 
            id="Commandes"
            rule="VMLignesCommandeCloturees"
            tableProps={{
                title: "Historique de mes ventes",
                filterKeys:[],
                hidden:['id','idCommande'],
                paddings: 2,
                lineFunctions:[
                    {icon:'gesture',
                     label:'signature',
                     cond:row=>!row.Signature,
                     fct:row=> forms.addForm("update","SignatureCommande",{
                        where:[{label:'id',operator:'=',value:row.id}],
                        callback:(rep,st)=>{
                            if(st < 300){
                                alert("Signature bien ajoutée")
                                forms.removeForm("update","SignatureCommande")
                            }
                            else{
                                alert("Un problème est survenu lors de l'envoie de la signature !")
                            }
                        }
                     })
                    }
                ],
                collapses: [{title:"Détails", fct:
                    (row)=>{ return(<div style={{paddingBottom:12}}>
                        <StatClientTab
                            id={`LC${row['id']}`}
                            rule="VMSorties"
                            contextParams={{where:[{label:'idLigneCommande',operator:'=',value:row['id']}]}}
                        />
                        </div>
                    )}
                }],
            }}
            groupBy
            stats
            charts={['pie','bar','line','matrix','radar']}
        />		  
    )
}