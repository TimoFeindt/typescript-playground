type Combinable = number | string;
type ConversionDescriptor = 'asNumber' | 'asString';

function combine(
    input1: Combinable, 
    input2: Combinable, 
    conversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || conversion === 'asNumber') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }

    return result

}

const combineAges = combine(30,26, 'asNumber'); 
console.log(combineAges);

const combineAgesAsStrings = combine('30','30', 'asNumber'); 
console.log(combineAgesAsStrings);

const combineNames = combine('Timo', 'Johnna', 'asString')
console.log(combineNames)