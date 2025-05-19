// console.log(2 > 3);
// console.log(2 >= 3);
// console.log(2 != 3);
// console.log(2 < 3);
// console.log(2 == 3);
// console.log("2" > 1);//true
// console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

/* The reason is that an equality check == and comparisons > < >=  <= works differently
Comparison conert null to a number, treating it as 0
that's why null >= 0 is true
null > 0 is false
*/
console.log(undefined == 0);//False
console.log(undefined > 0);//False
console.log(undefined < 0);//False

// === strict check means also check data type

console.log("2" == 2); // true
console.log("2" === 2); // false

