const express = require("express");
const bodyParser = require("body-parser");
 const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3001, function(){
console.log("i am now live");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var cryptoC = req.body.crypto;
    var currencyC = req.body.currency;
    var amount = req.body.amount;
    var per = cryptoC+currencyC;
    var baseURL = "https://apiv2.bitcoinaverage.com/convert/global";
    var urlToSend = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"+ per;
    var options = {
        url: baseURL,
        method: "GET",
        qs : {
            from:cryptoC,
            to:currencyC,
            amount:amount

        },

    };

request(options, function(error,respond,body){
   data =JSON.parse(body);
  
  
   console.log(data.price);
   res.send();
});
 

});