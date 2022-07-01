const mongoose = require("mongoose");

const connexion = require("./connexionMongo");

const dossierSchema = mongoose.Schema({
  details: { type: Object, required: true },
  devis: { type: Object },
  factures: { type: Object },
  chantiers: { type: Object },
  reconnaissances: { type: Object },
  mails: { type: Object },
  appels: { type: Object },
  preProductions: { type: Object },
  participants: { type: Object },
});

module.exports = mongoose.model("dossiers", dossierSchema);
