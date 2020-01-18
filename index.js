const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.listen(3001, function(){
console.log("i am now live");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});