"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(age, test, n) {
        this.age = age;
        this.test = test;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
    getAge() {
        console.log('I am ' + this.age + ' years old');
    }
    testFunc() {
        console.log('show age: ' + this.test);
    }
}
let user1;
let user2;
user1 = new Person(40, '123Test123', 'Timo23');
user2 = new Person(20, 'Tester');
user1.greet('Hi there! I am');
user1.getAge();
//user1.testFunc(); Does show but user1 is of type "Greetable" therfore it will through an error for user1.testFunc. It has the function because we are implementing the interface into the class but the user1  variable only is of type greetable not test!
console.log(user1);
console.log(user2);
