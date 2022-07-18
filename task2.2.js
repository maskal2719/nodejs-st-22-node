const csv = require('csvtojson');
const fs = require('fs')

const csvFilePath = './csv/ex1.csv';
const txtFilePath = 'result.txt';

const columnNumbers = ['amount', 'price'];


const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);

readStream
    .pipe(csv({
        delimiter: ',',
        colParser:{amount:'number', price: 'number'}, noheader: false, headers:['book','author','amount','price']}))
    .pipe(writeStream);