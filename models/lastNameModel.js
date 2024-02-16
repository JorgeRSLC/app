// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// creating schema for the last name
const lastNameSchema = new mongoose.Schema({
    lastName: String
}, { collection: 'lastNames' });

// creating model for the last name
const lastNameModel = mongoose.model('lastName', lastNameSchema);

// export the model
module.exports = lastNameModel;