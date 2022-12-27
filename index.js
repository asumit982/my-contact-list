const express = require('express');
const port = 8000;
const path = require('path');


const db = require('./config/mongoose');
const Contact = require('./models/contact');

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

    Contact.find({}, function(err,contacts){

        if(err){
            console.log("Error in fetching contact");
            return;
        }

        return res.render('home', {
            title : "Contacts List",
            contact_list : contacts
        })
    })
});

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
    // contacts.push(req.body);

    Contact.create({
        name : req.body.name,
        phone : req.body.phone
    }, function(err, newContact){
        if(err){
            console.log("Error in creating a contact");
            return;
        }

        console.log('****', newContact);

    return res.redirect('back');
    });
})

app.listen(port, function(err){
    if(err){
        console.log("Error!", err);
    }

    console.log("My Express Server is running on port:", port);
})