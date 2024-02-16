const db = require('./db');
const firstNameModel = require('./models/firstNameModel');
const lastNameModel = require('./models/lastNameModel');

(async () => {
    // create an array of first names
    const firstNames = [
        'John', 'Jane', 'Jim', 'Jill', 'Jack', 'Jen', 'Joe', 'Jill', 
        'Jesse', 'Jenny'
    ];
    // create an array of last names
    const lastNames = [
        'Doe', 'Smith', 'Jones', 'Johnson', 'Brown', 'Davis', 'Miller', 
        'Wilson', 'Moore', 'Taylor'
    ];
    // insert the first names into the database
    for (let i = 0; i < firstNames.length; i++) {
        const firstName = new firstNameModel({ firstName: firstNames[i] });
        await firstName.save();
    }
    // insert the last names into the database
    for (let i = 0; i < lastNames.length; i++) {
        const lastName = new lastNameModel({ lastName: lastNames[i] });
        await lastName.save();
    }
    console.log('First and last names inserted into the database');
    process.exit(0);
})();