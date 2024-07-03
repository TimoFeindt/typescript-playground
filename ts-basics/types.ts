
enum Right { ADMIN , READ_ONLY, AUTHOR = 8 }; // enums start with 0 like arrays. Bu with using an equal sign you can add a new starting value or a specific number to every value.

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple! When you know the exact length and the exact type of entries this is a good way. With this "tuple" set you need to declare every type within an object. Otherwise this would be bad practise! 
    right: number;
  } = {
    name: 'timo',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [5,'admin'],
    right: Right.AUTHOR,
}

// person.role.push('author'); // .push() does work on tuples although the array shouldhav a fixed length!


console.log(person.right)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()) // typescript detects, that hobby can only be a string. Therefore .toUpperCase() does work

}