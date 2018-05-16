var express = require('express');
var jsonServer = require('json-server');

var server = express();
 
server.use('/api', jsonServer.router('banco.json'));

server.listen(9000)


console.log('running')