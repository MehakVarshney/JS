const name = "mehak "
const age = 18

//console.log(name + age+ " Value");

console.log(`hello my name is ${name}and my age is ${age}`);

const gameName = String("Ludo-King-game")
console.log(gameName[0]); // L
console.log(gameName.__proto__); //{} object

console.log(gameName.length); //9
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //K
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0,4) //Ludo
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "         mehak          "
console.log(newString1);
console.log(newString1.trim());

const url = "https://mehak.com/mehak%20varshney"
console.log(url.replace('%20','-'));

console.log(url.includes('mehak'));

console.log(gameName.split('-'));







