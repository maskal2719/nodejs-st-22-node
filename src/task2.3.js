// //Task2.1 ES6
import {stdin,stdout} from 'process';

stdin.on('data', data => {
    stdout.write(data.reverse() + '\n');
})


//Task2.2 ES6
import csv from 'csvtojson';
import { createReadStream, createWriteStream } from 'fs';

const csvFilePath = './csv/ex1.csv';
const txtFilePath = 'result.txt'

const readStream = createReadStream(csvFilePath);
const writeStream = createWriteStream(txtFilePath);

readStream
    .on('error', (error) => console.error(error))
    .pipe(csv())
    .pipe(writeStream);