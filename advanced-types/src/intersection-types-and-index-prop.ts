//Intersection types

// als interface: 

/* interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}; */


type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Timo',
    privileges: ['create-server'],
    startDate: new Date(),
}

console.log(e1)

/* type Combinable = string | number;
type Numeric = number | string;

type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b
} */

type UnknownEmployee = Employee | Admin; 

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    //'..' in 'x' can be used for types
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('StartDate: ' + emp.startDate);
    }
}

printEmployeeInformation({name:'Test', privileges: ['test'], startDate:new Date()});
printEmployeeInformation(e1);


class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck ...')
    }

    loadCargo(amount: number) {
        console.log('Loading  Cargo ... ' + amount + 'cute kitties')
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
// instanceof can be used with classes
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);


interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function movingAnimal(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break
        case 'horse':
            speed = animal.runningSpeed;
            break
    }
    console.log('Moving with speed: ' + speed)
}


movingAnimal({type: 'bird', flyingSpeed: 50})


const paragraph = document.getElementById('messageOutput')
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer {
    // { email: 'Not a valid email', username: 'Must start with a character!' }
    //id: string; man kann immer noch andere props setzen, die immer gesetzt sein müssen.
    [prop: string]: string; // wir sagen das hier irgendein prop / key gesetzt werden kann, dieser muss aber von typ string sein.
}

const errorBag: ErrorContainer = {
    email: 'not a valid Email!',
    username: 'use a character!',
}