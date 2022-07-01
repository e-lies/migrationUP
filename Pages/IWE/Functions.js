const links = {
  phoneCalls: "appels",
  email: "mails",
  appointments: "reconnaissances",
  quotes: "devis",
  invoices: "factures",
  preProductions: "preProductions",
  constructionsSite: "chantiers",
  participants: "participants",
};

const refreshToken = async () => {
  var refreshToken = { refreshToken: localStorage.refreshToken };
  var newAccessToken;
  await fetch("https://uplink.i-we.io/api/refreshjwt", {
    credentials: "omit",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "fr",
      "x-window-id": "fd3de3aa-dd1c-4161-bdb3-4b5e87472f58",
      "Content-Type": "application/json;charset=utf-8",
      Vary: "Accept-Language",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
    },
    referrer: "https://uplink.i-we.io/",
    body: JSON.stringify(refreshToken),
    method: "POST",
    mode: "cors",
  })
    .then((p) => p.json())
    .then((jsonToken) => {
      console.log(jsonToken.accessToken);
      newAccessToken = "JWT " + jsonToken.accessToken;
    })
    .catch((err) => console.log("Cannot get token client side", err))
    .catch((err) => console.log("Cannot get token server side", err));
  return newAccessToken;
};
async function request(url, jwt) {
  return fetch("https://uplink.i-we.io" + url, {
    credentials: "include",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "fr",
      "x-window-id": "35f5ce23-91d2-4cd2-97b7-4032934c4fb1",
      Authorization: jwt,
      Vary: "Accept-Language",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
    },
    referrer: "https://uplink.i-we.io/",
    method: "GET",
    mode: "cors",
  });
}
async function executeRequest(url, jwt) {
  let rslt = null;
  let req = await request(url, jwt);
  try {
    return req.json();
  } catch (error) {
    console.error("error executing request ", error);
    return false;
  }
}

//FullFill an object with multiple fetch calls synchronously
async function requests(reqs, jwt) {
  return await Object.keys(reqs).reduce(async (obj, req) => {
    let rslt = await obj; //else, I'll get a promise
    rslt[req] = await executeRequest(reqs[req], jwt, req);
    return rslt;
  }, {});
}

/************Files recovery************************/

async function moveFile(origins, destination) {
  const fd = new FormData();
  let jwt = await refreshToken();
  for (let i = 0; i < origins.length; i++) {
    let origin = origins[i];
    let fetchFile = await request(origin.content, jwt);
    await fetchFile
      .blob()
      .then((blb) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataurl = event.target.result;
          fd.set(
            "fichiers[]",
            blb,
            origin.path.replaceAll("/", "") +
              "_@_" +
              origin.name.replaceAll("/", "")
          );
          fetch(destination, {
            method: "POST",
            body: fd,
          })
            .then((res) => res.text())
            .then((repUpload) => console.log(repUpload))
            .catch((err) => console.log("Client error"))
            .catch((err) => console.log("Server error"));
        };
        reader.readAsDataURL(blb);
      })
      .catch((err) => console.log("Client error"))
      .catch((err) => console.log("Server error"));
  }
}

function uploadDocuments(tree, path, jwt) {
  let documents = tree._embedded.documents
    ? tree._embedded.documents.reduce((acc, cur) => {
        let vers = cur._embedded.fileVersions;
        return cur._links["iwe:content"]
          ? [
              ...acc,
              {
                content: cur._links["iwe:content"]["href"],
                name: vers[vers.length - 1].filename,
                path,
              },
            ]
          : acc;
      }, [])
    : [];
  documents &&
    documents.length > 0 &&
    moveFile(documents, "http://localhost:3001/uploadFiles");
}

//Get a dossier & its children
async function getDossierTree(id) {
  let rslt = {};
  let jwt = await refreshToken();
  let url = `/api/5dfa7a9d6bd6db00188af000/case/Case/${id}?view=full`;
  rslt["details"] = await executeRequest(url, jwt);
  uploadDocuments(rslt["details"], `${id}_@_dossier`, jwt);
  let linkChildren = Object.keys(rslt["details"]["_links"])
    .filter((df) => Object.keys(links).includes(df))
    .reduce((acc, link) => {
      return { ...acc, [links[link]]: rslt["details"]["_links"][link]["href"] };
    }, {});
  let dataChildren = await requests(linkChildren, jwt);
  //console.log("dataChildren = ",dataChildren," rslt = ",rslt)
  Object.keys(dataChildren).forEach((child) => {
    dataChildren[child]._embedded?.results?.forEach((result) => {
      uploadDocuments(result, `${id}_@_${child}_@_${result._id["$id"]}`, jwt);
    });
  });
  rslt = { ...rslt, ...dataChildren };
  return rslt;
}

async function saveDossier(dossier) {
  await fetch("http://localhost:3001/insertDossier", {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    method: "post",
    mode: "cors",
    body: JSON.stringify(dossier),
  })
    .then((prm) => prm.json())
    .then((rep) => console.log(rep))
    .catch((err) => console.log("Cannot get token client side", err))
    .catch((err) => console.log("Cannot get token server side", err));
}

/*
fetch("https://uplink.i-we.io/api/query-executor/5dfa7a9d6bd6db00188af000/query/5dfb266c41a7f600185246d8/results?$sort=%7B%22Case.ref%22:1%7D&assignFilters=%7B%7D&filters=%7B%22caseObject%22:%7B%22status%22:%7B%22%3D%22:%5B%22entered%22,%22new%22%5D%7D%7D%7D&page=7&perPage=100", {
  "headers": {
    "accept": "application/json, text/plain",
    "accept-language": "fr",
    "authorization": "JWT "+localStorage.getItem("accessToken"),
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "vary": "Accept-Language",
    "x-window-id": "f8fd9c60-e881-426c-9a0e-407d328b67f0"
  },
  "referrer": "https://uplink.i-we.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(prm=>prm.json()).then(rep=>{
    rep.results.forEach(async res=> {
        let tree = await getDossierTree(res.caseObject._id.$id);
        saveDossier(tree)
    })
}).catch(err=>console.log("error = ",err))
*/
