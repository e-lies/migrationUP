const mongoose = require("mongoose");

const connexion = mongoose.connect(
  "mongodb+srv://Ilyes:hendrix@serverlessinstancepolyg.5sd8x.mongodb.net/iwe?retryWrites=true&w=majority",
  function (error) {
    if (error) {
      console.log("error while connecting to MongoDB = ", error);
    }
  }
);
//const connexion = mongoose.connect("mongodb+srv://Ilyes:hendrix@cluster0.5sd8x.mongodb.net/iweRecovery?retryWrites=true&w=majority");

module.exports = connexion;
