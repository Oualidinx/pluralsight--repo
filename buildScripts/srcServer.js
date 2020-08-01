var express = require('express');
var path = require('path');
var ouvrir=require('open');

var port = 65000;
var app = express();

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){

  if (err){
    console.log(err);
  }else{
    ouvrir(`http://localhost:${port}`);
  }
});
