var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT  = process.env.PORT || 8080;

app.use(express.static("public"));


app.listen(PORT,function(){
    console.log("app is listening on port" + PORT);
}); 

