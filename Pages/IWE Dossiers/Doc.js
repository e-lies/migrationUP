// Tous les dossiers
fetch("https://uplink.i-we.io/api/query-executor/5dfa7a9d6bd6db00188af000/query/5dfb266c41a7f600185246d8/results?$sort=%7B%22Case.ref%22:1%7D&assignFilters=%7B%7D&filters=%7B%7D&page=1&perPage=50", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "35f5ce23-91d2-4cd2-97b7-4032934c4fb1",
        "Authorization": "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWY3ZGY0Nzk1ZWM2MDAxM2UxMGJkOSIsImVudmlyb25tZW50cyI6eyI1ZGZhN2E5ZDZiZDZkYjAwMTg4YWYwMDAiOnsicHJvZmlsZSI6ImFkbWluIiwiYWxpYXMiOiI2MGFmN2RkNjgyYzAxYjAwMTFiYTA5MjQiLCJvcmdBbGlhcyI6IjVlMDRlNjQ4NTg5MmRjMDA4MjhkMzBhYiJ9fSwiZG9tYWluIjoidXBsaW5rIiwiY3VzdG9tZXJJZCI6IjVkZmE3YTlkNmJkNmRiMDAxODhhZWZlZiIsImxvZ2luIjoiZmFiaWVuLmJlcnRoaWVyQHVuaXByb21vdGlvbi5mciIsImxhbmd1YWdlIjoiZnIiLCJvcmdBY2NvdW50IjoiNWUxNjEwYTk3Y2RlMzgwMDE3N2NmMjRmIiwic2Vzc2lvbklkIjoiNjE5NTI4N2Y2YWQ3MmUwMDExNjE2NjVmIn0sInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTYzNzE2NTQ4MywiZXhwIjoxNjM3MTY2NjgzfQ.mwIdpOdNGUjCpVC2poiMWxLTJyqtUImnhnYNoeeHXeTtnKhB8zHGNwpxNVp2ySQC_TxBrA8WBTGasro4gFXK-Lqvm3DriRHDrZKWBRIkVIj0c8QFCWuGxHl9pZxyuVSPuUtZIp90buGQzBNw6_3aBRIB6Utjexx_AgoZ6YWSDBYsN_93mFjI1Z-yeKm-1j7UKPO-H9vgMhvs8P3ecM6NDnzZtSApbljGckL6H1tGRe7FKemaJlxUQS16v4ROeg1HQ505FMvboPh8SReoVmh0GSk-uBqXS30ijnVLNMKG6GfO2sBmQ95IrJk7wdmwbIGJMPJLvsj64pknZ77ewPYRWQ",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://uplink.i-we.io/",
    "method": "GET",
    "mode": "cors"
});
// Response => AllCasesResponse.json :
let allCasesResponseExample = 
{
  "_links": {},
  "count": 50,
  "results": [
    {
      "caseObject": {
        "_id": {
          "$id": "5e203654f22e45001a839800"
        }
      }
    }
  ],
  "totalCount": 17636,
  "defs": {},
  "currentPage": 1,
  "perPage": 50
}

let idDossier = allCasesResponseExample.results[0].caseObject._id.$id;


