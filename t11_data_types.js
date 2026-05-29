console.log("t11_ijput_from_HTML.js");

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
  const USERNAGE_FIELD = document.getElementById("UserAgeField");
  const POCKETMONEY_FIELD = document.getElementById("PocketMoneyField");


  let userName = USERAGE_FIELD.value;
  let userMoney = POCKETMONEY_FIELD.value;


  OUTPUT.innerHTML =
  "<p>Your name is " + userName + "</p>" +
  "<p>Your money is $" + userMoney + "</p>" +
  "<p>Your age is " + userAge + "</p>" +
  "<p>Your birth year is " + userBirthYear + "</p>";

}
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




