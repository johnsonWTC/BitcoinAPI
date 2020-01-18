const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3002, function(){
console.log("i am now live");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    var respond = req.body.crypto
    console.log();
    res.send("just sent " + respond);

 

});