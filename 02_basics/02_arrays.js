const My_name = ["mehak","aashi"]
const name2 = ["hello"]

// const combine = My_name.concat(name2)
// console.log(combine);

const combined = [...My_name,...name2]
console.log(combined);

const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]]

const real  = another_array.flat(Infinity)
console.log(real);

console.log(Array.from("MEHAK")); // convert it to array

console.log(Array.from({name:"Mehak"})); // return empty array
