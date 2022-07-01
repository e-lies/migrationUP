import React, { useReducer, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSize } from '../../../reducers/Hooks';
import Formulaire from "../../../components/Formulaire";
import ClientTab from "../../../components/Tableaux/ClientTab";
import { CrudContext } from "../../../context/ServerContext";
import { ContextForms } from "../../../context/Forms";
import { GeoContext } from "../../../context/GeolocationContext";
import Passage from "../../../components/Passage";
import Alerts from '../../../components/Alerts';
import { nestData, groupSum, circleDistance, cleanFromKeys } from "../../../reducers/Functions";
import {
  useTheme,
  TextField,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Badge,
  Button,
  IconButton,
  Icon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
  Zoom
} from "@material-ui/core";
import Maps from "../../../components/Maps/Maps";

const useStyles = makeStyles(theme=>({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  commandes: {
    backgroundColor: '#FFF'
  },
  accordion:{
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    minHeight: 40,
    maxHeight: 52
  }
}));

function reducer(state, action) {
  switch (action.type) {
    case "step":
      return { ...state, step: action.step };

    case "commandeEnCach":
      return { ...state, commandeEnCach: action.data }

    case "commandesEnCours":
      return { ...state, commandesEnCours: action.data }

    case "commande":
      console.log(action)
      return { ...state, commande: action.commande, saved: false };
    
    case "resetLignes":
      return { ...state, newLignes: [], newSorties: [], saved: false}
      
    case "aes":
      return { ...state, aes: action.aes };

      case "clients":
        return { ...state, clients: action.clients };

    case "newLignes":
      return { ...state, newLignes: action.newLignes, saved: false };

    case "newSorties":
      return { ...state, newSorties: action.newSorties, saved: false };
    
    case "setVente":
        return { ...state,...action.data }

    case "unexpected":
      let unexpected = state.unexpected.includes(action.code) ? state.unexpected : state.unexpected.concat(action.code)
      return { ...state, unexpected };

    case "save":
      alert("Enregistrement bien effectué")
      return { ...state, saved: true, commande: {...state.commande,id:action.id} } 

      case "saved":
        return { ...state, saved: action.saved }
    default:
      return state
      break;
  }
}
var idComp;
export default function Commande() {
  const classes = useStyles()
  const theme = useTheme()
  const { width, height } = useSize()
  const server = useContext(CrudContext)
  const forms = useContext(ContextForms)
  const geo = useContext(GeoContext)
  const history = useHistory()
  const [expanded,setExpanded] = useState()
  const [vrac,setVrac] = useState([])
  const [articles,setArticles] = useState([])
  const [mapOpen,setMapOpen] = useState(false)
  const [versementValue,setVersementValue] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    mode: "connected", //au cas où la connexion est perdue
    step: 0,
    clients: [],
    commandesEnCours: [],
    commandeEnCach: {},
    commande: {Versement:0.00}, //state de la commande actuelle
    newLignes: [],
    newSorties: [],
    aes: [],
    unexpected: [],
    saved: false
  });
  
  useEffect(() => {
    geo.getGeolocation()
    idComp = server.componentCreation("Commande");
    readCommandesEnCours();
    server.getSchema("select", "VMAes", idComp);
    server.getSchema("select", "VMLignesCommandeEnCours", idComp);
    server.read(
      [
        { rule: "VMAes", params:{where:[[{label:'Etat',operator:'=',value:'Ok'}]]} },
        { rule: "VMContact", params:{cols:[{col:'id'},{col:'Nom'},{col:'Adresse'},{col:'Solde'},{col:'maxCredit'}],where:[[{label:'typeContact',operator:"<",value:2}]]} }
      ],
      idComp,
      true,
      (dt,ru,prm)=>{ ru === "VMAes" ? dispatch({type:'aes',aes:dt}) : dispatch({type:'clients',clients:dt})}
    );
    server.read([{rule:"VMArticles"}],idComp,false,(dt)=>setArticles(dt))
    dispatch({type:'commandeEnCach',data:JSON.parse(localStorage.getItem("commande") || "{}")})
    document.addEventListener("localDataStorage",()=>{
    dispatch({type:'commandeEnCach',data:JSON.parse(localStorage.getItem("commande"))})
   },false)
  }, []);
  useEffect(() => {
    if(state.commande.id){
      let actualCommande = state.commandesEnCours.find(com=>com.id===state.commande.id)
      dispatch({type:'commande',commande:Object.keys(actualCommande).reduce((a,c)=>{ return c!=='existingLignes' ? {...a,[c]:actualCommande[c]} : a },{})})
      let lignes = []
      let sorties = []
      actualCommande['existingLignes']['data'].forEach(lc=>{
        lignes.push(Object.keys(lc).reduce((a,c)=>{return c==="existingSorties" ? a : {...a,[c]:lc[c]}},{}))
        lc['existingSorties']['data'].forEach(sor=>{
          sorties.push(sor)
        })
      })
      dispatch({type:'newLignes',newLignes:lignes})
      dispatch({type:'newSorties',newSorties:sorties})
    }
  },[JSON.stringify(state.commande.id)]);
  
  const readCommandesEnCours = ()=>{
    server.read(
      [{
        rule: "VMCommandesEnCours",
        children: [{
          key:'existingLignes',
          parentCol:'id',
          childCol:'idCommande',
          rule:'VMLignesCommandeEnCours',
          children: [{
            key:'existingSorties',
            parentCol:'id',
            childCol:'idLigneCommande',
            rule:'VMSorties'
          }]
        }]
      }],
      idComp,
      state.mode==="connected",
      (dt)=>dispatch({type:'commandesEnCours',data:dt})
    );
  }

  const condChangeVrac = (i,k,v,st) =>{
    let art = k === 'idArticle' ? articles.find(a=>a.idArticle===v) : articles.find(a=>a.idArticle===st[i].idArticle)
    if(art){
      if(k === 'idArticle' && [...state.newLignes,...st].filter(s=>s.idArticle===art.idArticle).length > 0){
        alert("Article déjà passé !! \n Veuillez modifier la quantité")
        return false
      }
      else if(k === 'Qte' && art.Qte < v){
        alert(`Quantité de ${art.Article} demandée supérieur au disponible !`)
        return false
      }
      else{
        return true
      }
    }
    else{
      alert("Article non défini !")
      return false
    }
  }
  const FooterVrac = ({data})=>{
    let vrc = data
      .filter(v=>v.idArticle && v.Qte)
      .map(d=>{ 
        let art = articles.find(a=>a.idArticle===d.idArticle)
          return {...d,id:0,PU:art.PU,Reduction:0.00,Article:art.Article}
      })
      return(<Button
        variant="contained"
        color="primary" 
        onClick={()=>{ dispatch({type:'newLignes',newLignes:state.newLignes.concat(vrc)}); forms.removeForm("insert","LigneCommande")} }
      >
        Ajouter <Icon>save</Icon>
    </Button>)
  }
  const ExtensionComp = ()=>{
    return(<IconButton
            onClick={()=>forms.addForm("insert","LigneCommande",{
              addRows: true,
              deletable: true,
              hidden:['idCommande','qteBonus','PU','Reduction'],
              complement:{Qte:(r,k,i)=>(<Typography variant="h6" color="secondary">{r['idArticle'] && `Max: ${articles.find(a=>a.idArticle===r.idArticle)['Qte'] || 0}`}</Typography>)},
              onEnter:(i,k,v)=>{ 
                if(k==="Qte"){ document.getElementById('AddRow').click() }
                else if(k==="idArticle"){ document.querySelector(`[name=Qte${i}]`).select() }
                return false 
              },
              condChange:condChangeVrac,
              onChange:st=>setVrac(st),
              FooterElement:FooterVrac
            })}
        > 
          <Icon style={{fontSize:'1.3em'}} color="primary"> bubble_chart </Icon>
    </IconButton>)
  }

  const FooterCloture = ()=>{
    let montant = state.newLignes.reduce((a,c)=>a + ((c['PU']-c['Reduction'])*(c['Qte']-c['qteBonus'])),0)
    return(<div style={{display:'flex',justifyContent:'space-around'}}>
      <Button variant="contained" color="primary" disabled={state.saved} onClick={save}>
        Enregistrer <Icon>save</Icon>
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        disabled={!state.commande.id || (state.commande.modePaiement && state.commande.modePaiement !== 'A terme' && state.commande.Versement < montant)}
        onClick={cloture}
      >
        Cloturer <Icon>done_all</Icon>
      </Button>
    </div>)
  }

  const passing = rows =>{
    rows.forEach(row=>{
      state.newSorties.find(s=>s.id===row.id) 
        ?  console.log("already done!")
        : dispatch({type:'newSorties',newSorties:state.newSorties.concat(row)});
      let art = articles.find(a=>a.idArticle===row.idArticle);
      if(state.newLignes.find(ligne=>ligne.idArticle===row.idArticle)){
        dispatch({type:'newLignes',newLignes:state.newLignes.map(nl=>nl.idArticle===row.idArticle ? {...nl,Qte:nl.Qte+row.Qte} : nl)})
      }
      else{
        dispatch({type:'newLignes',newLignes:state.newLignes.concat({id:0,idArticle:row.idArticle,Article:art.Article,Qte:row.Qte,PU:art.PU,Reduction:0.00})})
      }
    })
  }
  
  function save(){
    dispatch({type:'saved',saved:true})
    let query =  [{
      type:'insert',
      rule:'VMCommande',
      data:[{
        ...cleanFromKeys(state.commande,['id']),
        children:[{
          type:'insert',
          rule:'LigneCommande',
          data: state.newLignes.map(nl=>{
            let sorties = state.newSorties.filter(ns=>ns.idArticle===nl.idArticle)
            return sorties.length > 0 ?
             {
              ...cleanFromKeys(nl,['id']),
              children: [{
                type:'insert',
                rule:'Sortie',
                data: sorties.map(nsf=>{return {idAes:nsf.id}}) 
              }]
            } 
            : cleanFromKeys(nl,['id'])                
          })
        }] 
      }]
    }];
    if(Object.keys(state.commande).includes('id')){
      query = [{type:'update',rule:'AnnulationCommande',data:[],where:[[{label:'id',operator:'=',value:state.commande.id}]]},...query]
    }
    server.write(
      query,
      (rep,st)=>{
        if(st < 400){
            dispatch({type:'save',id:rep[0]['lastId'][0]})
            dispatch({type:'newLignes',newLignes:[]})
            dispatch({type:'newSorties',newSorties:[]})
            readCommandesEnCours()
            server.read(
              [{ rule: "VMAes", params:{where:[{label:'Etat',operator:'=',value:'Ok'}]} }],
              idComp,
              true,
              (dt)=>dispatch({type:'aes',aes:dt})
            );
            localStorage.setItem("commande","{}")
        } 
        else{
            let conf = window.confirm("Une erreur a empéché l'envoie au serveur \n Souhaitez-vous enregistrer les modifications sur cet appareil ?")
            if(conf){
                localStorage.setItem(
                    "commande",
                    JSON.stringify({commande:state.commande,newLignes:state.newLignes,newSorties:state.newSorties,dateTime:new Date()})
                )
            }
            dispatch({type:'step',step:0})
        }
      },
      idComp
    )
  }
  const VersementTitle = ({ verse })=>{
  //  let verse = document.querySelector("[name=Versement0]").value
    return(<Typography style={{margin:8}} variant='h6' color="primary"> {`Total: ${parseFloat(parseFloat(state.commande.Versement || 0)+parseFloat(verse))} da`} </Typography>)
  }
  const versement = ()=>{
    forms.addForm('update','VMVersementCommande',{
      where:[{label:'id',operator:'=',value:state.commande.id}],
      complement: {
        Versement:()=> { return (<VersementTitle verse={versementValue} />) }
      },
      onChange:st=>setVersementValue(st[0]['Versement']),
      callback:(rep,st)=>{
        if(st < 400){
          alert('Versement bien accepté')
          dispatch({type:'commande',commande:{...state.commande,Versement:versementValue}})
        }
        else{
          alert("Ue erreur s'est produite au moment du versement !!")
        }
      }
    })
  }
  function cloture(){
    if(state.commande.id && state.commande.id > 0){
      server.write(
        [{type:'update',rule:'VMClotureCommande',data:{modePaiement:state.commande.modePaiement,Versement:state.commande.Versement},where:[{label:'id',operator:'=',value:state.commande.id}]}],
        (rep,st)=>{
          if(st<300){
            alert("Commande bien cloturée")
            history.push("/siraj/vendeur/Ventes/Historique")
          }
          else{
            alert("Une erreur a empéchée la cloture de la commande !")
          }
        },
        idComp
      )
    }
  }

  const stepContent = (stp) => {
    let location = geo.geolocation.latLng
    let commandeCach = state.commandeEnCach
    let nearClients = state.clients
    .filter(client=>client.Position && circleDistance(location,JSON.parse(client.Position)) < 1000000)
    .map(client=>{ if(client.id===state.commande.idClient){ 
        client['icon'] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-Vf3ORV6p7Xx6YPZxaoikhM-xvwQEVCCxw&usqp=CAU"
      }
      return client
     })
    switch (stp) {
      case 0:
        return (<div>
          { commandeCach && commandeCach['commande'] ?
            (<div style={{paddingTop:12}}>
                <Typography variant="h5" color="secondary"> Commande en cache: </Typography>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
                    <Typography variant="subtitle1"> {`${commandeCach.commande['Client']}, le ${commandeCach['dateTime']}`} </Typography>
                    <div style={{display:'flex',justifyContent:'space-around',width:350,marginTop:24}}>
                    <Button variant="contained" color="secondary" onClick={()=>{ localStorage.setItem("commande","{}"); dispatch({type:'commandeEnCach',data:{}}) }} >
                        Annuler <Icon>clear</Icon>
                    </Button>
                    <Button variant="contained" color="primary"onClick={()=>{dispatch({type:'step',step:1}); dispatch({type:'setVente',data:commandeCach})}}>
                        Continuer <Icon>arrow_forward</Icon>
                    </Button>
                    </div>
                </div>
            </div>)
            :
            (<React.Fragment>
             <Accordion
                expanded={expanded === 0}
                onChange={()=>setExpanded(expanded === 0 ? null : 0)}
                className={classes.commandes} key="newCommande"
                //TransitionComponent={Zoom}
                TransitionProps={{
                  timeout:500
                }}
            >
                <AccordionSummary id="newCommandeSummary" className={classes.accordion} expandIcon={<Icon>expand_more</Icon>}>
                <Typography style={{padding:0,margin:0}} variant="h6"> Nouvelle commande </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Formulaire
                    id="newCommandes"
                    defaultData={[state.commande]}
                    hidden={['modePaiement','Versement','Signature']}
                    type="insert"
                    rule="VMCommande"
                    complement={{
                      idClient:()=>(<div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap'}}>
                        <IconButton style={{position:'relative',display:'inline'}} color="primary" onClick={()=>setMapOpen(true)}>
                          <Icon style={{fontSize:'1.5em'}}> person_pin_circle </Icon>
                        </IconButton>
                        <IconButton 
                          style={{position:'relative',display:'inline'}} 
                          color="primary"
                          onClick={()=>forms.addForm("insert","Client",{
                            callback:(resp,st)=>{
                              if(st < 400){
                                alert("Client bien crée")
                                forms.removeForm("insert","Client")
                                server.getSchema("insert","VMCommande")
                                server.read(
                                  { rule: "VMContact", params:{cols:[{col:'id'},{col:'Nom'},{col:'Adresse'},{col:'Solde'},{col:'maxCredit'}],where:[{label:'typeContact',operator:"<",value:2}]} },
                                  idComp,
                                  true,
                                  dt=>dispatch({type:'clients',clients:dt})
                                )                                
                              }
                              else{ alert("Une erreur sur le serveur a empêchée l'ajout du client' !") }
                            }
                          })}
                        >
                          <Icon style={{fontSize:'1.5em'}}> add_circle </Icon>
                        </IconButton>
                        {state.commande.idClient && (<IconButton 
                          style={{position:'relative',display:'inline'}} 
                          color="primary"
                          onClick={()=>forms.addForm("update","VMClient",{
                            where:[{label:'id',operator:'=',value:state.commande.idClient}],
                            callback:(resp,st)=>{
                              if(st < 400){
                                alert("Client bien mis à jour")
                                forms.removeForm("update","VMClient")
                              }
                              else{ alert("Une erreur sur le serveur a empêchée la mise à jour !") }
                            }
                          })}
                        >
                          <Icon style={{fontSize:'1.5em'}}> edit </Icon>
                        </IconButton>)}
                      </div>)
                    }}
                    onChange={st=>dispatch({type:'commande',commande:{...st[0],Client:st[0]['idClient'] ? server.schemas.insert['VMCommande'].columns['idClient'].possibles.find(p=>p.value===st[0]['idClient'])['label'] : ""}} )}
                    FooterElement={()=>{return( <div style={{display:'flex',justifyContent:'center',maxWidth:300}}>
                    <Button variant="contained" color="primary" disabled={!state.commande.idClient || state.commande.idCach || state.commande.id} onClick={()=>{dispatch({type:'step',step:1}); dispatch({type:'resetLignes'})}}>
                        Continuer <Icon>arrow_forward</Icon>
                    </Button></div>)
                    }}
                />
                <Alerts
                  id="mapClient"
                  type="info"
                  open={mapOpen}
                  fullScreen={document.body.clientWidth < 400}
                  handleClose={()=>setMapOpen(false)}
                  headerFooterFormat={{title:'Choix du client',icon:'account_box',footer:null}}
                >
                  <Maps
                    data={nearClients}
                    zoom={10}
                    center={state.commande.idClient && nearClients.find(cl=>cl.id===state.commande.idClient) ? JSON.parse(nearClients.find(cl=>cl.id===state.commande.idClient)['Position']) : geo.geolocation.latLng}
                    mapStyle={{minWidth:370,width:'100%',height:450,display:'flex',justifyContent:'center'}}
                    onError={()=>console.log("erreur maps")}
                    markers={{position:'Position',label:'Nom',onClick:jsn =>{ setMapOpen(false); dispatch({type:'commande',commande:{...state.commande,Client:jsn.Nom,idClient:jsn.id}})}}}
                  />
                </Alerts>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 1}
                onChange={()=>setExpanded(expanded === 1 ? null : 1)}
                className={classes.commandes}
                key="commandesEnCours"
                TransitionComponent={Zoom}
                TransitionProps={{
                  timeout:500
                }}
            >
                <AccordionSummary id="commandeEnCourSummary" className={classes.accordion} expandIcon={<Icon>expand_more</Icon>}>
                <Badge color="secondary" showZero badgeContent={state.commandesEnCours.length}><Typography variant="h6"> Commandes en cours </Typography></Badge>
                </AccordionSummary>
                <AccordionDetails>
                <FormControl component="fildset">
                    <FormLabel component="legend">Commandes non cloturées:</FormLabel>
                    <RadioGroup aria-label="commandes" name="commandes1" value={parseInt(state.commande.id)} onChange={e=>{dispatch({type:"commande",commande:state.commandesEnCours.find(com=>parseInt(com.id)===parseInt(e.target.value))}); dispatch({type:"resetLignes"})}}>
                    { state.commandesEnCours.map(com=>(<div>
                        <FormControlLabel control={<Radio />} label={`${com.Client} le ${com.DH}`} value={com.id} />
                        <IconButton onClick={()=>{
                          server.write(
                            [{type:'update',rule:'AnnulationCommande',where:[{label:'id',operator:'=',value:com.id}]}],
                            (rep,st)=>{
                              if(st < 400){
                                alert("Commande bien annulée");
                                readCommandesEnCours()
                              }
                              else{ alert("Un problème est survenu lors de l'annulation de la commande !!") }
                            },
                            idComp
                          ) 
                        }}>
                          <Icon color="error" size="medium"> delete </Icon>
                        </IconButton>
                      </div>
                    ))}
                    </RadioGroup>
                    <Button variant="contained" color="primary" disabled={!state.commande.id} onClick={()=>dispatch({type:'step',step:1})}>
                    Continuer <Icon>arrow_forward</Icon>
                    </Button>
                </FormControl>
                </AccordionDetails>
             </Accordion>
            </React.Fragment>)}
        </div>);
      case 1:
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
            }}
          >
            <div style={{display:'flex',justifyContent:'space-between',padding:12}}>
              <Button variant="contained" color="primary" onClick={()=>dispatch({type:'step',step:0})}>
                  <Icon>arrow_backward</Icon> Commandes
              </Button>
              <Button variant="contained" color="primary" disabled={state.newLignes.length < 1} onClick={()=>dispatch({type:'step',step:2})}>
                  Validation <Icon>arrow_forward</Icon>
              </Button>
            </div>
            <Passage
              id="passageCommande"
              data={state.aes.filter(a=>a.Categorie!=='Vrac')}
              passed={state.newSorties}
              idKey={['CB','Rfid']}
              readers={{barcode:true}}
              separChar=','
              //AlertComp={ChipComp}
              //onPassed={row=>passing(row)}
              //onUnexpected={(code)=>dispatch({type:'unexpected',code})}
              ExtensionComp={ExtensionComp}
            />
            <ClientTab
              id="passed"
              title={`Montant: ${state.newLignes.reduce((a,c)=>a + ((c['PU']-c['Reduction'])*(c['Qte']-c['qteBonus'])),0)} da`}
              schema={server.schemas.select["VMLignesCommandeEnCours"]}
              data={state.newLignes}
              hidden={['id','idCommande','idArticle']}
              collapses={[{
                title:'Articles',
                cond:row=> state.newSorties.filter(s=>s.idArticle===row.idArticle).length > 0,
                fct:row=>(
                  <ClientTab
                    id={`aes${row.idArticle}`}
                    title="Articles passés"
                    schema={server.schemas.select['VMAes']}
                    data={state.newSorties.filter(d=>d.idArticle===row.idArticle)}
                    hidden={['id','idArticle','idCategorie','Categorie','Article','Marque','Modele','Couleur','Carton','idMagasin','Etat']}
                    lineFunctions={[
                      { label:'Supprimer',
                        icon:'delete',
                        fct:(row)=>{
                          dispatch({type:'newSorties',newSorties:state.newSorties.filter(ns=>ns.id!==row.id)})
                          let nlignes = [...state.newLignes]
                          let i = nlignes.findIndex(nl=>nl.idArticle===row.idArticle)
                          if(i > -1){
                            nlignes[i]['Qte'] = nlignes[i]['Qte']-row['Qte']
                            dispatch({type:'newLignes',newLignes:nlignes[i]['Qte'] <= 0 ? nlignes.filter((x,j)=>j!==i) : nlignes})
                          } 
                        }
                      }
                    ]}
                />)
              }]}
              cellFunctions={{
                qteBonus:(val,row)=>(<TextField id={`bonus${row.idArticle}`} label="Qte gratuite" value={val} onChange={e=>dispatch({type:'newLignes',newLignes:state.newLignes.map(nl=>nl.idArticle===row.idArticle ? {...nl,qteBonus:e.target.value} : nl)})}/>),
                PU:(val,row)=>(<TextField id={`PU${row.idArticle}`} label="Prix unitaire" value={val} onChange={e=>dispatch({type:'newLignes',newLignes:state.newLignes.map(nl=>nl.idArticle===row.idArticle ? {...nl,PU:e.target.value} : nl)})}/>),
                Reduction:(val,row)=>(<TextField id={`Reduction${row.idArticle}`} label="Réduction" value={row.Reduction} onChange={e=>dispatch({type:'newLignes',newLignes:state.newLignes.map(nl=>nl.idArticle===row.idArticle ? {...nl,Reduction:e.target.value} : nl)})}/>),
                Montant:(val,row)=><Typography variant="subtitle1">{ (row['PU']-row['Reduction'])*(row['Qte']-row['qteBonus']) }</Typography>
              }}
              lineFunctions={[
                { label:'Supprimer',
                  icon:'delete',
                  fct:(row)=>{
                    server.write(
                      [{type:'update',rule:'AnnulationLigneCommande',data:[],where:[{label:'id',operator:'in',value:[row['id']]}]}],
                      (rep,st)=>{
                        if(st < 300){
                          dispatch({type:'newLignes',newLignes:state.newLignes.filter(nl=>nl.idArticle!==row['idArticle'])})
                          dispatch({type:'newSorties',newSorties:state.newSorties.filter(nl=>nl.idArticle!==row['idArticle'])})
                        }
                      },
                      idComp
                    )
                  }
                }
              ]}
              />
          </div>
        );
      case 2:
        let montant = state.newLignes.reduce((a,c)=>a + ((c['PU']-c['Reduction'])*(c['Qte']-c['qteBonus'])),0)
        let client = state.clients.find(cl=>cl.id===state.commande.idClient)
        return(
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
            <div style={{display:'flex'}}>
              <Button variant="contained" color="primary" onClick={()=>dispatch({type:'step',step:0})}>
                <Icon>skip_previous</Icon> Commandes
              </Button>
              <Button variant="contained" color="primary" onClick={()=>dispatch({type:'step',step:1})}>
                <Icon>arrow_backward</Icon> Articles
              </Button>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
            <Typography variant="h6" color="secondary">{`Montant: ${montant} da`}</Typography>
            <Typography variant="subtitle2" color="inherit" style={{marginLeft:12}}> 
              {state.commande.modePaiement === "Comptant" 
               ? state.commande.Versement === montant ? "(Le compte est bon)" : (state.commande.Versement < montant ? `(Manque ${(montant || 0)-(state.commande.Versement || 0)} da)` : `(En trop: ${(state.commande.Versement || 0)-(montant || 0)} da)`)
               : state.commande.modePaiement === "A terme" ? `(${state.commande.Client} a droit à ${client['maxCredit']+client['Solde']} da de crédit)`
               : `Mode non pris en charge`
              }
            </Typography>
            </div>
            {/*<TextField variant="outlined" label="Versement" value={state.commande.Versement} onChange={e=>dispatch({type:'commande',commande:{...state.commande,Versement:e.target.value}})} />*/}
            <Button disabled={!state.commande.id} variant="outlined" color="secondary" onClick={versement}>
              Versement <Icon size="medium">payment</Icon>
            </Button>
            <Formulaire
              id="clotureCommande"
              title="Données de cloture:"
              type="insert"
              rule="VMCommande"
              hidden={['idClient','Signature','Versement']}
              where={[{label:'id',operator:'=',value:state.commande.id}]}
              defaultData={[state.commande]}
              onChange={st=>dispatch({type:'commande',commande:{...state.commande,...st[0]}} )}
              FooterElement={FooterCloture}
            />
          </div>
      )
      default: {
        return (<h4>Etape inconnue !</h4>);
      }
    }
  };

  return (
    <div style={{width:'100%'}}>
        <Stepper 
          alternativeLabel
          activeStep={state.step}
          style={{margin:'0px 0px 4px 0px',padding:8,backgroundColor:theme.palette.secondary.main,maxHeight:52}}
          >
          <Step key="Commande">
            <StepLabel
              style={{color:theme.palette.primary.contrastText}}
              StepIconComponent={()=>
                <Icon style={{color:theme.palette.primary[state.step >= 0 ? 'main' : 'contrastText'],fontSize:'1.5em'}}>person</Icon>
              }
            > 
              {window.screen.width > 480 && window.screen.height > 500 && 
                <Typography variant="subtitle2" color="initial"> 
                  {(state.commande.Client ? `${state.commande.Client}` : "Initialisation de la commande")}
                </Typography>  
              }
            </StepLabel>
          </Step>
          <Step key="Aes">
            <StepLabel
              style={{color:theme.palette.primary.contrastText}}
              StepIconComponent={()=>
                <Icon style={{color:theme.palette.primary[state.step >= 1 ? 'main' : 'contrastText'],fontSize:'1.5em'}}>shopping_cart</Icon>
              }
            > 
              {window.screen.width > 480 && window.screen.height > 500 && 
                <Typography variant="subtitle2" color="initial"> 
                  {(state.newLignes.length > 0 ? `${state.newLignes.length} ligne(s), ${state.newLignes.reduce((a,c)=>parseInt(a)+parseInt(c.Qte),0)} articles` : "Articles, prix, réduction" )} 
                </Typography>
              }
            </StepLabel>
          </Step>
          <Step key="Recap">
            <StepLabel
              style={{color:theme.palette.primary.contrastText}}
              StepIconComponent={()=>
                <Icon style={{color:theme.palette.primary[state.step >= 2 ? 'main' : 'contrastText'],fontSize:'1.5em'}}>money</Icon>
              }
            >
              {window.screen.width > 480 && window.screen.height > 500 && 
                <Typography variant="subtitle2" color="initial">
                  Paiement et cloture
                </Typography>
              }
            </StepLabel>
          </Step>
        </Stepper>
      <div>
        { state && stepContent(state.step) }
      </div>
    </div>
  );
}