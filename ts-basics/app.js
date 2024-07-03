var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
;
// With this if statement we check if the userinput is a string. "Unknown" is better than "Any" as type. if there is no clear way on what the value will contain use a union type "string | number"
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code,
    };
}
//generateError('an Error occured', 500);
var result = generateError('new Error', 333);
console.log(result);
