const os = require('os');


//info about current user
const user = os.userInfo();
console.log(user);

// method to return the system uptime in hours and minutes
const uptime = os.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
console.log(`The system uptime is ${hours} hours and ${minutes} minutes`);

//general info about os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    PROCESSOR: os.cpus()
}
console.log(currentOS);