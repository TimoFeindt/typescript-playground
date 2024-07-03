"use strict";
function highAndLow(str) {
    /* let arr: any[] = numbers.split(' ').map(x => {return +x})
    console.log(arr)
    let result: number[] = [];
    let resHigh: number = arr[0];
    let resLow: number = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]) {
            if(resHigh < arr[i+1]) {
                resHigh = arr[i+1]
            }
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            if(resLow > arr[i+1]) {
                resLow = arr[i+1]
            }
        }
    }
    result.push(resHigh)
    result.push(resLow)
    let newResult = result.join(' ')
    return newResult */
    // Split the string into an array of numbers
    let numbers = str.split(' ').map(x => { return +x; });
    console.log(numbers);
    // Find the highest and lowest numbers
    let maxNumber = Math.max(...numbers);
    let minNumber = Math.min(...numbers);
    // Return the result as a string
    return maxNumber.toString() + ' ' + minNumber.toString();
}
console.log(highAndLow("5167 3058 5242 3707 3308 3575 4985 2940 3382 5645 4848 4490 4135 5908 2988 2816 4207 4118 4360 3584 3078"));
let testARR = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Math.max(...testARR));
