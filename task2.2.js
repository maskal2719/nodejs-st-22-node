const csv = require('csvtojson');
const fs = require('fs')

const csvFilePath = './csv/ex1.csv';
const txtFilePath = 'result.txt';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);

readStream
    .on('error', (error) => console.error(error))
    .pipe(csv())
    .pipe(writeStream);