const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
const fs = require("fs");
const multer = require("./upload");
const compression = require("compression");
const connexion = require("./connexionMongo");
//const multer = require('multer');
//const router = express.Router();
const Contacts = require("./schemaContacts");
const Dossiers = require("./schemaData");
const { Login, RefreshToken, authentication } = require("./authorizations");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json({ limit: "50mb" }));
app.use(compression());

app.post("/api/login", Login);

app.post("/api/refreshToken", RefreshToken);

app.post("/insertContact", (req, res) => {
  //console.log("req.body = ", req.body);
  Contacts.insertMany(
    req.body.map((r) => {
      let cont = r.contact;
      return { ...cont, _id: cont._id["$id"] };
    }),
    function (err, docs) {
      if (err) {
        res.status(400).json({ error });
      }
      res.status(201).json({ message: "Objet enregistré !" });
    }
  );
});

app.post("/insertDossier", (req, res, next) => {
  const dossier = new Dossiers({
    ...req.body,
  });
  dossier
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
  //res.status(201).json({bodyy:req.body})
});

function testReq(req, res, next) {
  console.log("testReq = ", req.query, req.file, req.files);
  next();
}
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const detailsColumns = {
  _id: {
    key: "$details._id.$id",
    type: "primary",
  },
  ref: {
    key: "$details.ref",
    type: "varchar",
    label: "Référence",
  },
  Count: {
    key: null,
    type: "int",
    label: "Nombre",
  },
  Etat: {
    key: "$details.status",
    type: "foreigns",
    label: "Etat",
    possibles: [
      {
        value: "new",
        label: "nouveau",
      },
      {
        value: "entered",
        label: "ouvert",
      },
      {
        value: "assigned",
        label: "affecté",
      },
      {
        value: "css",
        label: "classé sans suite",
      },
      {
        value: "terminated",
        label: "clos",
      },
    ],
  },
  Region: {
    key: "$details.region",
    type: "varchar",
    label: "Région",
  },
  Address: {
    key: "$details.riskAddress",
    type: "varchar",
    label: "Adresse",
    length: 4,
  },
  Access: {
    key: "$details.riskAccess",
    type: "varchar",
    label: "Accès",
  },
  Metiers: {
    key: "$details.metiers",
    type: "varchar",
    label: "Métier",
  },
  Date: {
    key: "$details.dateCreated",
    type: "date",
    label: "Date",
  },
};

