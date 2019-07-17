// Documentation
// https://nodejs.org/api/fs.html
// https://nodejs.org/api/path.html

// file system
const fs = require('fs');
const path = require('path');


// note that the default methods are asynchronous

// create folder
fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
    if (err) throw err;
    console.log('Folder created ...');
    });

// using an arrow function (similar to Python's lambda functions, anonymous)
//fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//    if (err) throw err;
//    console.log('Folder created ...');
//    });


// create, write, and append to file
fs.writeFile(path.join(__dirname, '/test', 'hello.text'),
    'Hello world!\n',
    (err) => {
        if (err) throw err;
        console.log('File created and written to ...');

        // append
        fs.appendFile(path.join(__dirname, '/test', 'hello.text'),
            ' --- Appended text',
            (err) => {
                if (err) throw err;
                console.log('File appended to ...');
                });
    });

// read file
fs.readFile(path.join(__dirname, '/test', 'hello.text'), 'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
        });
