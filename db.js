// import the mongoose package and the credentials
const mongoose = require('mongoose');
const { credentials } = require('./config');



// initialize the connection to the database
const dbUrl = credentials.protocol + '://' + credentials.user + ':' + 
                credentials.password + '@' + credentials.cluster + 
                '/' + credentials.database + credentials.queryParams;
mongoose.connect(dbUrl);
const db = mongoose.connection;
// handle the error event
db.on('error', err => {
    console.error('MongoDB error: ' + err.message)
    process.exit(1)
    });
db.once('open', () => {
    console.log('MongoDB connection established');
    });
