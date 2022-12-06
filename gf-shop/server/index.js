var express = require('express');
var morgan = require('morgan');
var db = require('./db');
var cors=require("cors")
const { route } = require('./product/productRoute');
const productRouter=require('./product/productRoute')

var app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/prod',productRouter)


// TODO: Import the productRouter and assign it to the correct route:


app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
});

var PORT = 5000;

app.listen(PORT, function () {
  console.log('Prod-MongoDB RESTful API listening on http://localhost:' + PORT);
});
