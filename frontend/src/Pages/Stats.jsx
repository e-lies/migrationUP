import React from 'react';
import { useParams} from "react-router";
import StatClientTab from '../components/Tableaux/StatClientTab';

var page = ""
export default function Stats(props){
    const param = useParams()
    React.useEffect(()=>{
        page = JSON.stringify(param)
    },[])
    React.useEffect(()=>{
        console.log("param = ",param)
        if(page !== JSON.stringify(param)){
            page = JSON.stringify(param)
            window.location.reload()
        }
    },[JSON.stringify(param)])
    const tableaux = { 
        aes: {rule:"AesSuperviseur",filterKeys:["Magasin","CB"]},
        arrivees: {rule:"Arrivees",filterKeys:["Date","Fournisseur"]},
        ventes: {rule:"VentesAdmin",filterKeys:["Date","Client","Vendeur"]},
        mouvements: {rule:"MouvementsAdmin",filterKeys:[]},
        retourC: {rule:"RetourClient",filterKeys:["idClient","Marque","Modele","DH"]},
        retourF: {rule:"RetourFournisseur",filterKeys:["idFournisseur","Article"]},
//        retourF: {rule:"RetourFournisseur",filterKeys:["idFournisseur","Article"]},
    }
    return(
        <div id="tabStats">
            <StatClientTab 
                id={tableaux[param['page']].rule}
                rule={tableaux[param['page']].rule}
                filterKeys={tableaux[param['page']].filterKeys}
                //contextParams={{where:[{label:'Etat',operator:'=',value:'Cloture'}]}} 
                groupBy
                stats
                charts={['pie','bar','line','matrix','radar']}
            />		
                
        </div>
    )
}