// Particular case:
//  linkFormat = "/api/5dfa7a9d6bd6db00188af000/case/Case/{caseObject._id}";
fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800?view=full", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "35f5ce23-91d2-4cd2-97b7-4032934c4fb1",
        "Authorization": "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWY3ZGY0Nzk1ZWM2MDAxM2UxMGJkOSIsImVudmlyb25tZW50cyI6eyI1ZGZhN2E5ZDZiZDZkYjAwMTg4YWYwMDAiOnsicHJvZmlsZSI6ImFkbWluIiwiYWxpYXMiOiI2MGFmN2RkNjgyYzAxYjAwMTFiYTA5MjQiLCJvcmdBbGlhcyI6IjVlMDRlNjQ4NTg5MmRjMDA4MjhkMzBhYiJ9fSwiZG9tYWluIjoidXBsaW5rIiwiY3VzdG9tZXJJZCI6IjVkZmE3YTlkNmJkNmRiMDAxODhhZWZlZiIsImxvZ2luIjoiZmFiaWVuLmJlcnRoaWVyQHVuaXByb21vdGlvbi5mciIsImxhbmd1YWdlIjoiZnIiLCJvcmdBY2NvdW50IjoiNWUxNjEwYTk3Y2RlMzgwMDE3N2NmMjRmIiwic2Vzc2lvbklkIjoiNjE5NTI4N2Y2YWQ3MmUwMDExNjE2NjVmIn0sInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTYzNzE2NjY3NywiZXhwIjoxNjM3MTY3ODc3fQ.QQQoe0IBWhYAgwcOYjI9bILgvi5xBWnmVGHWrjdi-A4SyMCISMP-rM_nJu3sHcDN0eAvGHUmnKcOmc5-dhHrHZGMNYCStZTEHsbXVkAsxTYg4pUQCWDRo4JD_Jb0EKlYIdA5PwvF4kuhMUB8_T6FZL1W2uV82Y_QXu3cCC2j1MVZAVpWt5Th23R11sKLPDhO-D99X3QhLWuQfNZQNoS6bD-s02-HuJD-ygSkxquYHttZKYmfQ74mYT14IcrjUHICmKW0IlQN-VMllqPYroL2WHrg9ijr0Cra0LOI0hF_394mXcuPwsdpoFV6e5d8wzrf2ff5S99yX2uYLUfRi95ssg",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://uplink.i-we.io/",
    "method": "GET",
    "mode": "cors"
});
// Response => SingleCaseResponse.json
let singleCaseResponseExample =
{
  "_links": {
    "appointments": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Appointment?q=%7B%22relatedTo._id%22%3A%7B%22%24id%22%3A%225e203654f22e45001a839800%22%7D%7D"},
    "quotes": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Quote?q=%7B%22relatedCase._id%22%3A%7B%22%24id%22%3A%225e203654f22e45001a839800%22%7D%7D"},
    "invoices": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Invoice?q=%7B%22relatedCase._id%22%3A%7B%22%24id%22%3A%225e203654f22e45001a839800%22%7D%7D"},
    "documents": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents"},
    "participants": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/participants"},
    "comments": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/comments"},
  },
  "_embedded": {
    "address": {
      "_links": {
        "self": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/address"}
      },
      "address": "100 Rue de la Folie Méricourt",
      "city": "Paris",
      "postal_code": "75011",
      "country": "Fr",
    },
    "participants": [
      {
        "roletype": "customer",
        "name": "Severine Deluc"
      },
      {
        "roletype": "insurer",
        "name": "AXA France",
      }
      // ...
    ],
    "recognitions": [
      {
        "_label": "Severine Deluc / Severine Deluc / 75011 Paris",
        "ref": "Severine Deluc / Severine Deluc / 75011 Paris",
        "refCase": "2002207",
        "status": "terminated",
        "statusRDV": "terminated",
        "rdfComment": "sdb // Peut-être la tuyauterie de la baignoire",
        "labelForfait": "Contrôle hygrométrique pour une durée de  jour(s)",
        "labelForfaitWeek": "Contrôle hygrométrique pour 1 Semaine supplémentaire",
        "createdBy": {"$id": "5dfcf8cc6bd6db00188c9aaf"},
        "modifiedBy": {"$id": "5dfa7ca29565bc001a3f78c5"},
        "dateCreated": {"$date": "2020-01-16T10:21:21.072Z"},
        "dateModified": {"$date": "2020-07-20T11:29:12.400Z"},
        "_id": {"$id": "5e203920d6a8c70046fee45a"},
        "photos": []
      }
    ],
    "comments": [],
    "documents": [
      // Nombre de versions est ( "version" - 1 )
      // Pour les documents contenant plus d'une version : le numero de la version est "versionNumber" et pas "version" ( _embedded -> fileVersions -> { versionNumber } )
      // Les documents avec la clé : type ("type": "quote") => Devis (Objet 3) | ("type": "invoice") => Facture (autre exemple)
      {
        "_links": {
          "self": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e20399b2445100018f5da02"},
          "fileVersions": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e20399b2445100018f5da02/fileVersions"},
        },
        "_embedded": {
          "fileVersions": [
            {
              "_links": {
                "self": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e20399b2445100018f5da02/fileVersions/5e20399b2445100018f5da05"}
              },
              "versionNumber": 1,
              "mimeType": "application/pdf",
              "filename": "ORDRE_DE_MISSION_ES (75).pdf",
              "hash": "7174c5694006d2fd8bfc152395c7b66b",
              "createdBy": {"$id": "5dfcf8cc6bd6db00188c9aaf"},
              "dateCreated": {"$date": "2020-01-16T10:23:23.267Z"},
              "_id": {"$id": "5e20399b2445100018f5da05"},
              "version": 1,
            }
          ],
          "comments": []
        },
        "name": "ORDRE_DE_MISSION_ES (75).pdf",
        "version": 2, // Nombre de versions disponibles est 1
        "fileDate": {"$date": "2020-01-16T10:23:23.019Z"},
        "createdBy": {"$id": "5dfcf8cc6bd6db00188c9aaf"},
        "modifiedBy": {"$id": "5dfcf8cc3a390f0049bbb786"},
        "dateCreated": {"$date": "2020-01-16T10:23:23.267Z"},
        "dateModified": {"$date": "2020-02-05T14:16:35.666Z"},
        "_id": {"$id": "5e20399b2445100018f5da02"},
      },
      {
        "_links": {
          "self": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e2039a7d6a8c70046fee55d"},
          "fileVersions": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e2039a7d6a8c70046fee55d/fileVersions"}
        },
        "_embedded": {
          "fileVersions": [
            {
              "_links": {
                "self": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e2039a7d6a8c70046fee55d/fileVersions/5e2039a8d6a8c70046fee565"}
              },
              "versionNumber": 1,
              "mimeType": "application/pdf",
              "filename": "UP2002207 - Severine Deluc / Severine Deluc / 75011 Paris Délégation.pdf",
              "hash": "1c9b54c6ad78a21398940bbbd5e3f492",
              "createdBy": {"$id": "5dfcf8cc6bd6db00188c9aaf"},
              "dateCreated": {"$date": "2020-01-16T10:23:36.125Z"},
              "_id": {"$id": "5e2039a8d6a8c70046fee565"},
              "version": 1
            },
            {
              "_links": {
                "self": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e2039a7d6a8c70046fee55d/fileVersions/5e204944f5656e0018890113"}
              },
              "versionNumber": 2,
              "mimeType": "application/pdf",
              "filename": "Délégation.pdf",
              "hash": "82ac18fc2adb9ae44608ae068d1566fb",
              "createdBy": {"$id": "5e1309433566e30098c1d393"},
              "dateCreated": {"$date": "2020-01-16T11:30:12.767Z"},
              "_id": {"$id": "5e204944f5656e0018890113"},
              "version": 1
            }
          ],
          "comments": []
        },
        "name": "UP2002207 - Severine Deluc / Severine Deluc / 75011 Paris Délégation",
        "version": 3, // Nombre de versions disponibles est 2
        "fileDate": {"$date": "2020-01-16T11:30:12.511Z"},
        "createdBy": {"$id": "5dfcf8cc6bd6db00188c9aaf"},
        "modifiedBy": {"$id": "5dfcf8cc3a390f0049bbb786"},
        "dateCreated": {"$date": "2020-01-16T10:23:36.125Z"},
        "dateModified": {"$date": "2020-02-05T14:16:47.324Z"},
        "_id": {"$id": "5e2039a7d6a8c70046fee55d"},
      },
      {
        "_links": {
          "self": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e3ac7b6ef55be0018382274"},
          "fileVersions": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e3ac7b6ef55be0018382274/fileVersions"},
        },
        "_embedded": {
          "fileVersions": [
            {
              "_links": {
                "self": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e203654f22e45001a839800/documents/5e3ac7b6ef55be0018382274/fileVersions/5e3ac7b6ef55be0018382277"}
              },
              "versionNumber": 1,
              "mimeType": "application/pdf",
              "filename": "Devis UP2002207-D1 - RDF - Severine Deluc / Severine Deluc / 75011 Paris.pdf",
              "hash": "1ffda073f6e2f65fd0a3e54afd9dfc9c",
              "createdBy": {"$id": "5dfcf8cc3a390f0049bbb786"},
              "dateCreated": {"$date": "2020-02-05T13:48:38.890Z"},
              "_id": {"$id": "5e3ac7b6ef55be0018382277"},
              "version": 1
            }
          ],
          "comments": []
        },
        "type": "quote",
        "name": "Devis UP2002207-D1 - RDF - Severine Deluc / Severine Deluc / 75011 Paris",
        "fileDate": { "$date": "2020-02-05T13:48:38.399Z"},
        "_userInput": {},
        "_anchorInput": {
          "parent": "/api/5dfa7a9d6bd6db00188af000/case/Quote/5e3ac6107f839d001879b608",
          "_links": {
            "parent": {"href": "/api/5dfa7a9d6bd6db00188af000/case/Quote/5e3ac6107f839d001879b608"}
          }
        },
        "createdBy": {"$id": "5dfcf8cc3a390f0049bbb786"},
        "modifiedBy": {"$id": "5dfcf8cc3a390f0049bbb786"},
        "dateCreated": {"$date": "2020-02-05T13:48:38.889Z"},
        "dateModified": {"$date": "2020-02-05T14:16:42.185Z"},
        "_id": {"$id": "5e3ac7b6ef55be0018382274"},
        "version": 2
      }
    ]
  },
  "ref": "2002207",
  "title": "Severine Deluc / Severine Deluc / 75011 Paris",
  "regionCode": "IDF",
  "refInsurer": "0000007507990573",
  "policyNumber": "0000002238065204",
  "nature": "DDE",
  "createdBy": {"$id": "5dfcf8cc6bd6db00188c9aaf"},
  "modifiedBy": {"$id": "5dfa7ca29565bc001a3f78c5"},
  "dateCreated": {"$date": "2020-01-16T10:09:24.326Z"},
  "dateModified": {"$date": "2020-12-16T18:20:25.859Z"}
}

