// Documentation
// https://nodejs.org/api/path.html

// `path` is a core module included with node
const path = require('path');


// Base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).dir);

// concatenate paths
console.log(path.join(__dirname, 'TEST', 'HELLO.html'));
