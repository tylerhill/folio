var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req,res) {
  res.render('index');
});

app.get('/portfolio/:id', function(req,res) {
  res.render('portfolio', { id : req.params.id });
});

app.listen(3000);

