import React, { useContext } from 'react';
//import TableauFormulaire from "../../../components/TableauFormulaire";
import LoadedComponent from '../../../components/LoadedComponent';
import { CrudContext } from '../../../context/ServerContext';
import { ContextForms } from '../../../context/Forms';
import  { IconButton, Icon } from '@material-ui/core';

export default function EnAttente(){
    const server = useContext(CrudContext)
    const forms = useContext(ContextForms)

    const condChange = (i,k,v,st) =>{
        let b = true
        let mouvs = server.data['VMMouvementsDispatches'] && server.data['VMMouvementsDemandes']
        && [...server.data['VMMouvementsDispatches']['all']['data'],...server.data['VMMouvementsDemandes']['all']['data']]
        if(k==='idArticle'){
            if(st.filter(s=>v===s['idArticle']).length > 0 || mouvs.filter(m=>v===m['idArticle']).length > 0){
                alert("Cet article est déjà sélectionné !! \n Veuillez modifier la quantité de la demande existante !")
                b = false
            }
        }
        return b
    }

    return( <div style={{display:'flex',flexDirection:'column'}}>
        <LoadedComponent
            id="VMMouvementsDispatches"
            component="./Tableaux/ClientTab"
            rule="VMMouvementsDispatches"
            //propToRender={[confirmed]}
            otherProps={{
               // title:"En cours de traitement",
               speedFct:true,
                hidden:['id','idMagasinDemandeur','qtePreparee'],
                lineFunctions:[{icon:'edit',label:'Modifier',fct:(row)=>{
                    forms.addForm('update','VMMouvement',{
                        callback: (rep,status)=>{
                            if(status < 300){
                                alert("Modification bien enregistrée")
                                forms.removeForm('update','VMMouvement')
                            }
                            else{
                                alert("Une erreur s'est produite ! \n Vérifiez vos données et votre réseau")
                            }
                        }
                    })
                }}],
                tools:[
                    ()=> <IconButton
                        color="primary"
                        onClick={()=>forms.addForm(
                            "insert",
                            "VMDemandeMouvement",{  
                            addRows: true,
                            deletable: true,
                            condChange,
                            onEnter:(i,k,v)=>{ 
                                if(k==="Qte"){ document.getElementById('AddRow').click() }
                                else if(k==="idArticle"){ document.querySelector(`[name=Qte${i}]`).select() }
                                return false 
                            },
                            defaultData:[{Qte:1}],
                            callback:(rep,st)=>{
                                if(st < 300){
                                    alert(`${rep[0]['count']} demandes bien envoyées`)
                                    forms.removeForm("insert","VMDemandeMouvement")
                                    server.read([{rule:"VMLigneMouvement"}],"Entrees",true)
                                    server.read([{rule:"VMMouvementsValides"}],"Entrees",true)
                                }
                                else{ alert("Une erreur s'est produite \n Veuillez vérifier le résultat !") }
                            }}
                        )}
                    >
                        <Icon style={{fontSize:'1.75em'}} size="medium">add_circle</Icon>
                   </IconButton>
                ],
                checkedFunctions:[{ icon:'delete', label:'Annuler',fct:(rows)=>{
                    let conf = window.confirm("Souhaitez-vous vraiment annuler ces "+rows.length+" demandes ??")
                    if(conf){
                        server.write(
                            [{type:'update',rule:'AnnulationMouvement',where:[{label:'id',operator:'in',value:rows.map(row=>row['id'])}] }],
                            (rep,st)=>{
                                if(st < 300){
                                    alert(`${rows.length} Annulations bien effectuées`)
                                    server.read([{rule:"VMMouvementsDemandes"}],"Attente",true)
                                    server.read([{rule:"VMMouvementsDispatches"}],"Attente",true)
                                }
                                else{
                                    alert("Une erreur s'est produite !! \n Veuillez vérifier votre serveur !")
                                }
                            }
                        ) 
                    }
                }}]
            }}
        /> 
        <LoadedComponent
            id="VMMouvementsDemandes"
            component="./Tableaux/ClientTab"
            rule="VMMouvementsDemandes"
            //propToRender={[confirmed]}
            otherProps={{
                speedFct:true,
                hidden:['id','idMagasinDemandeur'],
                lineFunctions:[{icon:'edit',label:'Modifier',fct:(row)=>{
                    forms.addForm('update','VMMouvement',{
                        callback: (rep,status)=>{
                            if(status < 300){
                                alert("Modification bien enregistrée")
                                forms.removeForm('update','VMMouvement')
                            }
                            else{
                                alert("Une erreur s'est produite ! \n Vérifiez vos données et votre réseau")
                            }
                        }
                    })
                    }},
                    { icon:'delete', label:'Annuler',fct:(row)=>{
                        let conf = window.confirm("Souhaitez-vous vraiment annuler cette demande ??")
                        if(conf){
                            server.write(
                                [{type:'update',rule:'AnnulationMouvement',where:[{label:'id',operator:'in',value:[row['id']]}]}],
                                (rep,st)=>{
                                    if(st < 300){
                                        alert(`Annulation de la demande de ${row['Article']} bien effectuée`)
                                        server.read([{rule:"VMMouvementsDemandes"}],"Attente",true)
                                        server.read([{rule:"VMMouvementsDispatches"}],"Attente",true)
                                    }
                                    else{
                                        alert("Une erreur s'est produite !! \n Veuillez vérifier votre serveur !")
                                    }
                                }
                            ) 
                        }
                    }}
                ],
                checkedFunctions:[{ icon:'delete', label:'Annuler',fct:(rows)=>{
                    let conf = window.confirm("Souhaitez-vous vraiment annuler ces "+rows.length+" demandes ??")
                    if(conf){
                        server.write(
                            [{type:'update',rule:'AnnulationMouvement',where:[{label:'id',operator:'in',value:rows.map(row=>row['id'])}] }],
                            (rep,st)=>{
                                if(st < 300){
                                    alert(`${rows.length} Annulations bien effectuées`)
                                    server.read([{rule:"VMMouvementsDemandes"}],"Attente",true)
                                    server.read([{rule:"VMMouvementsDispatches"}],"Attente",true)
                                }
                                else{
                                    alert("Une erreur s'est produite !! \n Veuillez vérifier votre serveur !")
                                }
                            }
                        ) 
                    }
                }}]
            }}
        />
    </div>)
}