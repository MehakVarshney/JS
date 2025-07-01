// singleton 

// object literals- in obj we have to use key value pair
const JsUser = {
    name:"Mehak",
    age: 19,
    location: "Mathura",
    email :"mehak@gmail.com",
    isLoggedIn:false
}
//console.log(JsUser.email);

JsUser.email = "mehak@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mehak@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello from js User");
}

JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


