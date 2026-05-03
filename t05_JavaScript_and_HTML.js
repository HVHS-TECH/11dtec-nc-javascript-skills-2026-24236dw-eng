/****************************
name of task: Math
****************************/
console.log("Running t05_javascriptandHTML.js");

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
const OUTPUT = document.getElementById("SpaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

/****************************
Main code 
****************************/
OUTPUT.innerHTML +=("Hi " + username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars")
OUTPUT.innerHTML("You were born in " + birthYear)
OUTPUT.innerHTML("In 10 years you will be " + oldAge + " years old")
OUTPUT.innerHTML("You have " + money + " dollars")
OUTPUT.innerHTML("You spend half your money, now you have " + halfmoney + " dollars")
OUTPUT.innerHTML("You get $3," +" now you have "+ (halfmoney + 3) + " dollars ")



/****************************
 Functions
****************************/