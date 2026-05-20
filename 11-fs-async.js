const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/firsttext.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/secondtext.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' }, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File written successfully');
        });
    });
});
            console.log('starting the next task');  
