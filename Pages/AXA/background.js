var dossiersAXA = []
var dossiersJL = []
const correspondances = [
    {
        "JL":"RefCommandeClient",
        "AXA":mission=>mission.Id+"|"+mission.EntityIdEncode
    },
    {
        "JL":"Etat",
        "AXA":mission=>{
            switch (mission["StatusId"]) {
                case "REF":
                case "ANN":
                    return "Classé sans suite"

                case "FCV":
                    return "Clôturé"
            
                default:
                    return "Ouvert"
            }
        }    
    },
    {
        "JL":"TypeSinistre",
        "AXA":mission=>{ 
            switch (mission["DamageOrigin"]) {
                case "Dégâts des eaux":
                    return "DDE"
                case "Evènements climatiques":
                    return "EEX"
                default:
                    return "ASS"
            }
        }
    },
    {
        "JL":"NomPrenom",
        "AXA": mission=>mission.ContactInsured.FirstName+" "+mission.ContactInsured.LastName
    },
    {
        "JL":"Tel",
        "AXA":mission=>mission.ContactInsured?.Phones[0]?.PhoneNumber
    },
    {
        "JL":"DeuxTelephone",
        "AXA":mission=>mission.ContactInsured?.Phones[1]?.PhoneNumber
    },
    {
        "JL":"RegionUP",
        "AXA":mission=>"Sud-Ouest"
    },
    {
        "JL":"CodeRegion",
        "AXA":mission=>"BDX"
    },
    {
        "JL":"Adresse1",
        "AXA":mission=>mission.ContactInsured?.Address
    },
    {
        "JL":"Adr1Livr",
        "AXA":mission=>mission["DamageAddress"]
    },
    {
        "JL":"DateCreation",
        "AXA":mission=>mission["DamageDate"]
    },
    {
        "JL":"DateMaj",
        "AXA":mission=>mission["FirstMeetingDate"]
    },
    {
        "JL":"Email",
        "AXA":mission=>mission["Mail1"]
    },
    {
        "JL":"DeuxEmail",
        "AXA":mission=>mission["Mail2"]
    },
    {
        "JL":"PlatefDatReception",
        "AXA":mission=>mission["FirstMeetingDate"]
    },
    {
        "JL":"MontFranchise",
        "AXA":mission=>mission["FranchiseAmount"]
    },
    {
        "JL":"ReductionAmount",
        "AXA":mission=>mission["ReducTVA"]
    },
    {
        "JL":"ReductionAmount",
        "AXA":mission=>mission["ReducTVA"]
    }
]

/*chrome.storage.local.get('dossiers', function(tempVar){
    if(tempVar.dossiers){
        dossiers = tempVar.dossiers;
    }
})*/
// Show Buttons
chrome.webRequest.onCompleted.addListener(
    function(details)
    {
        if(details.statusCode === 200){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {action: 'showButtons', dossiers: dossiersAxa});
            })
        }
    },
    {urls: ["https://portail-es.axa.fr/Mission/GetMissions"]},
    ['responseHeaders']
);
// Create new Dossier in JLogiciels
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.action === 'createDossier'){
        let entityId = request.entityId;
        let id = request.id;
        getMissionDetail(id, entityId).then(res=>res.text()).then(txt=>JSON.parse(txt)).then(res=>{
            // console.log(res.Mission.Type, res.Mission.ContactInsured.FirstName, res.Mission.ContactInsured.Mail1);
            let firstName = res.Mission.ContactInsured.FirstName;
            let lastName = res.Mission.ContactInsured.LastName;
            let fullName = firstName + ' ' + lastName;
            setDossier('127', fullName).then(res=>console.log(res));
        })
    }
})  
//get dossiers from JLogiciels HTML's response
function getJLDossiers(){
    dossiersJL = [];
    fetch("https://jaime.jlogiciels.fr/main_tableur.php?table=UP_Dossiers&ajax=oui", {
      "headers": {
        "accept": "*/*",
        "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "text/html; charset=UTF-8",
        "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "referrer": "https://jaime.jlogiciels.fr/index.php",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    })
    .then(prm=>prm.text())
    .then(htm=>{
        var dossiers = document.createElement('div');
        dossiers.innerHTML = htm
        return Promise.allSettled([...dossiers.querySelectorAll(".tableauCel input")].map(r=>{
            let id = r.id.split('_').length === 2 ? r.id.split('_')[1] : false
            if(id){
                return fetch("https://jaime.jlogiciels.fr/fenetre_element.php?modeIHM=FENETRE&id="+id+"&hauteur=625&largeur=853&modeIHM=FENETRE", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "text/html; charset=UTF-8",
                    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": "https://jaime.jlogiciels.fr/index.php",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors",
                "credentials": "include"
                }).then(prm=>prm.text())
                .then(form=>{
                    let details = document.createElement('div')
                    details.innerHTML = form
                    let client_ref = details.querySelector('#ChampsOnglet_RefCommandeClient').value
                    let ref = details.querySelector('#ChampsOnglet_Reference').value
                    let status = details.querySelector('#ChampsOnglet_Etat').value
                    dossiersJL.push({id, client_ref, ref, status})
                })
                .catch(err=>console.log("Erreur détails dossier ",err))
            }
            return Promise.reject("No ID");
        }))
    }).catch(errDossiers=>console.log("Erreur lors du chargement des dossiers!",errDossiers))

//all AXA missions
function getAxaMissions(){
    let refs = [];
    fetch("https://portail-es.axa.fr/Mission/GetMissions", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://portail-es.axa.fr/HomeEs/Index",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "page=1&rp=2000&sortname=LastActionDate&sortorder=desc&query=&filter=&qtype=",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(prm=>prm.json()).then(rep=>dossiersAXA.push(rep))

}
//get the details of an AXA mission
function getAxaMissionDetail(id,EntityIdEncode){
    return fetch("https://portail-es.axa.fr/Mission/GetMissionDetail?mission_id="+id+"&entity_id="+EntityIdEncode+"&_=1635264782297", {
    "headers": {
        "accept": "*/*",
        "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://portail-es.axa.fr/HomeEs/Index",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
    })
}

function setDossier(id, name){
    let dossier = dossiersAXA.find(da=>da.Id === id)
    let body = correspondances.reduce((acc,cur)=>{
            acc[cur.AXA] = cur.JL(dossier)
        },{})
    })
    await fetch("https:")
    fetch("https://jaime.jlogiciels.fr/main_tableur.php?ajax=oui", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://jaime.jlogiciels.fr/index.php",
    "body": Object.keys(body).map(key=>`${key}=${body[key]}`),
    "method": "POST",
    "mode": "cors"
    });
}
//upload files from another app
function moveFile(origin,destination){
    const url = origin.url //'https://localhost/emploi.pdf'
    fetch(url).then(res => {
        res.blob().then(blob => {
            const reader = new FileReader();
            reader.onload = event => {
                const dataurl = event.target.result;
                const fd = new FormData();
                fd.set('fichier[]', blob, url);
                fd.set('MAX_FILE_SIZE', 33554432);
                fd.set('titre', 'test');
                fd.set('submitTransfert', 'Lancer le téléchargement');
                fetch("https://jaime.jlogiciels.fr/reponse_formulaire_documents.php", {
                    method: 'POST', body: fd
    }).then(res => res.text()).then(console.log);
            }
            reader.readAsDataURL(blob)
        })
    });
}

var timer = setInterval(getJLDossiers, 40000)

