// import core modules
const express = require('express');
const { engine: expressHandlebars } = require('express-handlebars');

// instantiate express
const app = express();

// set up handlebars
app.engine('hbs', expressHandlebars({ defaultLayout: 'main', 
        extname: '.hbs' }));
app.set('view engine', 'hbs');

// static resources
app.use(express.static(__dirname+'public'));

// parse JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', require('./routes/index'));

// Middleware for 404 errors
app.use((req, res, next) => {
    res.status(404).render('404');
});

// Middleware for 500 errors
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).render('500');
});

// start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
