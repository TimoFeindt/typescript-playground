"use strict";
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
/* const result = add('Timo', ' true') as string; typecasting helps to tell ts that what we get is definetly a string an dnot a string or a number
console.log(result)
result.split(' ') */
const result = add('Timo', 'Johanna');
console.log(result);