const typeColumns = {
  factures: {
    _id: {
      key: "$factures._id.$id",
      type: "primary",
    },
    ref: {
      key: "$factures.ref",
      type: "varchar",
      label: "Référence",
    },
    idDossier: {
      key: "$chantiers.relatedCaseId",
      type: "varchar",
      label: "Référence",
    },
    refDossier: {
      key: "$factures.recipientRef",
      type: "varchar",
      label: "ref Dossier",
    },
    codeFacturation: {
      key: "$factures.codeUpFacturation",
      type: "varchar",
      label: "code Facturation",
    },
    Metiers: {
      key: "$factures.metiers",
      type: "varchar",
      label: "Métier",
    },
    date: {
      key: "$factures.date",
      type: "date",
      label: "date de Création",
    },
    sendDate: {
      key: "$factures.sendDate",
      type: "date",
      label: "date d'envoie",
    },
    validateDate: {
      key: "$factures.validateDate",
      type: "date",
      label: "date de Validation",
    },
    paidDate: {
      key: "$factures.paidDate",
      type: "date",
      label: "date de paiement",
    },
    totalHT: {
      key: "$factures.totalHT",
      type: "decimal(10,2)",
      label: "HT",
      suffixe: " €",
    },
    totalTVA: {
      key: "$factures.totalTVA",
      type: "decimal(10,2)",
      label: "TVA",
      suffixe: " €",
    },
    discount: {
      key: "$factures.discount",
      type: "decimal(5,2)",
      label: "Remise",
    },
    TTC: {
      key: "$factures.totalTTC",
      type: "decimal(10,2)",
      label: "TTC",
      suffixe: " €",
    },
    sommeReglee: {
      key: "$factures.sommeReglee",
      type: "decimal(10,2)",
      label: "Réglée",
      suffixe: " €",
    },
  },
  devis: {
    _id: {
      key: "$devis._id.$id",
      type: "primary",
    },
    ref: {
      key: "$devis.ref",
      type: "varchar",
      label: "Référence",
    },
    idDossier: {
      key: "$devis.relatedCaseId",
      type: "varchar",
      label: "Référence",
    },
    title: {
      key: "$devis.title",
      type: "varchar",
      label: "Titre",
    },
    sendDate: {
      key: "$devis.sendDate",
      type: "date",
      label: "Date d'envoi",
    },
    validatedDate: {
      key: "$devis.validatedDate",
      type: "date",
      label: "Date de validation",
    },
    status: {
      key: "$devis.status",
      type: "foreigns",
      label: "Statut",
      possibles: [
        {
          value: "new",
          label: "nouveau",
        },
        {
          value: "send",
          label: "envoyé",
        },
        {
          value: "mandatorAgreement",
          label: "accepté",
        },
        {
          value: "mandatorRejection",
          label: "rejeté",
        },
        {
          value: "CSS",
          label: "classé sans suite",
        },
        {
          value: "toRectify",
          label: "à rectifier",
        },
        {
          value: "toValidate",
          label: "à valider",
        },
        {
          value: "validated",
          label: "validé",
        },
      ],
    },
    metiers: {
      key: "$devis.metiers",
      type: "varchar",
      label: "Métier",
    },
    mission: {
      key: "$devis.mission",
      type: "varchar",
      label: "Mission",
      length: 4,
    },
    /*modaliteIntervention: {
      key: "$devis.modaliteIntervention",
      type: "varchar",
      label: "Modalités d'intervention",
    },
    conditionIntervention: {
      key: "$devis.conditionIntervention",
      type: "varchar",
      label: "Conditions d'intervention",
    },*/
    globalAmount: {
      key: "$devis.globalAmount",
      type: "decimal(9,2)",
      label: "Montant global",
      suffixe: " €",
    },
    globalVatAmount: {
      key: "$devis.globalVatAmount",
      type: "decimal(8,2)",
      label: "TVA",
      suffixe: " €",
    },
    totalTaxInclusiveBilling: {
      key: "$devis.totalTaxInclusiveBilling",
      type: "decimal(10,2)",
      label: "TTC",
      suffixe: " €",
    },
  },
  chantiers: {
    _id: {
      key: "$chantiers._id.$id",
      type: "primary",
    },
    idDossier: {
      key: "$chantiers.relatedCaseId",
      type: "varchar",
      label: "Référence",
    },
    title: {
      key: "$chantiers.title",
      type: "varchar",
      label: "Titre",
    },
    prestationComment: {
      key: "$chantiers.prestationComment",
      type: "varchar",
      length: 4,
      label: "Commentaire",
    },
    status: {
      key: "$chantiers.status",
      type: "foreigns",
      label: "Statut",
      possibles: [
        {
          value: "invoiced",
          label: "facturé",
        },
        {
          value: "terminated",
          label: "terminé",
        },
        {
          value: "docs",
          label: "docs",
        },
        {
          value: "planned",
          label: "planifié",
        },
        {
          value: "new",
          label: "nouveau",
        },
      ],
    },
    startDate: {
      key: "$chantiers.startDate",
      type: "date",
      label: "Date de début",
    },
    endDate: {
      key: "$chantiers.endDate",
      type: "date",
      label: "Date de fin",
    },
    address: {
      key: "$chantiers._embedded.address._label",
      type: "varchar",
      length: 3,
    },
    metiers: {
      key: "$chantiers.metiers",
      type: "varchar",
      label: "Métier",
    },
    internalGlobalAmount: {
      key: "$chantiers.internalGlobalAmount",
      type: "decimal(9,2)",
      label: "Montant total",
      suffixe: " €",
    },
  },
};

var download = function (url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http
    .get(url, function (response) {
      response.pipe(file);
      file.on("finish", function () {
        file.close(cb); // close() is async, call cb after close completes.
      });
    })
    .on("error", function (err) {
      // Handle errors
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      if (cb) cb(err.message);
    });
};

app.get("/download/:id/:type/:name", (req, res) => {
  res.download(
    `Attachments/${req.params.id}/${req.params.type}/${req.params.name}`,
    function (err) {
      if (err) {
        console.log("download error =", err);
      }
    }
  );
});

