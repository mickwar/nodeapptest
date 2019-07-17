// const Person = require('./person.js');
// 
// const person1 = new Person('John Doe', 30);
// 
// console.log(person1);
// console.log(person1.name);
// 
// person1.greeting();

const Logger = require('./logger.js');

const logger = new Logger();

logger.on('mESSage', (data) => console.log('Called Listener:', data));

logger.log('Hello World');
logger.log('ABC');
logger.log('123 Test');
