"use strict";

/*const { findRootConfig } = require("@babel/core/lib/config/files");

//intro
/*console.log("Java is simple, fan and secured");
console.log("Hello world");
console.log(10 - 5);

//BASICS

console.log("my name is chebby");
let js = "coder";
console.log(js);
let firstName = "Faith";
let secondName = "chebby";
console.log(firstName + " " + secondName);

//Data types
let javascriptisSimple = true;
console.log(javascriptisSimple);
console.log(typeof true);
console.log(typeof javascriptisSimple);
console.log(typeof 23);
console.log(typeof "chebby");
console.log(typeof null); //displays object which is an error

// let is used to declare variable that can change anytime

let marks = 80;
marks = 98;
console.log(marks);

//const is used to declare a variable that cannot change in the program
const age = 20;
console.log(age);

//var
var checkbox = "red";
console.log(checkbox);

//basic operators
// Assignment operator  =
//Arithmetic operator +,-
let j = 20 + 30 - 10;
console.log(j);

const jobMarks = 80 + 30;
const chebbyMarks = 65 + 89;
// You can print two values at the same time
console.log(jobMarks, chebbyMarks);
// assignments operators
let t = 3 + 7;
t += 20;
t--;
t++;
t++;
//comparison
console.log(t);
console.log(jobMarks > chebbyMarks); //>,<,>=,<=

//descision marking
const yearsOld = 18;
const isyearsOld = age >= 19;
if (isyearsOld) {
  console.log("you can vote");
}
//challenge 1

const markHeight = 1.69;
const markWeight = 78;

const johnsWeight = 78;
const johnsHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnsBMI = johnsWeight / johnsHeight ** 2;

console.log(markBMI);

//functions
function chair() {
  console.log("The chair is awsome");
}
//calling /invokoing /running function
chair();
chair();
function TeaProcessor(coffee, tealeaves) {
  console.log(coffee, tealeaves);
  const tea = `tea with ${coffee} coffee and ${tealeaves} tealeaves.`;
  return tea;
}
const coffeeTea = TeaProcessor(3, 0);
console.log(coffeeTea);

const coffeeTealeavesTea = TeaProcessor(6, 4);
console.log(coffeeTealeavesTea);

/*function calcAge(birthYear) {
  const age = 2030 - birthYear;
  return age;
}
// function declaration
function calcAge(birthYear) {
  return 2030 - birthYear;
}
const age1 = calcAge(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2030 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

//Arrow function
const calcAge3 = (birthyear) => 2030 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

// arrays
const friends = ["Faith", "Alvoo", "Stano"];
console.log(friends);

//addition to array to the end of the array
const bikes = ["Desertx", "Diavel", "Monster"];
bikes.push("supersport");
console.log(bikes);
//addition to array to the begining of the array
bikes.unshift("Multistrada");
console.log(bikes);
//Remove elements
bikes.pop(); //last
console.log(bikes);

bikes.shift(); //first
console.log(bikes);
console.log(bikes.indexOf("Diavel"));

//objects
const faith = {
  firstName: "Faith",
  lastName: "Chebet",
  age: 2076 - 2001,
  job: "Data science ",
};
console.log(faith);
console.log(faith.job);
console.log(faith["job"]);

const nameKey = "Name";
console.log(faith["first" + nameKey]);
const interestedIn = prompt(
  "What do you want to know about faith? choose btwn firstName,job,age,lastName"
);
console.log(faith[interestedIn]);

if (faith[interestedIn]) {
  console.log(faith[interestedIn]);
} else {
  console.log("Wrong request! choose btwn firstName,job,age,lastName");
}
faith.location = "Kenya";
faith["ig"] = "miss_ducati";
console.log(faith);

const years2 = [1987, 1960, 1987];
const ages = [];

for (let i = 0; i < years2.length; i++) {
  ages.push(2037 - years2[i]);
}
console.log(ages);
//looping array backwards

const faiths = {
  firstName: "Faith",
  lastName: "Chebet",
  age: 2076 - 2001,
  job: "Data science ",
};
for (let i = faiths.length; i >= 0; i--) {
  console.log(i, faiths[i]);
}
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/
// let
/*let ages52 = 20;
if (true) {
  ages52 = 30;
  console.log(ages52);
}
console.log(ages52);

//function
function ages52() {
  ages52 = 20;
}*/
//array
const array = [1234];
console.log(array);
array.push(4);
console.log(array);
//arrow function
var fn = (a) => a + 5;
console.log(fn(3 + 9));

var btn = document.querySelector("button");
function fs() {
  console.log(this);
}

var fs2 = () => console.log(this);
fs2();

// comparison
function compare(num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 == num2;
}
console.log(compare(10, 20));

//objects
let name = "fay chebby";
let age = 20;

let obj = {
  name,
  age,
};
console.log(obj);

//rest operator
// if argument is  not known
/*function sum(...array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}*/

console.log(sum(20, 80, 70));
function sum(array) {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum(20, 80, 70));

//spread operator
var numbers = [1, 2, 3, 4];
console.log(...numbers);
console.log(Math.max(...numbers));

var objs = {
  name: "fay",
  age: 29,
  gender: "female",
};

var objs1 = {
  name: "rex",
  age: 34,
  hobby: ["hockey"],
};
console.log(objs);

//foor loop objects
let numbs = [1, 2, 3, 4];
for (let number of numbs) {
  console.log(number);
}
let obje = {
  name: "rete",
  age: 23,
};
/*let { name, age } = obje;
console.log(name, age);*/
for (let prop in obj) {
  console.log(obje[prop]);
}
//destructuring objects

let names = "rate";
let weight = 50;
var text = `Hello my name is ${names} and weight is ${weight}`;
console.log(text);
//destucturing array
let numbe = [10, 20];
let [a, b] = numbe;
console.log(a);
console.log(b);
//classes
class person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello world this is ${this.name}`);
  }
}
class Leela extends person {
  constructor(age) {
    super("leela");
    this.age = age;
  }
}
let Leela = new Leela(27);
Leela.hello();
