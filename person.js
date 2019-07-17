// Module wrapper function
// When working with a module in this way (meaning this `person.js` file), the code
// isn't run as-is, instead it is wrapped in this function:
//
// (function (exports, require, module, __filename, __dirname) {
// 
// })
//
// So that's where the `module` variable comes from

class Person {
    // `this` refers to the class

    // for instantiating the class
    constructor(name, age){
        this.name = name;
        this.age = age;
        }

    // a method
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
        }
    }

// export the class
module.exports = Person;
