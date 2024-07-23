// "" and '' are same

// ` backtick: allows embedding
let name = "Pietro";
let greeting = `Hello, ${name}`
console.log(greeting); // "Hello, Pietro"
name = "Bruna";
console.log(greeting); // "Hello, Pietro"
greeting = `Hello, ${name}`
console.log(greeting); // "Hello, Bruna"

// concatenation:
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
console.log(one + two); // "Hello, how are you?"

// expressions in strings
const song = "Imagine";
const score = 9;
const highestScore = 10;
const number = 13
const output = `I've listened to the song '${song}' ` + number + ` times. I gave it a score of ${(score / highestScore) * 100
  }%.`;
console.log(output); // "I like the song Imagine. I gave it a score of 90%."

// index string
console.log(output.charAt(1) + output[2]);
console.log(output.at(-2));

// substring
console.log(output.slice(7)); //7th char onwards
console.log(output.slice(3, 10)); //between 3 and 10
console.log(output.slice(-10)); //counts from -10 onwards
let part = str.substr(7, 6);  //7th to 13th char

//lower and uppercase
let text2 = output.toUpperCase();
let text3 = output.toLowerCase();

//concat 
let text4 = "Hello";
let text5 = "World";
let text6 = "Hello" + " " + "World!";
text6 = text4.concat(" ", text5);

//trim
let text7 = "      Hello World!      ";
let text8 = text7.trim();  //remove spaces from left and right

let text9 = "     Hello World!     ";
let text10 = text9.trimStart(); //remove spaces from left of string

let text11 = "     Hello World!     ";
let text12 = text11.trimEnd(); // remove spaces from end of string

//padding
let number2 = 5;
let text = number2.toString();
let padded = text.padStart(4, "0"); //0005
let padded2 = text.padStart(x, "0"); //xxx5
let padded3 = text.padEnd(x, "0"); //5xxx

//repeat
let result = padded2.repeat(2); //xxx5xxx5

//replace
let text13 = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); //replaces only first match
let newText2 = text.replace(/MICROSOFT/i, "W3Schools"); //for case insensitive
let newText3 = text.replace(/Microsoft/g, "W3Schools"); //replace all matches

//string to array
let text15 = "a,b,c,d,e,f";
const myArray = text15.split(",");
document.getElementById("demo").innerHTML = myArray[0];
const myArray2 = text15.split(""); //array of single characters
