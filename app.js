const http = require('http')
const express = require('express');
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

const server = http.createServer();

const PORT = 3000;

server.listen(PORT, function() {
    console.log('server listening. . . ')
});

server.on('request', app);

app.use(function(req, res, next) {
    console.log('logged', req.method, res.statusCode);
    next();
});

app.get('/', function(req, res) {
    // res.send('blaaa');
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get('/news', function(req, res) {
    res.send('Fake news')
});

let data = {
    title: 'An Example',
    people: [
        { name: "gandalf" },
        { name: 'Frodo' },
        { name: "hermione" }
    ]
};


nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', data, function(err, output) {
    console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

