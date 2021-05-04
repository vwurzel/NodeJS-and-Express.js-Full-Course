const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// Get system uptime (seconds)
const uptime = os.uptime()
console.log(`The uptime is ${uptime} seconds`)


// System info
const currentOs = {
    name: os.type(),
    version: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)