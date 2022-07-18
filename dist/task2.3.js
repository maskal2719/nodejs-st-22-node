'use strict';

var _process = require('process');

var _csvtojson = require('csvtojson');

var _csvtojson2 = _interopRequireDefault(_csvtojson);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_process.stdin.on('data', function (data) {
    _process.stdout.write(data.reverse() + '\n');
});

//Task2.2 ES6
//Task2.1 ES6


var csvFilePath = './csv/ex1.csv';
var txtFilePath = 'result.txt';

var readStream = (0, _fs.createReadStream)(csvFilePath);
var writeStream = (0, _fs.createWriteStream)(txtFilePath);

readStream.on('error', function (error) {
    return console.error(error);
}).pipe((0, _csvtojson2.default)()).pipe(writeStream);