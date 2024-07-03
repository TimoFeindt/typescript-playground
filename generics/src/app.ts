console.log('ICH FUNKTIONIERE!')


//extends --type-- werden benutzt als "constraints" um den generics mehr restriction zu zuschreiben. Es können auch Union types verwendet werden. Man hat sehr viel auswahl.
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Timo'}, {age: 30});

console.log(mergedObj);

console.log(mergedObj.age)

//wir erstellen einen eigenen type "LENGTHY" um dem selbst erstellten generic type zu zusichern, dass er es eine "length" property ist auf die wir zugreifen können. 
// Tun wir das nicht, so meckert typescript, dass es nicht weiß ob die unser type "T" eine length property überhaupt hat auf die wir zugreifen können. 


type Lengthy = {
    length: number
}

// als return value der function geben wir eine tuple an (Eine tuple hat immer genaue types pro values, die zurückgegeben werden.) In diesem Fall als erstes Unser Element an der ersten Stelle
// Das haben wir selbst erstellt und als zweites Value enthält unsere Tuple einen STring.

function countAndDescribe<T extends Lengthy>(element: T): [T ,string] {
    let describeVal = 'Got no value';
    if(element.length === 1 ) {
        describeVal = 'has 1 element'
    } else if( element.length > 1) {
        describeVal = 'has ' + element.length + ' elements'
    }
    return [element, describeVal ]
}

console.log(countAndDescribe(''))


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

console.log(extractAndConvert({name: 'Timo'}, 'name'))

class DataStorage<T> { // there is also a possibility to add a specific type to the generic T type to ensure no object will be able to add. Therefore we would change it into "T extends string | numbers | boolean"
    private data: T[] = [];

    addItem(item: T):void {
        this.data.push(item)
    }

    removeItem(item: T): void {
        if(this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const testStorage = new DataStorage<string>()

testStorage.addItem('TEST')
testStorage.addItem('2')
testStorage.addItem('3')
testStorage.removeItem('TEST')

console.log(testStorage.getItems())


const objStorage = new DataStorage<object>(); // to get this working we either need a const which is has an object declared or we remove this part. 

objStorage.addItem({name: 'Timo'})
objStorage.addItem({name: 'Johanna'})

objStorage.removeItem({name: 'Timo'}) // this does not work because every written object has it'S pwn memory part and the one we write as a parameter is a "new" obj therefore the is no connection to the one we added with the function.

console.log(objStorage.getItems())


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Timo', 'Johanna']; // Readonly forbids to add values into the array
//names.push('Cedi')