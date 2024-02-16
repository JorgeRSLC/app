// import name models 
const firstNamesModel = require('../models/firstNameModel');
const lastNamesModel = require('../models/lastNameModel');

module.exports = async (req, res) => {

  const firstNames = await firstNamesModel.find({});
  const lastNames = await lastNamesModel.find({});

  const fullNames = [];

  for (let i = 0; i < Math.min(firstNames.length, lastNames.length); i++) {    
    const fullName = `${firstNames[i].firstName} ${lastNames[i].lastName}`;
    fullNames.push({'name':fullName});
}
  
  res.render('allNamesView', { names: fullNames });
}