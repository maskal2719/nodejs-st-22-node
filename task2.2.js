var csv = require('csvtojson');
var fs = require('fs')

var csvFilePath = './csv/ex1.csv';
var txtFilePath = 'result.txt';

var readStream = fs.createReadStream(csvFilePath);
var writeStream = fs.createWriteStream(txtFilePath);

readStream
    .pipe(csv({
        delimiter: ',',
        ignoreColumns: /(amount)/,
        colParser:{amount:'number', price: 'number'}, noheader: false, headers:['book','author','amount','price']}))
    .pipe(writeStream);

readStream.on('error', error => {
    console.log(error.message)
});