app.get("/api/download/:id/:type/:element/:name", (req, res) => {
  const { id, type, element, name } = req.params;
  res.download(`Attachments/${id}/${type}/${element}/${name}`, function (err) {
    if (err) {
      console.log("download error =", err);
    }
  });
});
//Stats
app.get("/api/stat/:type", authentication, (req, res) => {
  let { type } = req.params;
  if (type === "dossier") {
    Dossiers.aggregate([
      {
        $project: Object.keys(detailsColumns).reduce((acc, cur) => {
          acc[cur] = detailsColumns[cur].key;
          return acc;
        }, {}),
      },
    ]).exec((err, docs) => {
      if (err) {
        res.status(400).json({ err });
      }
      res.status(200).json({
        data: docs.map((d) => {
          let dd = d.Date["$date"]
            ? new Date(d.Date["$date"])
            : new Date(d.Date);
          return {
            ...d,
            Date: `${dd.getFullYear()}-${
              parseInt(dd.getMonth()) + 1
            }-${dd.getDate()}`,
            Metiers: d.Metiers.join(", "),
            Count: 1,
          };
        }),
        schema: detailsColumns,
      });
    });
  } else {
    let columns = typeColumns[type];
    let schema = Dossiers.aggregate([
      {
        $match: {
          [`${type}.count`]: { $gt: 0 },
        },
      },
      { $project: { [type]: `$${type}._embedded.results` } },
      {
        $unwind: `$${type}`,
      },
      {
        $project: Object.keys(columns).reduce((acc, cur) => {
          acc[cur] = columns[cur].key;
          return acc;
        }, {}),
      },
    ]).exec((err, docs) => {
      console.log("docs = ", docs);
      if (err) {
        res.status(400).json({ err });
      }
      res.status(200).json({
        data: docs.map((d) => {
          let dat = Object.keys(d).reduce((acc, cur) => {
            if (columns[cur]?.type === "date" && d[cur]) {
              let dd = new Date(d[cur]["$date"]);
              return {
                ...acc,
                [cur]: `${dd.getFullYear()}-${
                  parseInt(dd.getMonth()) + 1
                }-${dd.getDate()}`,
              };
            } else if (Array.isArray(d[cur])) {
              return { ...acc, [cur]: d[cur].join(", ") };
            } else {
              return { ...acc, [cur]: d[cur] };
            }
          }, {});
          return dat;
        }),
        schema: columns,
      });
    });
  }
});
/*
app.get("/factures", (req, res) => {
  Dossiers.aggregate([
    {
      $match: {
        "factures.count": { $gt: 4 },
      },
    },
    { $project: { factures: "$factures._embedded.results" } },
  ]).exec((err, docs) => {
    if (err) {
      res.status(400).json({ err });
    }
    res.status(200).json({
      data: docs.map((d) => {
        let dd = d.Date["$date"] ? new Date(d.Date["$date"]) : new Date(d.Date);
        return {
          ...d,
          Date: `${dd.getFullYear()}-${
            parseInt(dd.getMonth()) + 1
          }-${dd.getDate()}`,
          Metiers: d.Metiers.join(", "),
          Count: 1,
        };
      }),
      schema: columns,
    });
  });
});
*/

app.get("/api/files/:dossier/:type", (req, res) => {
  const { dossier, type, element } = req.params;
  const files = fs.readdirSync(
    `Attachments/${dossier}/${type}/${element || ""}`
  );
  res.status(200).send(files);
});

app.get("/api/files/:dossier/:type/:element", (req, res) => {
  const { dossier, type, element } = req.params;
  const files = fs.readdirSync(
    `Attachments/${dossier}/${type}/${element || ""}`
  );
  res.status(200).send(files);
});

app.post("/uploadFiles", multer, (req, res) => {
  req.files;
  console.log("req = ", req);
  console.log("res = ", res);
});

//test
app.get("/folders", (req, res) => {
  const dir = "Attachments";
  const files = fs.readdirSync(dir);
  console.log(files.length);
  Dossiers.distinct("details._id.$id")
    .then((data) => {
      console.log(data[100]);
      res.status(200).json(data.filter((d) => !files.includes(d)));
    })
    .catch((error) => res.status(500).json({ error }));
  /*for (const file of files) {
    console.log(file);
  }
  */
});
//test
app.get("/chantiers/status", function (req, res) {
  Dossiers.aggregate([
    {
      $match: {
        "chantiers.count": { $gt: 3 },
      },
    },
    {
      $project: {
        chantiers: "$chantiers._embedded",
      },
    },
    {
      $unwind: "$chantiers.results",
    },
    {
      $project: {
        chantiers: "$chantiers.results",
      },
    },
    {
      $group: {
        _id: "$chantiers.status",
      },
    },
  ])
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => res.status(500).json({ err }));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`, process.env);
});
