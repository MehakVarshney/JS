// Primitive Data Types
// 7 categories
/*strings,number, boolean, null, undefined, symbol, BigInt */

const score = 100
const scoreValue = 100.3

const loggedIn = false
const ourSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


// Reference (Non Premitive) Data Types
/*Array, objects, Functions */ //return type of all these is function but type of function is object function

const heroes = ["shaktiman","nagraj","doga"]
const obj={
    name:"mehak",
    age: 19,
}

const myfunction = function() {
    console.log("hello world");
}