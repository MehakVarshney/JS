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



//*********************************************************** */
// Stack (Premitive), Heap(Non - Premitive)

// Stack mai data ki copy milti hai aur usme changes krte hai 
// Heap mai data ka reference milta hai to original mai change krte hai

let myName = "mehakVarshney"

let anotherName = myName
anotherName = "mehak"
console.log(myName);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    age : 22,
}
let userTwo = userOne
userTwo.email = "mehak@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

