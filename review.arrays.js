
// 1. Create an array that contains three strings.

const myArray = ["Hello, can you hear me?", "There is such a difference between us", "Hello from the other side"];
// 2. Create an array that contains one string, one number and one boolean.

const mixedArray = ["songs and lyrics", 23, true];

// 3. Create an array hat contains three empty arrays.
const emptyArray = [
    [],
    [],
    []
];

// 4. Create an empty object.

const emptyObject = {

};

// 5. Create an object with three properties: id, email, password.

const user = {
    id: 345 + Math.floor(1000 + Math.random() * 9000),
    email: "name_surname@example.org",
    password: Math.random().toString(36).slice(-8),
};

// 6. Create an array that contains three objects. All objects should have a width and a height property.

const arrayOfObjects = [
    { width: 34, height: 572 },
    { width: 145, height: 123 },
    { width: 56, height: 98 },

];

// 7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.

const myObject = {
    title: " I'd Rather Go Blind",
    songwriters: [
        "Etta James", 
        "Ellington Jordan", 
        "Billy Foster"],
    single_info: { singer: "Etta James", year: 1967 }
     
};

// 8. Print the `type` of a variable that has an array value.

// typeof array will print object. If we ask if a variable is an array:
console.log(Array.isArray(myArray)); //it prints: true

// 9. Print the `type` of a variable that has an object value. 

console.log(typeof myObject); //object

// 10. Create an array with five random values. 

const arrayOfFive = [
    Math.floor(Math.random() * 101), 
    Math.floor(Math.random() * 101), 
    Math.floor(Math.random() * 101), 
    Math.floor(Math.random() * 101), 
    Math.floor(Math.random() * 101) 
]
console.log(arrayOfFive); //it prints , e.g. [ 46, 63, 27, 54, 91 ]

// 10.1. Add one value to the end of the array.

arrayOfFive.push(57);
console.log(arrayOfFive); //it prints: [ 46, 63, 27, 54, 91, 57 ]

// 10.2. Add one thing to the beginning of the array.

arrayOfFive.unshift("Random Cool Numbers: ");
console.log(arrayOfFive); 
//it prints [ 'Random Cool Numbers: ', 46, 63, 27, 54, 91, 57 ]


// 10.3. Take out one thing from the end of the array.

arrayOfFive.pop();
console.log(arrayOfFive); 
//it prints [ 'Random Cool Numbers: ', 46, 63, 27, 54, 91 ]


// 10.4. Print the length of the array.

console.log(arrayOfFive.length); //it prints 6

// 10.5. Take out one thing from the end of the array.

arrayOfFive.pop();
console.log(arrayOfFive); 
// it prints: [ 'Random Cool Numbers: ', 46, 63, 27, 54 ]

// 10.6. Take out one the 2nd thing from the array.

arrayOfFive.splice(2, 1);
console.log(arrayOfFive); 
// it prints [ 'Random Cool Numbers: ', 46, 27, 54 ]
