/****************************
name of task: Math
****************************/
console.log("Running T1-intro.js");

//Variables 
let username="Diwakar";
let year= 2026;
let age= 16;
let money= 10;
let birthYear;
let oldAge;
oldAge= age + 10;
birthYear= year - age;
halfmoney= money / 2

/****************************
Main code 
****************************/
console.log("Hi " + username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars")
console.log("You were born in " + birthYear)
console.log("In 10 years you will be " + oldAge + " years old")
console.log("You have " + money + " dollars")
console.log("You spend half your money, now you have " + halfmoney + " dollars")
console.log("You get $3," +" now you have "+ (halfmoney + 3) + " dollars ")



/****************************
 Functions
****************************/
const OUTPUT = document.getElementById("JavaScriptOutput");

OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";