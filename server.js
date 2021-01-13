const express = require('express');
const app = express();

const hbs = require('hbs');
// Helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

//Express HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', function(req, res) {
    res.render('home.hbs', {
        nombre: 'Carlos flores'
    });
});

app.get('/about', function(req, res) {
    res.render('about.hbs', {});
});

app.listen(3000, () => {
    console.log(`ESCUCHANDO PETICIONES EN EL PUERTO ${ port }`);
});