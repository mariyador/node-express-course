const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const filePath = './temporary/fileA.txt';


writeFileSync(filePath, 'First line\n', { flag: 'w' });
writeFileSync(filePath, 'Second line\n', { flag: 'a' });
writeFileSync(filePath, 'Third line\n', { flag: 'a' });

const fileContents = readFileSync(filePath, 'utf-8');
console.log(fileContents);

