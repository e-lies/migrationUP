// store dossiers IDs in idLIst array
function getDossiersIWE(idList, resultsPerPage){
	var refreshToken = {refreshToken: localStorage.refreshToken};
    var newAccessToken;
	fetch("https://uplink.i-we.io/api/refreshjwt", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "fd3de3aa-dd1c-4161-bdb3-4b5e87472f58",
        "Content-Type": "application/json;charset=utf-8",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://uplink.i-we.io/",
    "body": JSON.stringify(refreshToken),
    "method": "POST",
    "mode": "cors"
    })
    .then(p=>p.json())
    .then((jsonToken)=>{
        newAccessToken = "JWT " + jsonToken.accessToken;
        return fetch("https://uplink.i-we.io/api/query-executor/5dfa7a9d6bd6db00188af000/query/5dfb266c41a7f600185246d8/results?page=1&perPage="+resultsPerPage, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "fr",
            "x-window-id": "fd3de3aa-dd1c-4161-bdb3-4b5e87472f58",
            "Authorization": newAccessToken,
            "Vary": "Accept-Language",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://uplink.i-we.io/",
        "method": "GET",
        "mode": "cors"
        })
    })
    .then(prm=>prm.json())
    .then(res=>{
        let results = res.results;
        results.forEach(dossier=>{
            var id = dossier.caseObject._id.$id;
            idList.push(id);
        })
        console.log('done');
    })
    .catch(err=>{console.log(err)});
}



function getDossier(idDossier){
    var refreshToken = {refreshToken: localStorage.refreshToken};
    var newAccessToken;
	fetch("https://uplink.i-we.io/api/refreshjwt", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "fd3de3aa-dd1c-4161-bdb3-4b5e87472f58",
        "Content-Type": "application/json;charset=utf-8",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://uplink.i-we.io/",
    "body": JSON.stringify(refreshToken),
    "method": "POST",
    "mode": "cors"
    })
    .then(p=>p.json())
    .then(jsonToken=>{
        newAccessToken = "JWT " + jsonToken.accessToken;
        return fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Case/"+idDossier+"?view=full", {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "fr",
                "x-window-id": "35f5ce23-91d2-4cd2-97b7-4032934c4fb1",
                "Authorization": newAccessToken,
                "Vary": "Accept-Language",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin"
            },
            "referrer": "https://uplink.i-we.io/",
            "method": "GET",
            "mode": "cors"
        });
    })
    .then(prm=>prm.json())
    .then(dossier=>{
        console.log(dossier);
    })
}



function getFacture(idDossier){
    var refreshToken = {refreshToken: localStorage.refreshToken};
    var newAccessToken;
	fetch("https://uplink.i-we.io/api/refreshjwt", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "fd3de3aa-dd1c-4161-bdb3-4b5e87472f58",
        "Content-Type": "application/json;charset=utf-8",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://uplink.i-we.io/",
    "body": JSON.stringify(refreshToken),
    "method": "POST",
    "mode": "cors"
    })
    .then(p=>p.json())
    .then(jsonToken=>{
        newAccessToken = "JWT " + jsonToken.accessToken;
        return fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Invoice?q=%7B%22relatedCase._id%22%3A%7B%22%24id%22%3A%22"+idDossier+"%22%7D%7D&perPage=all&view=full", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "fr",
            "x-window-id": "49ec5b19-a050-416c-b42a-dcd80e0b67b9",
            "Authorization": newAccessToken,
            "Vary": "Accept-Language",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://uplink.i-we.io/",
        "method": "GET",
        "mode": "cors"
        })
    })
    .then(prm=>prm.json())
    .then(res=>{
        let results = res._embedded.results;
        if(!results.length){
            console.log('Pas de facture pour ce dossier!');
            return;
        }
        results.forEach(facture=>{
            var reference = facture.ref;
            var title = facture.title;
            console.log("Ref:", reference, " , Title:", title);
        })
    })
}


