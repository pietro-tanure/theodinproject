let user = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

alert(user2.noSuchProperty === undefined ); // true means "no such property"

let user3 = {     // an object
    name: ["Bob", "Smith"],  // by key "name" store value "John"
    age: 30,        // by key "age" store value 30
    "likes birds": true,  // multiword property name must be quoted
    for: 1, //all of these are ok
    let: 2,
    return: 3,
    bio: function () { //declare method
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
};
user3.name; //get property
user3.age;
user3["likes birds"]
alert("age" in user3 ); // true, user.age exists
user3.bio(); //call method

let key = "name";
alert( user.key ) // undefined, this doesnt work

user3.isAdmin = true; //set property
user3["likes birds"] = true;

delete user3.isAdmin; //delete property
delete user3["likes birds"];

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};


function makeUser(name, age) {
    return {
        name: name,
        age: age};}

function makeUser(name, age) {
    return {
        name, // same as name: name
        age};}

let user4 = makeUser("John", 30);
alert(user.name); // John

alert( obj.for + obj.let + obj.return );  // 6


let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
//LOOPS
for (let code in codes) {
    alert(code); // 1, 41, 44, 49 IT IS ORDERED
}


// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property