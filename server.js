const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+ '/public', 'index.html'));
});

// server.js (Express 4.0)

var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');


app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT


var router = express.Router();

var notes = [
  {id: 1, label: 'First Note', author: 'Shyam'},
  {id: 2, label: 'Second Note', author: 'Brad'},
  {id: 3, label: 'Middle Note', author: 'Someone'},
  {id: 4, label: 'Last Note', author: 'Shyam'},
  {id: 5, label: 'Really the last Note', author: 'Shyam'}

];
var lastId = 6;

router.get('/note', function(req, res) {
  res.send(notes);
});