function getChantier(idDossier){
    var refreshToken = {refreshToken: localStorage.refreshToken};
    var newAccessToken;
	fetch("https://uplink.i-we.io/api/refreshjwt", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "fd3de3aa-dd1c-4161-bdb3-4b5e87472f58",
        "Content-Type": "application/json;charset=utf-8",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://uplink.i-we.io/",
    "body": JSON.stringify(refreshToken),
    "method": "POST",
    "mode": "cors"
    })
    .then(p=>p.json())
    .then(jsonToken=>{
        newAccessToken = "JWT " + jsonToken.accessToken;
        return fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/ConstructionSite?q=%7B%22relatedCase._id%22%3A%7B%22%24id%22%3A%22"+idDossier+"%22%7D%7D", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "fr",
            "x-window-id": "49ec5b19-a050-416c-b42a-dcd80e0b67b9",
            "Authorization": newAccessToken,
            "Vary": "Accept-Language",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://uplink.i-we.io/",
        "method": "GET",
        "mode": "cors"
        })
    })
    .then(prm=>prm.json())
    .then(res=>{
        let results = res._embedded.results;
        if(results.length){
            console.log('Found something!');
        }
    })
}



function getDossiersWithChantiers(idList, dossiersWithChantiers){
    idList.forEach(idDossier=>{
        var refreshToken = {refreshToken: localStorage.refreshToken};
        var newAccessToken;
        fetch("https://uplink.i-we.io/api/refreshjwt", {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "fr",
            "x-window-id": "fd3de3aa-dd1c-4161-bdb3-4b5e87472f58",
            "Content-Type": "application/json;charset=utf-8",
            "Vary": "Accept-Language",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://uplink.i-we.io/",
        "body": JSON.stringify(refreshToken),
        "method": "POST",
        "mode": "cors"
        })
        .then(p=>p.json())
        .then(jsonToken=>{
            newAccessToken = "JWT " + jsonToken.accessToken;
            return fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Case/"+idDossier+"?view=full", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Language": "fr",
                    "x-window-id": "35f5ce23-91d2-4cd2-97b7-4032934c4fb1",
                    "Authorization": newAccessToken,
                    "Vary": "Accept-Language",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin"
                },
                "referrer": "https://uplink.i-we.io/",
                "method": "GET",
                "mode": "cors"
            });
        })
        .then(prm=>prm.json())
        .then(dossier=>{
            let chantiersHref = "https://uplink.i-we.io" + dossier._links.constructionsSite.href;
            return fetch(chantiersHref, {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Language": "fr",
                    "x-window-id": "35f5ce23-91d2-4cd2-97b7-4032934c4fb1",
                    "Authorization": newAccessToken,
                    "Vary": "Accept-Language",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin"
                },
                "referrer": "https://uplink.i-we.io/",
                "method": "GET",
                "mode": "cors"
            })
        })
        .then(prm=>prm.json())
        .then(chantiers=>{
            let results = chantiers._embedded.results;
            if(results.length){
                dossiersWithChantiers.push(idDossier);
            }
        })
    })
}


// idElement ( Case Id / Chantier Id)
// Chantier with communications: 5e2eccbb70e0ea00182f9285
// Case with communications: 5e0dc93c2c347e25938ebb87
// Case reference: 2002003
function getCommunications(idElement){
    var refreshToken = {refreshToken: localStorage.refreshToken};
    var newAccessToken;
	fetch("https://uplink.i-we.io/api/refreshjwt", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "fd3de3aa-dd1c-4161-bdb3-4b5e87472f58",
        "Content-Type": "application/json;charset=utf-8",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://uplink.i-we.io/",
    "body": JSON.stringify(refreshToken),
    "method": "POST",
    "mode": "cors"
    })
    .then(p=>p.json())
    .then(jsonToken=>{
        newAccessToken = "JWT " + jsonToken.accessToken;
        return fetch("https://uplink.i-we.io/api/ui/communications/5dfa7a9d6bd6db00188af000?relatedTo="+idElement+"&relatedDef=ConstructionSite", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "fr",
            "x-window-id": "b5c4b864-28da-48f4-99b1-c8bc6cb6621e",
            "Authorization": newAccessToken,
            "Vary": "Accept-Language",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://uplink.i-we.io/",
        "method": "GET",
        "mode": "cors"
        })
    })
    .then(prm=>prm.json())
    .then(res=>{
        console.log(res);
    })
}

