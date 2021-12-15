var express = require('express'); 
var path = require('path');
var exphbs = require('express-validator');
var routes = require('./routes/calculator');

var app = express();

const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
//app.engine('handlebars', exphbs({defaultLayout: 'layouts'}));
//app.set('view engine', 'handlebars');

console.log('app');


app.use('/', routes);
app.listen(port, ()=>{});