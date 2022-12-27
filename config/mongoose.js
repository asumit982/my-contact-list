// reuire the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

//checking connection
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console,'error connecting to  db'));

//running
db.once('open', function(){
    console.log('Succesfully connected to the database');
});