"use strict";
console.log('ICH FUNKTIONIERE!');
//extends --type-- werden benutzt als "constraints" um den generics mehr restriction zu zuschreiben. Es können auch Union types verwendet werden. Man hat sehr viel auswahl.
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Timo' }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.age);
// als return value der function geben wir eine tuple an (Eine tuple hat immer genaue types pro values, die zurückgegeben werden.) In diesem Fall als erstes Unser Element an der ersten Stelle
// Das haben wir selbst erstellt und als zweites Value enthält unsere Tuple einen STring.
function countAndDescribe(element) {
    let describeVal = 'Got no value';
    if (element.length === 1) {
        describeVal = 'has 1 element';
    }
    else if (element.length > 1) {
        describeVal = 'has ' + element.length + ' elements';
    }
    return [element, describeVal];
}
console.log(countAndDescribe(''));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'Timo' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const testStorage = new DataStorage();
testStorage.addItem('TEST');
testStorage.addItem('2');
testStorage.addItem('3');
testStorage.removeItem('TEST');
console.log(testStorage.getItems());
const objStorage = new DataStorage(); // to get this working we either need a const which is has an object declared or we remove this part. 
objStorage.addItem({ name: 'Timo' });
objStorage.addItem({ name: 'Johanna' });
objStorage.removeItem({ name: 'Timo' }); // this does not work because every written object has it'S pwn memory part and the one we write as a parameter is a "new" obj therefore the is no connection to the one we added with the function.
console.log(objStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Timo', 'Johanna'];
names.push('Cedi');
