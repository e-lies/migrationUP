/*import React, { useReducer, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Formulaire from "../../../components/Formulaire";
import ClientTab from "../../../components/Tableaux/ClientTab";
import { CrudContext } from "../../../context/ServerContext";
import { ContextForms } from "../../../context/Forms";
import Passage from "../../../components/Passage";
import Progress from '../../../components/Progress';
import Alerts from '../../../components/Alerts';
import {
    makeStyles,
    TextField,
    Typography,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Icon,
    IconButton,
    Badge,
    Button
} from '@material-ui/core';

var idComp;
function imeiCheck(code)
{ if(code.length !== 15 || code.search(/\D/) > -1) {return false;}
	else { let compte=[];
	//var vect=code.split('');
	for(let i=0;i < code.length; i++)
		{ j=code[i]; 
			if(i % 2 == 0) { compte.push(parseInt(j)); }	
			else if(parseInt(j) <= 4)  { compte.push(parseInt(j*2)); }
			else { compte.push(parseInt(String(parseInt(j)*2)[0]),parseInt(String(parseInt(j)*2)[1])); }
		}   var somme = compte.reduce((a, b) => a + b, 0); 
	if(somme % 10 > 0)  { return false; }
	else { return true;}
	}
}

function passingQR(chaine,imei,qte,length=10){
    let rslt = {barcode:'',codes:[]}
    let long = imei ? 15 : length
    let i = 0
    rslt.barcode = chaine.replace(/[^A-Za-z0-9]/gi,'')
    if(imei){
        while (i < chaine.length && (qte && rslt.codes.length < qte)) {        
            if(imeiCheck(chaine.substring(i,i+long))){
                rslt.codes.push(chaine.substring(i,i+long))
                i += long
                let regex = new RegExp(chaine.substring(i,i+long))
                rslt.barcode.replace(regex,'')
            }
            else{
                i++
            }
        }
    }
    else{
        let arr = chaine.split(/[^0-9a-zA-Z]/)
        rslt['codes'] = arr.reduce((acc,cur)=>{
            if(/^[0-9]+$/.test(cur)){
                let regex = new RegExp(cur)
                rslt.barcode.replace(regex,'')
                return acc.concat(cur)
            }
            else{
                return acc
            }
        },[])
    }
    return rslt
}

const Carton = (props)=>{
    const { idArticle, isImei, hasRfid, onValidate } = props;
    const [barcode,setBarcode] = useState("")
    const [rfid,setRfid] = useState("")
    const [quantite,setQuantite] = useState(0)
    const [items,setItems] = useState([])
    useEffect(()=>{
        if(items.length > quantite){
            setItems(items.slice(0,quantite))
        }
        else{
            let elm = []
            for (let index = 0; index < quantite-parseInt(items.length); index++) {
                elm.push({CB:'',Rfid:'',Qte:1})
            }
            setItems([...items,...elm])
        }
    },[quantite])
    const passing = row=>{

    }
    const ExtensionComp = ()=>{
        return(<Progress
            id={`ratioCarton`}
            type="circle" 
            value={items.filter(it=>{return hasRfid ? (it.CB && it.Rfid) : (it.CB)}).length} 
            total={items.length}
            textFct={(value,total)=>`${value}/${total}`}
        />)
    }
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Passage
              id="passageAesCarton"
              data={items}
              passed={items}
              idKey={['CB','Rfid']}
              readers={{barcode:true,ocr:true}}
              onPassed={row=>passing(row)}
              onUnexpected={(code)=>dispatch({type:'unexpected',code})}
              ExtensionComp={ExtensionComp}
            />
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Formulaire
                    id="formCarton"
                    title="Articles à remplir:"
                    type="insert"
                    defaultData={items}
                    hidden={['idCarton']}
                    deletable={true}
                    onChange={st=>setItems(st)}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    disabled={items.filter(it=>{return hasRfid ? (it.CB && it.Rfid) : (it.CB)}).length < items.length} 
                    onClick={()=>onValidate(barcode,rfid,quantite,items)}
                >
                        Validation <Icon>arrow_forward</Icon>
                </Button>
            </div>
        </div>
    )    
}

function reducer(state,action){
    switch(action.type){

    }
}


export default function Arrivee(){
    const classes = useStyles()
    const server = useContext(CrudContext)
    const forms = useContext(ContextForms)
    const history = useHistory()
    const [state,dispatch] = useReducer(reducer,{
        step:0,
        passageSettings:{idArticle:null,idEmp:null,type:'Barcode',mode:'liveStream',imei:false,rfid:false,base:1},
        cartonSettings:{CB:null,RFID:null},
        data:{arrivee:{},articles:[],cartons:[]},
        arriveesEnCours:[],
        arriveesEnCach:[],
        aes:[],
        articles:[],
        saved:false
    })
    useEffect(()=>{

    },[])
    return(<div style={{width:'100%'}}>
        <Paper style={{ padding: 12 }} elevation={3}>
            <Stepper alternativeLabel activeStep={state.step}>
            <Step key="Arrivees">
                <StepLabel> {state.data.Fournisseur ? `${state.data.Fournisseur}` : "Initialisation de l'arrivée'"} </StepLabel>
            </Step>
            <Step key="Prepa">
                <StepLabel> {state.data.lignes.length > 0 ? `${state.data.lignes.length} ligne(s), ${state.data.lignes.reduce((a,c)=>parseInt(a)+parseInt(c['aes'].Qte),0)} articles` : "Préparation" } </StepLabel>
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
    )
}*/