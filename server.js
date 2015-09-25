var express = require('express');
var morgan = require('morgan');

var port = 3000;
var app = express();

app.use(morgan('dev'));
//app.route('/', './public/index.html');
app.use(express.static('./public/'));

app.listen(port);

console.log('listening on port ' + port);
