const { writeFile, readFile } = require("fs").promises;

const filePath = './content/temp.txt';

const writer = async() => {
    try {
       await writeFile(filePath, 'Line 1\n Line 2\n Line 3\n', { flag: 'w'});
       console.log('All is done.');
    } catch (error) {
        console.error('Error writing to file:', error.message);
    }
};

const reader = async() => {
    try {
        const data = await readFile(filePath, 'utf8');
        console.log('File content:\n', data);
        } catch (error) {
        console.error('Error reading file:', error.message);
    }
};

const readWrite = async() => {
    await writer();
    await reader();
}

readWrite();