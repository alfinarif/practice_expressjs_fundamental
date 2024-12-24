const express = require('express');

app = express();

app.get('/', function(req, res){
    res.send("Hello ExpressJs");
})


app.listen(8000, function (){
    console.log('Server Run Success');
})