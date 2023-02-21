import React, { useContext, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import StatClientTab from '../components/Tableaux/StatClientTab';
import LoadedComponent from '../components/LoadedComponent';
import { Tooltip, Badge, Icon, IconButton, Snackbar, FormControlLabel, Switch } from '@material-ui/core';

const populate = `(function($){
    $.fn.setFormData = function(data){
        let t = this;
        $.each(data, function(key, value) {  
            var ctrl = $(t).find('[name='+key+']');  
            switch(ctrl.prop("type")) { 
                case "radio": case "checkbox": case "select":   
                    ctrl.each(function() {
                        if($(this).attr('value') == value) $(this).attr("checked",value);
                    });   
                    break; 
                    case "select" :
                    // manipulate select?
                    ctrl.val(value); 
                    break;
                default:
                    ctrl.val(value); 
            }  
        });  
    }
  })(jQuery)`

function flatten(input, reference, output) {
    output = output || {};
    for (var key in input) {
      var value = input[key];
      //key = reference ? reference + '.' + key : key;
      if (typeof value === 'object' && value !== null) {
        flatten(value, key, output);
      } else {
        output[key] = value;
      }
    }
    return output;
  }

function Axa(jsn){
    let refs = []
    if(window.location.hostname.includes('axa')){
        let interv = 0
        const req = ()=>fetch("https://portail-es.axa.fr/Mission/GetMissions", {
            "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "fr,fr-FR;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Chromium\";v=\"94\", \"Microsoft Edge\";v=\"94\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://portail-es.axa.fr/HomeEs/Index",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "page=1&rp=100&sortname=LastActionDate&sortorder=desc",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(prm=>prm.json()).then(rep=>{
            console.log(rep)
            let adp = rep.filter(r=>r.StatusId==="ADP")
            let newRefs = adp.map(a=>a.Reference)
            if(refs !== newRefs){
                refs = newRefs
                adp.forEach(a=>{
                  
                    fetch("http://127.0.0.1:8080/siraj/Models/AXA.php",{
                        "body": Object.keys(a).reduce((acc,cur)=>acc.concat(cur+"="+a[cur]),[]).join('&'),
                        "method": "POST"
                    }).then(prom=>prom.text()).then(console.log("insertion réussite"))
                    .catch(err=>console.log("insert error = ",err)).catch(err=>console.log("net error = ",err))
                })
                
                console.log(`%c ${adp.length} nouvelle(s) mission(s) ! ${adp.map(a=>a.Reference).join(',')}`, 'background: #222; color: #bada55');
            }

        }).catch(err=>{clearInterval(interv); alert("Une erreur c'est produite ! \n Veuillez vérifier votre connexion internet et relancez la fonction")})
        .catch(err=>{clearInterval(interv); alert("Une erreur c'est produite ! \n Veuillez vérifier votre connexion internet et relancez la fonction")})
        
        interv = setInterval(req,60000)
    }
    else{
        alert("Vous n'êtes pas sur le bon site !")
    }
}

export default function Extranets(props){
    const [openSnackCopy,setOpenSnackCopy] = useState(null)
    const theme = useTheme()
    const copyClientGeneration = (jsn)=>{
        switch (jsn.Nom) {
            case 'AXA':
                console.log(Axa.toString())
                return Axa.toString()+"; jsn="+JSON.stringify(jsn)+"; Axa(jsn)"
        
            default:
                break;
        }
    }
    return( <div>
        <LoadedComponent
            id="assurances"
            component="Lists"
            rule="Clients"
            otherProps={{
                idKey:'id',
                title:`Liste des partenaires`,
                avatar:'Logo',
                primary:'Nom',
                itemStyle:{backgroundColor:theme.palette.secondary.main,color:theme.palette.secondary.contrastText},
                //secondary:'component',
                action:jsn=>{
                    console.log("jsn = ",jsn,copyClientGeneration(jsn))
                    return( <Tooltip title="Copier l'url">
                    <IconButton
                        style={{fontSize:'1.25em',margin:24}}
                        onClick={()=>{
                            /*document.querySelector(`#copy${report.id}`).select()
                            //document.querySelector(`#copy${report.id}`).setSelectionRange(0, 99999) //for mobile
                            document.execCommand("copy")*/
                            navigator.clipboard.writeText(copyClientGeneration(jsn))
                            setOpenSnackCopy(jsn)
                        }}
                    >
                        <Icon color="default" size="medium">file_copy</Icon>
                    </IconButton>
                    </Tooltip> )
                },
                //draggable:85,
                collapse:client=>{
                    return(
                        <LoadedComponent
                            id={`client${client.id}`}
                            component="./Tableaux/ClientTab"
                            rule="Dossiers"
                            params={{where:[{label:'idClient',operator:'=',value:client.id}]}}
                            otherProps={{
                                hidden:['id','DateMaj','UserMaj','NoDocument','ComplTypeSinistre','OrigineDossier','RegionUP','DossierParent','Prefixe','ForcerCreationClient','TContacts','Tel','Adresse2','DeuxTelephone','TeP','DeuxEmail','SiteInt','NoClient','RefCommandeClient','Adr1Livr','Immeuble','Etage','NoLogement','ProtectEntree','ComProtectEntree','PlatefDatReception','MontFranchise','ReductionAmount'],
                                padding:4,       
                                lineFunctions:[
                                    {
                                        label:'Créer',
                                        icon:'file_copy',
                                        cond:jsn=>jsn.Etat==='Nouveau',
                                        fct:jsn=>{
                                            let obj = {
                                                "NoMfOrMuLaIrE": "FenetreElement",
                                                "Id": "80",
                                                "Utilisateur": "unipromotion.dilmi",
                                                "DateMaj": "2021-07-19",
                                                "UserMaj": "unipromotion.dilmi",
                                                "NoDocument": "210014",
                                                "Reference": "UP210014%2FIDF%2FDDE",
                                                "NomRisque": "tartampion+-+tartampion+++",
                                                "DateCreation": "19/07/21",
                                                //"TypeSinistre": "D%C3%A9g%C3%A2t+des+eaux",
                                                "CodeSinistre": "DDE",
                                                "ComplTypeSinistre": "",
                                                "OrigineDossier": "Expert+Cie%2FMut",
                                                "RegionUP": "Ile de France",
                                                "CodeRegion": "IDF",
                                                "DossierParent": "",
                                                "IdDossier": "",
                                                "Etat": "Ouvert",
                                                "NomPrenom": "tartampion",
                                                "Prefixe": "",
                                                "ForcerCreationClient": "0",
                                                "TContacts": "EnTeTe%3AClE_InTeRnE%C2%A4NomPrenom%C2%A4Prefixe%C2%A4Service%C2%A4Telephone%C2%A4Fax%C2%A4TelP%C2%A4Email%C2%A4str_LigneContact",
                                                "Fax": "",
                                                "Adresse1": "",
                                                "Tel": "",
                                                "Adresse2": "",
                                                "DeuxTelephone": "",
                                                "CP": "",
                                                "Ville": "",
                                                "TeP": "",
                                                "Pays": "",
                                                "Email": "",
                                                "TVAIntra": "",
                                                "DeuxEmail": "",
                                                "Contact": "",
                                                "TypeClient": "SCI",
                                                "SiteInt": "",
                                                "NoClient": "23",
                                                "RefCommandeClient": "",
                                                "BCRequis": "NON",
                                                "LivrDifferente": "AUTRE_ADRESSE",
                                                "NomLivr": "tartampion",
                                                "LivrPrefixe": "",
                                                "Adr1Livr": "",
                                                "TLivr": "",
                                                "Adr2Livr": "",
                                                "DeuxTLivr": "",
                                                "CLivr": "",
                                                "VilLivr": "",
                                                "PortLivr": "",
                                                "LivrContact": "",
                                                "LivrMail": "",
                                                "LivrDeuxMail": "",
                                                "BoutCreerLivr": "",
                                                "IntLivrContact": "",
                                                "IntLivrPrefixe": "",
                                                "IntTLivr": "",
                                                "IntPortLivr": "",
                                                "IntFax": "",
                                                "IntLivrMail": "",
                                                "IntLivrDeuxMail": "",
                                                "TypBatiment": "",
                                                "Immeuble": "",
                                                "Etage": "",
                                                "NoLogement": "",
                                                "ProtectEntree": "",
                                                "ComProtectEntree": "",
                                                "TInterlocuteurs": "EnTeTe%3AClE_InTeRnE%C2%A4Type%C2%A4NomPrenom%C2%A4Prefixe%C2%A4Adresse1%C2%A4Adresse2%C2%A4CP%C2%A4Ville%C2%A4Tel%C2%A4DeuxTelephone%C2%A4TeP%C2%A4Fax%C2%A4Email%C2%A4DeuxMail%C2%A4Reference%C2%A4AccordCadre%7C%C2%A4Client%C2%A4tartampion%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%7C%C2%A4Risque%C2%A4tartampion%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4%C2%A4",
                                                "HBGroupe": "",
                                                "UGLocataire": "",
                                                "RisqueComAcces": "",
                                                "AgenceClientRaisonSociale": "",
                                                "AgenceClientId": "",
                                                "AgenceClientAdresse1": "",
                                                "AgenceClientAdresse2": "",
                                                "AgenceClientCP": "",
                                                "AgenceClientVille": "",
                                                "AgenceClientTel": "",
                                                "AgenceClientTeP": "",
                                                "AgenceClientCResponsable": "",
                                                "AgenceClientCPrefixe": "",
                                                "AgenceClientSigle": "",
                                                "AgenceClientEmail": "",
                                                "AgenceClientComment": "",
                                                "AgenceClientAccordCadre": "",
                                                "AgenceClientRedevanceCom": "0",
                                                "ForcerCreationAgenceClientGest": "",
                                                "AgenceClientGestNomPrenom": "",
                                                "AgenceClientGestPrefixe": "",
                                                "AgenceClientGestPrenom": "",
                                                "AgenceClientGestAdresse1": "",
                                                "AgenceClientGestAdresse2": "",
                                                "AgenceClientGestCP": "",
                                                "AgenceClientGestVille": "",
                                                "AgenceClientGestTel": "",
                                                "AgenceClientGestTeP": "",
                                                "AgenceClientGestEmail": "",
                                                "ForcerCreationAgenceClientGard": "",
                                                "AgenceClientGardNomPrenom": "",
                                                "AgenceClientGardPrefixe": "",
                                                "AgenceClientGardPrenom": "",
                                                "AgenceClientGardAdresse1": "",
                                                "AgenceClientGardAdresse2": "",
                                                "AgenceClientGardCP": "",
                                                "AgenceClientGardVille": "",
                                                "AgenceClientGardTel": "",
                                                "AgenceClientGardTeP": "",
                                                "AgenceClientGardEmail": "",
                                                "AssurNomPrenom": "",
                                                "AssurId": "",
                                                "AssurContact": "",
                                                "AssurPrefixe": "",
                                                "AssurPrenom": "",
                                                "AssurAdresse1": "",
                                                "AssurAdresse2": "",
                                                "AssurAdresse3": "",
                                                "AssurCP": "",
                                                "AssurVille": "",
                                                "AssurTel": "",
                                                "AssurTeP": "",
                                                "AssurDeuxTelephone": "",
                                                "AssurFax": "",
                                                "AssurEmail": "",
                                                "AssurDeuxEmail": "",
                                                "AssurSiteInt": "",
                                                "AssurComment": "",
                                                "AssurAccordCadre": "",
                                                "AssurCResponsable": "",
                                                "AssurCPrefixe": "",
                                                "AssurSigle": "",
                                                "NoPolice": "",
                                                "NoSinistre": "",
                                                "DateSinistre": "",
                                                "AssurFactNomPrenom": "",
                                                "AssurFactContact": "",
                                                "AssurFactPrefixe": "",
                                                "AssurFactPrenom": "",
                                                "AssurFactAdresse1": "",
                                                "AssurFactAdresse2": "",
                                                "AssurFactAdresse3": "",
                                                "AssurFactCP": "",
                                                "AssurFactVille": "",
                                                "AssurFactTel": "",
                                                "AssurFactTeP": "",
                                                "AssurFactDeuxTelephone": "",
                                                "AssurFactFax": "",
                                                "AssurFactEmail": "",
                                                "AssurFactDeuxEmail": "",
                                                "AssurFactComment": "",
                                                "Exp1RaisonSociale": "",
                                                "Exp1CabExpertiseId": "",
                                                "Exp1CabExpertiseCResponsable": "",
                                                "Exp1CabExpertiseCPrefixe": "",
                                                "Exp1CabExpertiseSigle": "",
                                                "Exp1NomPrenom": "",
                                                "Exp1Id": "",
                                                "Exp1Prefixe": "",
                                                "Exp1Reference": "",
                                                "Exp1Prenom": "",
                                                "Exp1Adresse1": "",
                                                "Exp1Adresse2": "",
                                                "Exp1Adresse3": "",
                                                "Exp1CP": "",
                                                "Exp1Ville": "",
                                                "Exp1Tel": "",
                                                "Exp1TeP": "",
                                                "Exp1Email": "",
                                                "Exp1CResponsable": "",
                                                "Exp1CPrefixe": "",
                                                "Exp1Sigle": "",
                                                "Exp1AccordCadre": "",
                                                "Exp1RedevanceCom": "0",
                                                "Exp1Comment": "",
                                                "Exp1AssistNomPrenom": "",
                                                "Exp1AssistPrefixe": "",
                                                "Exp1AssistPrenom": "",
                                                "Exp1AssistTel": "",
                                                "Exp1AssistTeP": "",
                                                "Exp1AssistEmail": "",
                                                "Exp2RaisonSociale": "",
                                                "Exp2CabExpertiseId": "",
                                                "Exp2CabExpertiseCResponsable": "",
                                                "Exp2CabExpertiseCPrefixe": "",
                                                "Exp2CabExpertiseSigle": "",
                                                "Exp2NomPrenom": "",
                                                "Exp2Id": "",
                                                "Exp2Prefixe": "",
                                                "Exp2Reference": "",
                                                "Exp2Prenom": "",
                                                "Exp2Adresse1": "",
                                                "Exp2Adresse2": "",
                                                "Exp2Adresse3": "",
                                                "Exp2CP": "",
                                                "Exp2Ville": "",
                                                "Exp2Tel": "",
                                                "Exp2TeP": "",
                                                "Exp2Email": "",
                                                "Exp2CResponsable": "",
                                                "Exp2CPrefixe": "",
                                                "Exp2Sigle": "",
                                                "Exp2AccordCadre": "",
                                                "Exp2RedevanceCom": "0",
                                                "Exp2Comment": "",
                                                "Exp2AssistNomPrenom": "",
                                                "Exp2AssistPrefixe": "",
                                                "Exp2AssistPrenom": "",
                                                "Exp2AssistTel": "",
                                                "Exp2AssistTeP": "",
                                                "Exp2AssistEmail": "",
                                                "PlatefRaisonSociale": "",
                                                "PlatefId": "",
                                                "PlatefAdresse1": "",
                                                "PlatefAdresse2": "",
                                                "PlatefAdresse3": "",
                                                "PlatefCP": "",
                                                "PlatefVille": "",
                                                "PlatefTel": "",
                                                "PlatefTeP": "",
                                                "PlatefCResponsable": "",
                                                "PlatefCPrefixe": "",
                                                "PlatefSigle": "",
                                                "PlatefEmail": "",
                                                "PlatefComment": "",
                                                "PlatefAccordCadre": "",
                                                "PlatefRedevanceCom": "0",
                                                "PlatefNoDossier": "",
                                                "PlatefDatReception": "",
                                                "PlatefGestNomPrenom": "",
                                                "PlatefGestPrefixe": "",
                                                "PlatefGestPrenom": "",
                                                "PlatefGestAdresse1": "",
                                                "PlatefGestAdresse2": "",
                                                "PlatefGestCP": "",
                                                "PlatefGestVille": "",
                                                "PlatefGestTel": "",
                                                "PlatefGestTeP": "",
                                                "PlatefGestEmail": "",
                                                "AgenceUP": "Agence IDF",
                                                "UtilCreation": "",
                                                "UtilReception": "Berthier+Fabien",
                                                "ModReception": "",
                                                "DateReception": "",
                                                "Responsable": "yassime",
                                                "Sigle": "",
                                                "ChargeRecon": "",
                                                "DatRecon": "",
                                                "Instructions": "test+instruction",
                                                "IsFranchise": "",
                                                "MontFranchise": "0.00",
                                                "IsTVA": "",
                                                "ReducTVA": "",
                                                "TotalHTD": "0.00",
                                                "TotalTVAD": "0.00",
                                                "TotalTTCD": "0.00",
                                                "TotalHTC": "0.00",
                                                "TotalHTF": "0.00",
                                                "SigChargeRecon": "",
                                                "NbDocClas": "0",
                                                "MoDeAfFiChAgE": "",
                                                "LargeurFenetreNormale": "1333.3333333333",
                                                "HauteurFenetreNormale": "866.66666666667",
                                                "IdMysqlElementCourant": "80"
                                            }
                                            let copyPopulate = populate+"; let data="+JSON.stringify({...jsn,...obj})+"; $('form:nth-child(1)').setFormData(data)"
                                            navigator.clipboard.writeText(copyPopulate)
                                            setOpenSnackCopy(jsn)
                                        }
                                    }
                                ]
                            }}
                        />
                    )
                }
            }}
        />
        <Snackbar
            anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
            autoHideDuration={4000}
            open={openSnackCopy}
            onClose={()=>setOpenSnackCopy(null)}
            message={openSnackCopy ? (openSnackCopy.Nom ? `Copie de la fonction de suivi pour ${openSnackCopy.Nom}` : `Copie de l'insertion ${openSnackCopy.Reference}`) :""}
            key="snackCopy"
        />
    </div>
    )
}