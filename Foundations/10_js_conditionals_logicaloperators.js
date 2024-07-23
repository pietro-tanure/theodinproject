// if else
if (condition1) {
} else if (condition2) {
} else {
}

// swithc
let a = 2 + 2;
switch (a) {
  case 3: //always strict comparison, so type of var matters
    alert('Too small');
    break;
  case 4:
  case 5: //same code for case 4 and 5
    alert('Too big');
    break;
  default:
    alert("I don't know such values");
}

// ternary
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";

// || OR
let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
} else if (hour >= 12 && isWeekend) { }

// first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder

// short-circuit evalution
true || alert("not printed");
false || alert("printed"); //printed

// & AND
// finds the first falsy value
alert(0 && "no matter what"); // 0
alert(1 && 5); // 5 returns last item

// ! NOT
alert(!true); // false
alert(!0); // true

//double NOT !! is sometimes used for converting a value to boolean type:
alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false

//Examples: 
alert(alert(1) || 2 || alert(3)); // shows 1 then 2
alert(alert(1) && alert(2)); // shows 1 then undefined
alert(null || 2 && 3 || 4); //it executes && first, which gives 3, so alert output is 3
if (-1 || 0) alert('first'); //first
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third'); //third