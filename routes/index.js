// import the express module
const express = require('express');
// create a new Router object
const router = express.Router();

// supporting modules
const displayNames = require('./displayNames');
const addNames = require('./addNames');
const submitName = require('./submitName');

router.get('/', (req, res) => {
  res.redirect('/displayNames');
})

// add the displayNames route
router.get('/displayNames', displayNames);

// add the addNames route
router.get('/add-name', addNames);

// add submit-name
router.post('/submit-name', submitName);

// export the router
module.exports = router;