module.exports = (req, res) => {
    // import name models 
    const firstNamesModel = require('../models/firstNameModel');
    const lastNamesModel = require('../models/lastNameModel');

    // get the first name and last name from the request
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // create a new first name and last name model
    const newFirstName = new firstNamesModel({ firstName: firstName });
    const newLastName = new lastNamesModel({ lastName: lastName });

    // save the new first name and last name
    newFirstName.save();
    newLastName.save();

    // redirect to the displayNames route
    res.redirect('/displayNames');
}