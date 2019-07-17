const Person = require('./person.js');

const person1 = new Person('John Doe', 30);

console.log(person1);
console.log(person1.name);

person1.greeting();
