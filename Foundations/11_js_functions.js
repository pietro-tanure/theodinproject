const myArray = ["I", "love", "chocolate", "frogs"];
const myString1 = myArray.join(" ");
console.log(myString1);


const myNumber = Math.random();


function draw() { //This function draws 100 random circles inside a <canvas> element.
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}


function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

// anonymous functions are used to be passed down as argument for other functions
(function () { //anonymous function: function with no name
  alert("hello");
});

(event) => {
  console.log(`You pressed "${event.key}".`);
} //anonymous function: function with no name

event => {
  console.log(`You pressed "${event.key}".`);
} //if there's only one parameter you can omit parenteses

(event) => console.log(`You pressed "${event.key}".`)

const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2); //doenst change originals
console.log(doubled); // [2, 4, 6]

let double = n => n * 2;
double(3)
// roughly the same as: let double = function(n) { return n * 2 }

let sayHi = () => alert("Hello!");
sayHi();


// functions as inputs to functions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert("You agreed.");
}
function showCancel() {
  alert("You canceled the execution.");
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


// Function Expression
// A Function Expression is created when the
// execution reaches it and is usable only from that moment.
sum(10, 5) //error
let sum = function (a, b) {
  return a + b;
};


let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed"),
  () => alert("You canceled")
);