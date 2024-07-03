//type AddFn = (a: number, b:number) => number;
// custom function type
interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;

add = (n1:number, n2:number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
    getAge(): void;
}

interface test {
    readonly test: string;

    testFunc(): void;
}

class Person implements test,Greetable {
    public name?: string

    constructor( public age: number, public test: string, n?: string) {
        if(n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' ' + this.name)
        }
        else {
           console.log('Hi') 
        }
    }

    getAge() {
        console.log('I am '+ this.age + ' years old')
    }

    testFunc(): void {
        console.log('show age: ' + this.test)
    }
}

let user1: Greetable;
let user2: Greetable;


user1 = new Person(40, '123Test123', 'Timo23')
user2 = new Person(20, 'Tester')

user1.greet('Hi there! I am');
user1.getAge();
//user1.testFunc(); Does show but user1 is of type "Greetable" therfore it will through an error for user1.testFunc. It has the function because we are implementing the interface into the class but the user1  variable only is of type greetable not test!
console.log(user1)
console.log(user2)