let quotesHref = singleCaseResponseExample._links.quotes.href;
let invoicesHref = singleCaseResponseExample._links.invoices.href;

// Quotes (Devis):
fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Quote?q=%7B%22relatedCase._id%22%3A%7B%22%24id%22%3A%225e203654f22e45001a839800%22%7D%7D&perPage=all&view=full", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "2a1b3cae-8151-4248-9d13-dd56ba4ac185",
        "Authorization": "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWY3ZGY0Nzk1ZWM2MDAxM2UxMGJkOSIsImVudmlyb25tZW50cyI6eyI1ZGZhN2E5ZDZiZDZkYjAwMTg4YWYwMDAiOnsicHJvZmlsZSI6ImFkbWluIiwiYWxpYXMiOiI2MGFmN2RkNjgyYzAxYjAwMTFiYTA5MjQiLCJvcmdBbGlhcyI6IjVlMDRlNjQ4NTg5MmRjMDA4MjhkMzBhYiJ9fSwiZG9tYWluIjoidXBsaW5rIiwiY3VzdG9tZXJJZCI6IjVkZmE3YTlkNmJkNmRiMDAxODhhZWZlZiIsImxvZ2luIjoiZmFiaWVuLmJlcnRoaWVyQHVuaXByb21vdGlvbi5mciIsImxhbmd1YWdlIjoiZnIiLCJvcmdBY2NvdW50IjoiNWUxNjEwYTk3Y2RlMzgwMDE3N2NmMjRmIiwic2Vzc2lvbklkIjoiNjE5NTI4N2Y2YWQ3MmUwMDExNjE2NjVmIn0sInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTYzNzE4NDY3MSwiZXhwIjoxNjM3MTg1ODcxfQ.nY7Rlwx5eQmCZ-Wksjk6iy5UwHejMdaCpSNSMkSoWECsbU23d9QLuB7MFMB8Txr1Z2mHgqXujNIrkmN0aSU-31QVWnMSdXeIAXRjZbrVVZKsilUK3COO4TzLI3h5XNxeHg3_sD4VWn6ycu4HSq5vwzbd2tBAr2R03N-l6--ffh9UfHEAnqta9IwlF24AgDBd7ZiHzcOz_jk-5EWcGcaQxMm1iBgYRTAXGlNbG9hpI9_ebmDrcA1CsdeU9Kp3wmG89SwZbbUwiP5Gv63R0ImSoLWGCbI5CqJmYV9X13mNNVUsm5LZyQugxE7oVbxIAeCZIDT_zScLCur9OBNP7XBn2Q",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "If-None-Match": "W/\"10fac-0bld+30Jiy5GkqiQ9U0xRQCARlg\""
    },
    "referrer": "https://uplink.i-we.io/",
    "method": "GET",
    "mode": "cors"
});
// Response => AllQuotesResponse.json

