const {readFileSync} = require('fs');
const {writeFileSync} = require('fs');

const first = readFileSync('./content/firsttext.txt', 'utf-8');
const second = readFileSync('./content/secondtext.txt', 'utf-8');  

console.log(first, second);

writeFileSync('./content/result-sync.txt',
     `Here is the result : ${first}, ${second}`, {flag: 'a'});

     console.log('File written successfully');
     console.log('starting the next task');