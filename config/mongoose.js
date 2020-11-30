const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/CoMEET');
mongoose.connect('mongodb+srv://Myuser:mypass@cluster0.soua4.mongodb.net/sample?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error in connecting mongoDB'));
db.once('open', () => {
    console.log('connected to database::mongoDB');

});

module.exports = db;