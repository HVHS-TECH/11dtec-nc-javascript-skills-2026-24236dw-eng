console.log("t10_ijput_from_HTML.js");

/****************************
 Main Code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML= "Hello world!<br>";
/****************************
 Functions
 
 ****************************/
function start() {
  console.log("Button pressed!");

  output.innerHTML = "<p>You pressed the button!</p>";
}
function getFormInput(){
const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;
OUTPUT.innerHTML ="<p>Your name is "+userName+"</p>";
}
function getFormInput(){
const MONEY_FIELD = document.getElementById("moneyField");
let userName = MONEY_FIELD.value;
OUTPUT.innerHTML ="<p>Your name is "+userName+"</p>";
}