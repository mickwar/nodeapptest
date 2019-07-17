const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('mESSage', { id: uuid.v4(), msg });
        // same:
        //this.emit('mESSage', { id: uuid.v4(), msg: msg });
        }
    }

module.exports = Logger;
