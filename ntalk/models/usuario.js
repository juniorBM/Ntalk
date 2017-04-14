module.exports = function(app) {

//   var db = require('../libs/db_connect')();
//   var Schema = require('mongoose').Schema;

  var contato = {
    nome: String,
    email: String
  };

  var usuario = {
      email: { type: String, required: true},
      nome: { type: String, required: true },
      contatos: [contato]
  };


  return ('usuarios', usuario);
};

