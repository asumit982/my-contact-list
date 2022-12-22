const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

var contactList = [
    {
        name : "Spider Man",
        phone : 587634863
    },
    {
        name : "Iron Man",
        phone : 547894383
    },
    {
        name : "Batman",
        phone : 3245263
    }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('home', 
    {title: "My Contact List",
    contact_list : contactList
});
})

app.listen(port, function(err){
    if(err){
        console.log("Error!", err);
    }

    console.log("My Express Server is running on port:", port);
})