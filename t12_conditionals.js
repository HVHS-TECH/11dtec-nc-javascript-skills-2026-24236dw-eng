/****************************
data types
****************************/

console.log("Running t12_conditionals.js")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<h2>added by javascrript</h2>";

//variables


/****************************
main code
****************************/
function start(){
const NAME_FIELD = document.getElementById("nameField");
 let Username = NAME_FIELD.value;
const AGE_FIELD = document.getElementById("ageField");
 let Userage = Number(AGE_FIELD.value);
 const MONEY_FIELD = document.getElementById("moneyField");
let UserpocketMoney = Number(MONEY_FIELD.value);
let name = "Diwakar";
let pocketMoney = 2;
let age = 16;
let year = 2026;
var yearBorn = year-Userage;
var tenYears = Userage+10;
var halfMoney = UserpocketMoney/2;
var plusThree = UserpocketMoney/2+3;
OUTPUT.innerHTML += "<p>Hi "+ Username;
OUTPUT.innerHTML += "<p>as of " + year + " you are " + Userage + " years old";
OUTPUT.innerHTML += "<p>you were born in " + yearBorn;
OUTPUT.innerHTML += "<p>In 10 years, you will be " + tenYears;
OUTPUT.innerHTML += "<p>you have " + UserpocketMoney + " dollars.";
OUTPUT.innerHTML += "<p>you spend half of your money, now you have " + halfMoney + " dollars";
OUTPUT.innerHTML += "<p>then you get $3, you now have " + plusThree + " dollars" ;
welcome()
displayProduct("<p>chocolate: ", "$4.00");
displayProduct("<p>chips: ", "$3.00");
displayProduct("<p>drink: ", "$2.50");
}

if (userMoney < chocolateCost) {
OUTPUT.innerHTML += "<p>A chocolate bar costs $4<br> Sorry you can not afford a chcocolate bar</p>";
} else (userMoney> chocolateCost) 
OUTPUT.innerHTML += "<p>>A chocolate bar costs $4<br>You can afford a chocolate bar.</p>";

    
/****************************
functions
****************************/
function welcome(){
    OUTPUT.innerHTML += "<p>welcome to the shop:";
}

function displayProduct(_name, _price){
    OUTPUT.innerHTML += _name + _price
}




//******************************
// t12_conditionals.js start
//******************************

// DATA TYPES
//******************************

console.log("Running t12_conditionals.js");

const OUTPUT = document.getElementById("spaceForJavascriptOutput");
OUTPUT.innerHTML += "<h2>added by javascript</h2>";


// VARIABLES
//******************************

// (All variables will be created inside start() so they use the user's input)


// MAIN CODE
//******************************

function start() {

    // INPUTS
    //******************************
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");

    let userName = NAME_FIELD.value;
    let userAge = Number(AGE_FIELD.value);
    let userMoney = Number(MONEY_FIELD.value);

    // CALCULATIONS
    //******************************
    let year = 2025;
    let yearBorn = year - userAge;
    let tenYears = userAge + 10;
    let halfMoney = userMoney / 2;
    let plusThree = userMoney + 3;

    // OUTPUT
    //******************************
    OUTPUT.innerHTML += `<p>Hi ${userName}</p>`;
    OUTPUT.innerHTML += `<p>As of ${year} you are ${userAge} years old</p>`;
    OUTPUT.innerHTML += `<p>You were born in ${yearBorn}</p>`;
    OUTPUT.innerHTML += `<p>In 10 years, you will be ${tenYears}</p>`;
    OUTPUT.innerHTML += `<p>You have $${userMoney}</p>`;
    OUTPUT.innerHTML += `<p>Half your money is $${halfMoney}</p>`;
    OUTPUT.innerHTML += `<p>After getting $3, you have $${plusThree}</p>`;

    // CONDITIONALS
    //******************************
    const chocolateCost = 4;

    if (userMoney < chocolateCost) {
        OUTPUT.innerHTML += `<p>A chocolate bar costs $4<br>Sorry, you CAN'T afford a chocolate bar</p>`;
    } else {
        OUTPUT.innerHTML += `<p>A chocolate bar costs $4<br>You CAN afford a chocolate bar</p>`;
    }

    // PRODUCTS
    //******************************
    displayProduct("Chocolate: ", "$4.00");
    displayProduct("Chips: ", "$3.50");
    displayProduct("Drink: ", "$2.50");
}


// FUNCTIONS
//******************************

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += `<p>${_name}${_price}</p>`;
}