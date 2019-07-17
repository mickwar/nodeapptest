// Documentation
// https://nodejs.org/api/http.html

const http = require('http');

// create server object
http.createServer((request, response) => {
    // write response
    response.write('Hello world');
    response.end();
    }).listen(5000, () => console.log('server running on localhost:5000 ...'));
