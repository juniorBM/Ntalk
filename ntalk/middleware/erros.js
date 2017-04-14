exports.notFound = function(req, res, next){
    contatos = require('../routes/contatos');
    home = require('../routes/home');
    
    var status = res.statusCode;
    if (status == 404){
        res.render('not-found');
    }
};
exports.serverError = function(error, req, res, next){
    if (res.status(500)) {
        res.render('server-error', {error: error});   
    }
};
