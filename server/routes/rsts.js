const express = require('express');

//const RstsResponseMessage = require('../models/rstsresponsemessage');

const app = express();

app.post('/api/rsts', function(req,res){
    let body = req.body;
   
    res.json({
        body
    });
});

module.exports = app;