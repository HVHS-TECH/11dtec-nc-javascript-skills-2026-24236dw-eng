console.log("t12_conditionals.js");

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
 Main Code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "Hello world!<br>";
/****************************
 Functions
 
 ****************************/
function start() {
  console.log("Button pressed!");

  OUTPUT.innerHTML = "<p>You pressed the button!</p>";
}
function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const MONEY_FIELD = document.getElementById("moneyField");
  const AGE_FIELD = document.getElementById("ageField");
  const BIRTHYEAR_FIELD = document.getElementById("BirthyearField");

  let userName = NAME_FIELD.value;
  let userMoney = MONEY_FIELD.value;
  let userAge = AGE_FIELD.value;
  let userBirthYear = BIRTHYEAR_FIELD.value;

  OUTPUT.innerHTML =
  "<p>Your name is " + userName + "</p>" +
  "<p>Your money is $" + userMoney + "</p>" +
  "<p>Your age is " + userAge + "</p>" +
  "<p>Your birth year is " + userBirthYear + "</p>";
}

function start() {
spaceForJavaScriptOutput.innerHTML
spaceForJavaScriptOutput.innerHTML
answer = currentYear - userAge
spaceForJavaScriptOutput.innerHTML
}







/****************************
Input from HTML
****************************/

console.log("Running t12_conditionals.js")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<h2>added by javascrript</h2>";

//variables
let name = "Diwakar";
let pocketMoney = 2;
let age = 16;
let year = 2026;
var yearBorn = year-age;
var tenYears = age+10;
var halfMoney = pocketMoney/2;
var plusThree = pocketMoney/2+3;
/****************************
main code
****************************/
function start(){
OUTPUT.innerHTML += "<p>Hi "+ name;
OUTPUT.innerHTML += "<p>as of " + year + " you are " + age + " years old";
OUTPUT.innerHTML += "<p>you were born in " + yearBorn;
OUTPUT.innerHTML += "<p>In 10 years, you will be " + tenYears;
OUTPUT.innerHTML += "<p>you have " + pocketMoney + " dollars.";
OUTPUT.innerHTML += "<p>you spend half of your money, now you have " + halfMoney + " dollars";
OUTPUT.innerHTML += "<p>then you get $3, you now have " + plusThree + " dollars" ;
welcome()
displayProduct("<p>chocolate: ", "$4.00");
displayProduct("<p>chips: ", "$3.00");
displayProduct("<p>drink: ", "$2.50");
}

/****************************
functions
****************************/

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";

}


function welcome(){
    OUTPUT.innerHTML += "<p>welcome to the shop:";
}

function displayProduct(_name, _price){
    OUTPUT.innerHTML += _name + _price
}
