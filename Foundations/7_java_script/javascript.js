// declare variable
let message, 
    hello,
    $ = 1,
    _ = 2,
    age = 25;

hello = 'Hello'; //store string in variable
message = 'World';

alert(hello)
alert(message) // show in popup page in browser
alert('10' + $ + _) //add string and number
alert('10'/ Infinity) //can do calc with infinity

// declare constant
const myBirthday = '16.11.1997', //unchanging
    COLOR_RED = "#F00";

//operators
let a = 5;
a--;
let z = a**2;
let z2 = Math.pow(a,2)
alert(z2)

const MAX = 57;
let actual = MAX - 13;
let percentual = actual/MAX;

let x = 500;
let y = new Number(500);
alert(x == y) //true
alert(x === y) //false
alert(+(x==y)) //1  unary operator converts to number