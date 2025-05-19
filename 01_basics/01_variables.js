const accountId=144553 //can not be change
let accountEmail = "mehak00@gmail.com" // can be change
var accountPass = "12345"
accountCity = "jaipur"
let accountState;
// accountId = 2 not allowed
accountEmail = "kmnhyufrtf@gmail.com"
accountPass = "98765"
accountCity = "bilsi"
console.log(accountId);

/*
Prefer not to use var 
Because of issue of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPass,accountCity, accountState])
