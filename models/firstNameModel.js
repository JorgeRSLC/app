// import mongoose module
const mongoose = require('mongoose');

// creating schema for the first name
const firstNameSchema = new mongoose.Schema({
    firstName: String
}, { collection: 'firstName' });

// creating model for the first name
const firstNameModel = mongoose.model('firstName', firstNameSchema);

// export the model
module.exports = firstNameModel;