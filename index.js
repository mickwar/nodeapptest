// const Person = require('./person.js');
// 
// const person1 = new Person('John Doe', 30);
// 
// console.log(person1);
// console.log(person1.name);
// 
// person1.greeting();


// const Logger = require('./logger.js');
// 
// const logger = new Logger();
// 
// logger.on('mESSage', (data) => console.log('Called Listener:', data));
// 
// logger.log('Hello World');
// logger.log('ABC');
// logger.log('123 Test');


const http = require('http');
const path = require('path');
const fs = require('fs');

//const server = http.createServer((request, response) => {
//    // Home page
//    if (request.url === '/') {
//        // get contents of public/index.html
//        fs.readFile(path.join(__dirname, 'public', 'index.html'),
//            (err, content) => {
//                if (err) throw err;
//                // write to headers
//                response.writeHead(200, { 'Content-Type': 'text/html' });
//                response.end(content);
//                }
//            );
//        }
//
//    // About
//    if (request.url === '/about') {
//        // get contents of public/about.html
//        fs.readFile(path.join(__dirname, 'public', 'about.html'),
//            (err, content) => {
//                if (err) throw err;
//                // write to headers
//                response.writeHead(200, { 'Content-Type': 'text/html' });
//                response.end(content);
//                }
//            );
//        }
//
//    // Pseudo-API example
//    if (request.url === '/api/users') {
//        // normally you'd fetch the data from a database
//        const users = [
//            { name: 'Bob smith', age: 40 },
//            { name: 'John Doe', age: 30 }
//            ];
//        response.writeHead(200, { 'Content-Type': 'application/json' });
//        response.end(JSON.stringify(users));
//        }
//    });


const server = http.createServer((request, response) => {
    // build file path
    // ternary operator, a ? b : c, "if a is true, then b, else c"
    let filePath = path.join(
        __dirname,
        'public',
        request.url === '/' ? 'index.html' : request.url
        );

    // extension of file
    let extname = path.extname(filePath);

    // initial content type
    let contentType = 'text/html';

    // check extension to set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        }

    fs.readFile(
        filePath,
        (err, content) => {
            if (err) {
                if (err.code == 'ENOENT'){
                    // page not found
                    fs.readFile(path.join(__dirname, 'public', '404.html'),
                        (err, content) => {
                        response.writeHead(200, { 'Content-Type': 'text/html' });
                        response.end(content, 'utf8');
                        });
                } else {
                    // probably a server error (5xx code)
                    response.writeHead(500);
                    response.end(`Server error: ${err.code}`);
                    }
            } else {
                // write to headers
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content);
                }
        });

    });

// check if environment variable PORT is found and use that value,
// otherwise default to 5000
const PORT = process.env.PORT || 5000;


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
