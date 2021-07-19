const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/easy-notes');

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'error connecting to db'));
// finally if connection is successful
db.once('open', function() {
    // we are connected !
    console.log('Successfuuly connected to database');
});