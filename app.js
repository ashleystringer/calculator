var express = require('express'); 
var path = require('path');
var hbs = require('express-handlebars');
var routes = require('./routes/calculator');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

app.locals.layout = null;

//app.engine('handlebars', exphbs({defaultLayout: 'layouts'}));

app.use('/', routes);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), ()=>{
    console.log('Server started on port: ' + app.get('port'));
});