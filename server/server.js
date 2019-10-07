require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.get('/',function(req,res){
    res.json('Hello World');

});

app.listen(process.env.PORT,()=>{console.log('Escuchando puerto',process.env.PORT)});


