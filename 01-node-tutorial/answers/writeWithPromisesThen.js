const { writeFile, readFile } = require("fs").promises;

const filePath = './content/temp.txt';

writeFile(filePath, 'Line 1\n', { flag: 'w'}) 
    .then(() => {
        return writeFile(filePath, 'Line 2\n', { flag: 'a'});
    }) 
    .then(() => {
        return writeFile(filePath, 'Line 3\n', { flag: 'a'});
    })
    .then(() => readFile(filePath, 'utf8'))
    .then(data => {
        console.log('File content:\n', data);
    })
    .catch(error => {  
     console.log("An error occurred: ", error)  
    });

