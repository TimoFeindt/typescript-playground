let userInput: unknown; 
let userName: string;

userInput = 5;
userInput = 'Max';
if( typeof userInput === 'string') {
    userName = userInput
};
// With this if statement we check if the userinput is a string. "Unknown" is better than "Any" as type. if there is no clear way on what the value will contain use a union type "string | number"


function generateError( message: string, code: number): never { // this fucntion never returns a error
    throw {
        message: message,
        errorCode: code,
    };
}

//generateError('an Error occured', 500);

const result = generateError('new Error', 333);
console.log(result) // will never show "undefined"