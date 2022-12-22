const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('home', 
    {title: "My Contact List"});
})

app.listen(port, function(err){
    if(err){
        console.log("Error!", err);
    }

    console.log("My Express Server is running on port:", port);
})