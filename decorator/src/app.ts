function Logger(logString: string) {
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}

function  WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        console.log('REndering template...')
        const hookEl = document.getElementById(hookId);
        const p = new constructor()
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name

        }
    }
}

@Logger('Logging PErson')
@WithTemplate('<h1>This is he person class</h1>', 'app')
class Person {
    name = 'Timo1'

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log(pers)

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator');
    console.log(target,propertyName)
    console.log()
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator!')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log4(target: any, name: string, position: number) {
    console.log('Parameter decorator!')
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price  - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}



const book1 = new Product('Book1',19)
const book2 = new Product('Book2',29)