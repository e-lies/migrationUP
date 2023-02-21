import React, { useReducer, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Formulaire from "../../../components/Formulaire";
import ClientTab from "../../../components/Tableaux/ClientTab";
import { CrudContext } from "../../../context/ServerContext";
import { ContextForms } from "../../../context/Forms";
import LoadedComponent from "../../../components/LoadedComponent";
import Passage from "../../../components/Passage";
import Alerts from '../../../components/Alerts';
import { nestData, groupSum } from "../../../reducers/Functions";
import {
  useTheme,
  TextField,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepButton,
  List,
  ListItem,
  ListItemText,
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
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  commandes: {
    backgroundColor: '#FFF'
  }
});

function reducer(state, action) {
  switch (action.type) {
    case "step":
      return { ...state, step: action.step };

    case "commandesEnCours":
      console.log("new commandes = ",action)
      return { ...state, commandesEnCours: action.data }

    case "commandesEnCach":
      action.push && localStorage.setItem("commandes",JSON.stringify(action.data))
      return { ...state, commandesEnCach: action.data }

    case "commande":
      console.log(action)
      return { ...state, commande: action.commande, saved: false };
    
    case "resetLignes":
      return { ...state, newLignes: [], newSorties: [], saved: false}
      
    case "aes":
      return { ...state, aes: action.aes };

    case "newLignes":
      return { ...state, newLignes: action.newLignes, saved: false };

    case "newSorties":
      return { ...state, newSorties: action.newSorties, saved: false };
    
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
  const server = useContext(CrudContext)
  const forms = useContext(ContextForms)
  const history = useHistory()
  const [expanded,setExpanded] = useState([0])
  const [vrac,setVrac] = useState([])
  const [articles,setArticles] = useState([])
  const [state, dispatch] = useReducer(reducer, {
    mode: "connected", //au cas où la connexion est perdue
    step: 0,
    commandesEnCours: [],
    commandesEnCach: [], //format: [{dh:'2020-12-24T10:31:25',commande:{client:15,mode:'à terme',lignes:[{idArticles:14,qte:3,sorties:[{idAes:31241}]}]},}]
    commande: {Versement:0.00}, //state de la commande actuelle
    newLignes: [],
    newSorties: [],
    aes: [],
    unexpected: [],
    saved: false
  });
  
  useEffect(() => {
    idComp = server.componentCreation("Commande");
    readCommandesEnCours();
    server.getSchema("select", "VMAes", idComp);
    server.getSchema("select", "VMLignesCommandeEnCours", idComp);
    server.read([{ rule: "VMAes" }], idComp,state.mode==="connected",(dt)=>dispatch({type:'aes',aes:dt}));
    server.read([{rule:"VMArticles"}],idComp,false,(dt)=>setArticles(dt))
    dispatch({type:'commandesEnCach',data:JSON.parse(localStorage.getItem("commandes") || "[]")})
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
    return(<div style={{display:'flex',justifyContent:'space-around'}}>
      <Button variant="contained" color="primary" disabled={state.saved} onClick={save}>
        Enregistrer <Icon>save</Icon>
      </Button>
      <Button variant="contained" color="secondary" disabled={!state.commande.id} onClick={cloture}>
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
        ...state.commande,
        children:[{
          type:'insert',
          rule:'LigneCommande',
          data: state.newLignes.map(nl=>{
            let sorties = state.newSorties.filter(ns=>ns.idArticle===nl.idArticle)
            return sorties.length > 0 ?
             {
              ...nl,
              children: [{
                type:'insert',
                rule:'Sortie',
                data: sorties.map(nsf=>{return {idAes:nsf.id}}) 
              }]
            } 
            : nl                
          })
        }] 
      }]
    }];
    if(Object.keys(state.commande).includes('id')){
      query = [{type:'delete',rule:'VMCommande',where:[{label:'id',operator:'=',value:state.commande.id}]},...query]
    }
    server.write(
      query,
      (rep,st)=>{
        if(st < 400){
          dispatch({type:'save',id:rep[0]['lastId'][0]})
          dispatch({type:'newLignes',newLignes:[]})
          dispatch({type:'newSorties',newSorties:[]})
          readCommandesEnCours()
          if(state.commande.idCach){ 
            dispatch({type:'commandesEnCach',data:state.commandesEnCach.filter((com,i)=>i!==state.commande.idCach),push:true}) 
          }
        } 
        else{
          let conf = window.confirm("Une erreur a empéché l'envoie au serveur \n Souhaitez-vous enregistrer les modifications sur cet appareil ?")
          if(conf){
            let comCach = [...state.commandesEnCach];
            if(state.commande.idCach){
              comCach.splice(state.commande.idCach,1)
            }
            dispatch({type:'commandesEnCach',data:[...comCach,{commande:state.commande,newLignes:state.newLignes,newSorties:state.newSorties,dateTime:new Date()}],push:true})
          }
        }
      },
      idComp
    )
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
    switch (stp) {
      case 0:
        return (<div>
          <Accordion
           expanded={expanded.includes(0)}
           onChange={()=>setExpanded(expanded.includes(0) ? expanded.filter(exp=>exp!==0) : expanded.concat(0))}
           className={classes.commandes} key="newCommande"
          >
            <AccordionSummary id="newCommandeSummary" expandIcon={<Icon>expand_more</Icon>}>
              <Typography variant="h6"> Nouvelle commande </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Formulaire
                id="newCommandes"
                //title="Création commande"
                hidden={['modePaiement','Versement']}
                type="insert"
                rule="VMCommande"
                onChange={st=>dispatch({type:'commande',commande:{...st[0],Client:st[0]['idClient'] ? server.schemas.insert['VMCommande'].columns['idClient'].possibles.find(p=>p.value===st[0]['idClient'])['label'] : ""}} )}
                FooterElement={()=>{return(<Button variant="contained" color="primary" disabled={!state.commande.idClient || state.commande.idCach || state.commande.id} onClick={()=>{dispatch({type:'step',step:1}); dispatch({type:'resetLignes'})}}>
                    Continuer <Icon>arrow_forward</Icon>
                  </Button>)
                }}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded.includes(1)}
            onChange={()=>setExpanded(expanded.includes(1) ? expanded.filter(exp=>exp!==1) : expanded.concat(1))}
            className={classes.commandes}
            key="commandesEnCours"
          >
            <AccordionSummary id="commandeEnCourSummary" expandIcon={<Icon>expand_more</Icon>}>
              <Badge color="primary" showZero badgeContent={state.commandesEnCours.length}><Typography variant="h6"> Commandes en cours </Typography></Badge>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fildset">
                <FormLabel component="legend">Commandes non cloturées:</FormLabel>
                <RadioGroup aria-label="commandes" name="commandes1" value={parseInt(state.commande.id)} onChange={e=>{dispatch({type:"commande",commande:state.commandesEnCours.find(com=>parseInt(com.id)===parseInt(e.target.value))}); dispatch({type:"resetLignes"})}}>
                  { state.commandesEnCours.map(com=>(
                    <FormControlLabel control={<Radio />} label={`${com.Client} le ${com.DH}`} value={com.id} />
                  ))}
                </RadioGroup>
                <Button variant="contained" color="primary" disabled={!state.commande.id} onClick={()=>dispatch({type:'step',step:1})}>
                  Continuer <Icon>arrow_forward</Icon>
                </Button>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <Accordion 
            expanded={expanded.includes(2)}
            onChange={()=>setExpanded(expanded.includes(2) ? expanded.filter(exp=>exp!==2) : expanded.concat(2))}
            className={classes.commandes} 
            key="commandesEnCach"
          >
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Badge color="primary" showZero badgeContent={state.commandesEnCach.length}><Typography variant="h6"> Commandes mises en cache </Typography></Badge>
            </AccordionSummary>
            <AccordionDetails>
            <FormControl component="fildset">
                <FormLabel component="legend">Commandes en cache:</FormLabel>
                <RadioGroup 
                  aria-label="commandesCach" 
                  name="commandesCach1" 
                  value={state.commande.idCach || null}
                  onChange={e=>{let cache = state.commandesEnCach[e.target.value];dispatch({type:"commande",commande:{...cache['commande'],idCach:e.target.value}}); dispatch({type:"resetLignes"}); dispatch({type:"newLignes",newLignes:cache['newLignes']}); dispatch({type:"newSorties",newSorties:cache['newSorties']})}}
                >
                  { state.commandesEnCach.map((com,i)=>{
                    let d = new Date(com.dateTime)
                    return(<div style={{display:'flex',fontSize:'0.7em'}}>
                    <FormControlLabel control={<Radio />} label={`${com.commande.Client} le ${d.getFullYear()}-${parseInt(d.getMonth()+1)}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`} value={`${i}`} />
                    <IconButton color="secondary" /*onClick={()=>dispatch({type:'commandesEnCach',commandesEnCach:state.commandesEnCach.filter((cc,j)=>j!==parseInt(i)),push:true})}*/>
                      <Icon>delete</Icon>
                    </IconButton>
                    </div>)
                    })
                  }
                </RadioGroup>
                <Button variant="contained" color="primary" disabled={!state.commande.idCach} onClick={()=>dispatch({type:'step',step:1})}>
                  Continuer <Icon>arrow_forward</Icon>
                </Button>
              </FormControl>
            </AccordionDetails>
              </Accordion>
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
              readers={{barcode:true,ocr:true}}
              onPassed={row=>passing(row)}
              onUnexpected={(code)=>dispatch({type:'unexpected',code})}
              ExtensionComp={ExtensionComp}
            />
            <ClientTab
              id="passed"
              title={`Montant: ${state.newLignes.reduce((a,c)=>a + ((c['PU']-c['Reduction'])*c['Qte']),0)} da`}
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
                PU:(val,row)=>(<TextField id={`PU${row.idArticle}`} label="Prix unitaire" value={val} onChange={e=>dispatch({type:'newLignes',newLignes:state.newLignes.map(nl=>nl.idArticle===row.idArticle ? {...nl,PU:e.target.value} : nl)})}/>),
                Reduction:(val,row)=>(<TextField id={`Reduction${row.idArticle}`} label="Réduction" value={row.Reduction} onChange={e=>dispatch({type:'newLignes',newLignes:state.newLignes.map(nl=>nl.idArticle===row.idArticle ? {...nl,Reduction:e.target.value} : nl)})}/>),
                Montant:(val,row)=><Typography variant="subtitle1">{ (row['PU']-row['Reduction'])*row['Qte'] }</Typography>
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
        let montant = state.newLignes.reduce((a,c)=>a + ((c['PU']-c['Reduction'])*c['Qte']),0)
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
            <div style={{display:'flex',justifyContent:'flex-start'}}>
            <Typography variant="h5" color="secondary">{`Montant: ${montant} da`}</Typography>
            <Typography variant="subtitle2" color="inherit" style={{marginLeft:12}}> {state.commande.Versement === montant ? "(Le compte est bon)" : (state.commande.Versement < montant ? `(Manque ${(montant || 0)-(state.commande.Versement || 0)} da)` : `(En trop: ${(state.commande.Versement || 0)-(montant || 0)} da)`)} </Typography>
            </div>
            {/*<TextField variant="outlined" label="Versement" value={state.commande.Versement} onChange={e=>dispatch({type:'commande',commande:{...state.commande,Versement:e.target.value}})} />*/}
            <Formulaire
              id="clotureCommande"
              title="Données de cloture:"
              type="insert"
              rule="VMCommande"
              hidden={['idClient']}
              where={[{label:'id',operator:'=',value:state.commande.id}]}
              defaultData={[state.commande]}
              onChange={st=>{console.log(st); dispatch({type:'commande',commande:{...state.commande,...st[0]}} )}}
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
      <Paper style={{ padding: 12 }} elevation={3}>
        <Stepper alternativeLabel activeStep={state.step}>
          <Step key="Commande">
            <StepLabel> {state.commande.Client ? `${state.commande.Client}` : "Initialisation de la commande"} </StepLabel>
          </Step>
          <Step key="Aes">
            <StepLabel> {state.newLignes.length > 0 ? `${state.newLignes.length} ligne(s), ${state.newLignes.reduce((a,c)=>parseInt(a)+parseInt(c.Qte),0)} articles` : "Articles, prix, réduction" } </StepLabel>
          </Step>
          <Step key="Recap">
            <StepLabel>Paiement et cloture</StepLabel>
          </Step>
        </Stepper>
      </Paper>      
      <div>
        { state && stepContent(state.step) }
      </div>
    </div>
  );
}