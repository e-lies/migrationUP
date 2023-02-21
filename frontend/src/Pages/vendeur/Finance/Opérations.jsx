import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Formulaire from '../../../components/Formulaire';
import { CrudContext } from '../../../context/ServerContext';
import { useSize } from '../../../reducers/Hooks';
import IdCard from '../../../components/IdCard';
import Maps from '../../../components/Maps/Maps';
import { Typography, List, ListItem } from '@material-ui/core';

export default function Operation (){
    const server = useContext(CrudContext)
    const [data,setData] = useState({})
    const [client,setClient] = useState({})
    const {width} = useSize("containerBalance")
    const histo = useHistory()
    useEffect(()=>{
        server.getSchema("select","VMContact")
    },[])
    useEffect(()=>{
        data['idContact'] && handleClient(data['idContact'])
    },[JSON.stringify(data)])    
    
    const handleClient = (id) =>{
        server.read(
            [{rule:'VMContact',params:{where:[{label:'id',operator:'=',value:id}]}}],
            "Balance",
            false,
            (dt)=>setClient(dt[0])
        )
    }

    return(
        <div id="containerBalance" style={{display:'flex',justifyContent:'space-around',flexWrap:width < 600 ? 'wrap' : 'nowrap',padding:8}}>
            <div style={{width:width < 600 ? '100%' : '50%'}}>
            <Formulaire 
                id="addOperation"
                title="Opération financière"
                type="insert"
                rule="VMBalance"
                hidden={data['Raison'] ? (['Versement','Rectification'].includes(data['Raison']) ? ['Entree'] : ['Sortie']) : ['Entree','Sortie']}
                onChange={st=>setData(st[0])}
                callback={(rep,st)=>{
                    if(st < 300){
                        alert(`${data['Raison']} réussie`)
                        histo.push("/siraj/vendeur/Finance/Historique")
                    }
                    else{
                        alert("Une erreur c'est produite \n Veuillez vérifier le résultat !")
                    }
                }}
            />
            </div>
            {client['Nom'] &&
            <IdCard
                columns={server.schemas.select['VMContact'] || {}}
                jsn={client}
                type="Client"
                title="Nom"
                fillList={(jsn,col)=>{
                    return( <List component="ul">
                        <ListItem key="soldeClient"> 
                            <Typography variant="subtitle2">Solde: </Typography>    
                            <Typography variant="subtitle1" style={{marginLeft:8,fontWeight:'bold'}}> {`${jsn.Solde} da`} </Typography>    
                        </ListItem>
                        <ListItem key="adresseClient"> 
                            <Typography variant="subtitle2">Adresse: </Typography>    
                            <Typography variant="subtitle1" style={{marginLeft:8}}> {jsn.Adresse} </Typography>    
                        </ListItem>
                        <ListItem key="mailClient"> 
                            <Typography variant="subtitle2">Mail: </Typography>    
                            <Typography variant="subtitle1" style={{marginLeft:8}}> {jsn.Mail} </Typography>    
                        </ListItem>
                    </List>

                    )
                } }
                functions={[{name:'Position',fct:(jsn=>(
                    <Maps
                        mapStyle={{width:'100%',height:270}}
                        data={[client]}
                        markers={{position:'Position'}}
                        center={JSON.parse(client['Position'])}
                    />
                ))}]}
            /> }
            
        </div>
    )
}