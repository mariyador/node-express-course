const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./temporary/fileB.txt', `Line 1: ${first}\n`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Line 1 written successfully');

            writeFile('./temporary/fileB.txt', `Line 2: ${second}\n`, { flag: 'a' }, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Line 2 appended successfully');
                
                writeFile('./temporary/fileB.txt', 'Line 3: Additional content\n', { flag: 'a' }, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Line 3 appended successfully');
                    console.log('All lines written successfully');
                });
            });
        });
    });
});