const express = require("express");
const bodyParser = require("body-parser");
 const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
console.log("i am now live");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var cryptoC = req.body.crypto;
    var currencyC = req.body.currency;
    var per = cryptoC+currencyC;
    var urlToSend = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"+ per;

request(urlToSend, function(error,respond,body){
   data =JSON.parse(body);
   res.write("writting now");
   res.write("Cryto type: " +cryptoC + " at this carrency "+ currencyC + " the value is "+ data.last)
   console.log(data.last);
   res.send();
});
 

});