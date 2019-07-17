// Documentation
// https://nodejs.org/api/events.html

const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter {

    }

// init object
const myemitter = new MyEmitter();

// event listener
myemitter.on('event', () => console.log('Event fired!'));

// init event
myemitter.emit('event');
myemitter.emit('event');
myemitter.emit('event');