let quoteHref = AllQuotesResponse._embedded.results[0]._links.self.href;


// Invoices (Factures):
fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Invoice?q=%7B%22relatedCase._id%22%3A%7B%22%24id%22%3A%225e203654f22e45001a839800%22%7D%7D&perPage=all&view=full", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "2a1b3cae-8151-4248-9d13-dd56ba4ac185",
        "Authorization": "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWY3ZGY0Nzk1ZWM2MDAxM2UxMGJkOSIsImVudmlyb25tZW50cyI6eyI1ZGZhN2E5ZDZiZDZkYjAwMTg4YWYwMDAiOnsicHJvZmlsZSI6ImFkbWluIiwiYWxpYXMiOiI2MGFmN2RkNjgyYzAxYjAwMTFiYTA5MjQiLCJvcmdBbGlhcyI6IjVlMDRlNjQ4NTg5MmRjMDA4MjhkMzBhYiJ9fSwiZG9tYWluIjoidXBsaW5rIiwiY3VzdG9tZXJJZCI6IjVkZmE3YTlkNmJkNmRiMDAxODhhZWZlZiIsImxvZ2luIjoiZmFiaWVuLmJlcnRoaWVyQHVuaXByb21vdGlvbi5mciIsImxhbmd1YWdlIjoiZnIiLCJvcmdBY2NvdW50IjoiNWUxNjEwYTk3Y2RlMzgwMDE3N2NmMjRmIiwic2Vzc2lvbklkIjoiNjE5NTI4N2Y2YWQ3MmUwMDExNjE2NjVmIn0sInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTYzNzE4NjI4OCwiZXhwIjoxNjM3MTg3NDg4fQ.XVWAoKpZk29L4ziFpxv5vvM354GTBh7Hk1SPU80xkNMrw54xGP5wLin4IqZvTG8IZzQUcgy-JR7fOvEuIoVI3WYunIj2hkpQifjfAQuqrPD4voNuQhy16Vf0zd48zGwxC-3tn1u94Tqtp3CWXHXgJD0nCG7JQS1T4bRyBEoUVs9thPglMdVIY03Ir8Y2_TiDKbGhdoJ6TfubgZSeskDA_EYfzx_D-z5xSTFp54J7Dk7c_YXgDwxJhzyICDJGHzFrxuZDiK2OaYCCMuH5WaEXGYzFwIUn5J32jfStEdmTCksbuLAvWNP0wAjoClZxQrP7cDke65BdUf5dDU1Y6iE-rQ",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "If-None-Match": "W/\"6388-TsKKwPhQvCVRanf4uDgp9aVrOhU\""
    },
    "referrer": "https://uplink.i-we.io/",
    "method": "GET",
    "mode": "cors"
});
// Response => AllInvoicesResponse.json

let invoiceHref = AllInvoicesResponse._embedded.results[0]._links.self.href;
