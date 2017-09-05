var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var PORT = 8000;

app.use(express.static(rootPath + '/app'));

app.listen(PORT);
console.log('server is running on port ' + PORT + '...');
