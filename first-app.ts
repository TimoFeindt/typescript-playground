let userName: string;

userName = '34';

//username = 34

let ussr: {
	name: string;
	age: number;
	isAdmin: boolean;
	userId: string | number;
};

user = {
	name: 'timo',
	age: 31,
	isAdmin: true,
	userId: 'abc', // 123
};

// user = {}

let hobbies: string[]; // Array<string>

hobbies = ['gaming', 'chilling', 'coding'];

//hobbies = [1,2,3]

// typically you ould not set the return value of functions
function add(a: number, b: number): void {
	const result = a + b;
	console.log(result);
}

function returnResult(a: number, b: number): number {
	const result = a + b;
	return result;
}

function calculate(a: number, b: number, calcFn: (a: number, b: number) => number) {
	calcFn(a, b);
}

calculate(2, 5, returnResult);
