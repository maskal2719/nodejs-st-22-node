const csv = require('csvtojson');
const fs = require('fs')

const csvFilePath = './csv/ex1.csv';
const txtFilePath = 'result.txt';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);

readStream
    .pipe(csv({
        delimiter: ',',
        ignoreColumns: /(amount)/,
        colParser:{amount:'number', price: 'number'}, noheader: false, headers:['book','author','amount','price']}))
    .pipe(writeStream);

    readStream.on('error', error => {
        console.log(error.message)
    });