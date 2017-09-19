const http = require('http')
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');


const server = http.createServer();

const PORT = 3000; 

server.listen(PORT,function(){
	console.log('server listening. . . ')
});

server.on('request', app);

app.use(function(req, res, next){
	console.log('logged', req.method, res.statusCode);
	next();
});

app.get('/', function(req,res){
	res.send('Hello world')
})

app.get('/news', function(req, res){
	res.send('Fake news')
})




