const mongoose = require("mongoose");

const connexion = require("./connexionMongo");

const contactSchema = mongoose.Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  chantiers: { type: Object },
  reconnaissances: { type: Object },
  mails: { type: Object },
  appels: { type: Object },
  preProductions: { type: Object },
  participants: { type: Object },
});

module.exports = mongoose.model("contacts", contactSchema);
