console.log("t11_ijput_from_HTML.js");

/****************************
 Main Code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "Hello world!<br>";
/****************************
 Functions
 
 ****************************/
function welcome () {
OUTPUT.innerHTML += "<p>Welcome to my shop</p>"

}
welcome ();
function displayProduct(_name, _price) {
OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}
displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.50);

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



