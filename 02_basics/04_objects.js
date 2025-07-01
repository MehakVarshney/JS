//const tinderUser = new Object() // singleton object

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email:'sammy@gmail.com',
    fullname:{
        firstName:"Sammy",
        lastName:"abc"
    }
}

//console.log(regularUser.fullname.lastName);

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}
//const obj3 = Object.assign({},obj1,obj2) // {} this is target ans remaing is source

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"h@email.com"
    },
    {
        id:2,
        email:"h@email.com"
    },
    {
        id:3,
        email:"h@email.com"
    },
    {
        id:4,
        email:"h@email.com"
    },
    {
        id:5,
        email:"h@email.com"
    },
]

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));