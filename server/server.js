require('./config/config');

const express = require('express');
const mongoose = require( 'mongoose');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(require('./routes/rsts'));

app.listen(process.env.PORT,()=>{console.log('Escuchando puerto',process.env.PORT)});


