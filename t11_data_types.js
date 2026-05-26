console.log("t11_ijput_from_HTML.js");
/****************************
 Variables
****************************/
let userAge = Number(AGE_FIELD.value);

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

  OUTPUT.innerHTML = "<p>You pressed the button!</p>";
}
function getFormInput(){
const AGE_FIELD_FIELD = document.getElementById("ageField");
let userName = AGE_FIELD.value;
OUTPUT.innerHTML ="<p>Your name is "+userName+"</p>";
}



