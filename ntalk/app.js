var express = require('express'),
    load = require('express-load'),
    cookieParser = require('cookie-parser'),
    app = express();


//stack de configuração do servidor
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('ntalk'));
app.use(session());
app.use(bodyParser());


load('models')
  .then('controllers')
  .then('routes')
  .into(app);

// app.get('/', routes.index);
// app.get('/contatos', routes.users.index);

app.listen(3000, function(){
  console.log("Ntalk no ar");
});

