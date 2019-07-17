// Documentation
// https://nodejs.org/api/os.html

const os = require('os');

// platform
console.log(os.platform());

// cpu architecture
console.log(os.arch());

// cpu core info
console.log(os.cpus());

// free memory (in bytes as integer)
console.log(os.freemem());

// free memory (in Gb)
console.log(os.freemem() / 1024 ** 3);

// total memory (in bytes as integer)
console.log(os.totalmem());

// total memory (in Gb)
console.log(os.totalmem() / 1024 ** 3);

// home directory
console.log(os.homedir());

// uptime (in seconds)
console.log(os.uptime());
