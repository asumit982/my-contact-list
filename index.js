const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

var contacts = [
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
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    return res.render('home', 
    {title: "My Contact List",
    contact_list : contacts
});
})

app.get('/delete-contact', function(req,res){
    console.log(req.query);

    let phone = req.query.phone;

    let contactIndex = contacts.findIndex(contact => contact.phone == phone);

    if(contactIndex != -1){
        contacts.splice(contactIndex,1);
    }

    return res.redirect('back');
})

app.post('/create-contact', function(req,res){
    contacts.push(req.body);
    return res.redirect('back');
})

app.listen(port, function(err){
    if(err){
        console.log("Error!", err);
    }

    console.log("My Express Server is running on port:", port);
})