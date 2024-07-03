"use strict";
//Intersection types
const e1 = {
    name: 'Timo',
    privileges: ['create-server'],
    startDate: new Date(),
};
console.log(e1);
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    //'..' in 'x' can be used for types
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('StartDate: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Test', privileges: ['test'], startDate: new Date() });
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck ...');
    }
    loadCargo(amount) {
        console.log('Loading  Cargo ... ' + amount + 'cute kitties');
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // instanceof can be used with classes
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function movingAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}
movingAnimal({ type: 'bird', flyingSpeed: 50 });
const paragraph = document.getElementById('messageOutput');
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
const errorBag = {
    email: 'not a valid Email!',
    username: 'use a character!',
};
