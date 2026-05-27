console.log("t10_ijput_from_HTML.js");

/****************************
 Main Code
****************************/
let username="Diwakar";
let year= 2026;
let age= 16;
let money= 10;
let birthYear;
let oldAge;
oldAge= age + 10;
birthYear= year - age;
halfmoney= money / 2
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

OUTPUT.innerHTML += "<p> Hi " + username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars</p>";
OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + " years old</p>";
OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";
OUTPUT.innerHTML += "<p>You spend half your money, now you have " + halfmoney + " dollars</p>";
OUTPUT.innerHTML += "<p>You get $3," +" now you have "+ (halfmoney + 3) + " dollars</p>";


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
