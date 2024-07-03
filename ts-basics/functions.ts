const add = (n1:number, n2:number) => {
    return n1 + n2
}

function printResult(num:number): void { //void just means this function does not return anything / has no return ! 
    console.log('Result: '+ num)
}

function returnsUndefined(str: string): undefined { // use type undefined if the function has a return but returns nothing
    console.log('this one returns nothing')
    return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

printResult(add(5,12))

/* let combineValues: Function;
combineValues = add; */

let combineValues: (a: number, b: number) => number;
combineValues = add;
//combineValues = printResult; does not work because printResult wants one number not 2 as we declared 

console.log(combineValues(55,15))


addAndHandle(10,20, (result) => {
    console.log(result)
})