/* var number = 0;
var firstName = "Marcia";

var boolean = true;
var object = {
  name: firstName,
  lastName: "Cole",
  age: 18,
  clickMe: () => {},
};
var array = ["Bread", "eggs"];

var firstName = undefined;
var nullSample = null;

let age;

age = 18;

age = 20;
console.log(age, "AGE");

const list = ["value"];

var firstName = prompt("Enter your name");
document.querySelector(".header").innerHTML = firstName;

THIS IS FOR THE AGE FORM
*/
//
// const age = prompt("Please enter your age");
// document.getElementsByClassName("age")[0].innerHTML = age;

var array = ["Bread", "eggs"];
function toggleHandler() {
  const toggleElement = document.getElementById("contact");
  if (toggleElement.style.width === "300px") {
    toggleElement.style.width = "200px";
    return;
  }
  toggleElement.style.width = "300px";
}

function calculatorHandler(key) {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("smallText").innerHTML = "Please type in a number";
    return;
  }
  if (key === "multiply") {
    document.getElementById("result").innerHTML = firstNumber * secondNumber;
  } else {
    document.getElementById("result").innerHTML = firstNumber / secondNumber;
  }
}
let myMarketList = ["bread", "eggs", "rice", "beans"];

function arrayHandler() {
  document.getElementById("myUl").innerHTML = "";
  for (let i = 0; i < myMarketList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = myMarketList[i];
    document.getElementById("myUl").appendChild(li);
  }
}
function addMarketHandler() {
  const value = document.getElementById("marketItem").value;
  myMarketList.push(value);
  arrayHandler();
  document.getElementById("marketItem").value = "";
}

function removeMarketHandler() {
  myMarketList.pop();
  arrayHandler();
}
function shiftMarketHandler() {
  myMarketList.shift();
  arrayHandler();
}
function unshiftMarketHandler() {
  const value = document.getElementById("marketItem").value;
  myMarketList.unshift(value);
  arrayHandler();
  document.getElementById("marketItem").value = "";
}

const resp = async () => {
  const response = await fetch("https://reqres.in/api/unknown", {
    method: "GET",
  });
  const colorListResponse = await response.json();
  console.log(colorListResponse, "RESPs");
  const colorList = colorListResponse.data;
  for (let i = 0; i < colorList.length; i++) {
    let li = document.createElement("li");
    li.style.backgroundColor = colorList[i].color;
    li.innerHTML = colorList[i].name;
    document.getElementById("colors").appendChild(li);
  }
};

async function singleUserApi() {
  const response = await fetch('https://reqres.in/api/users/2')
  console.log(response, 'USER RESPONSE')
  const userResponse = await response.json()
  console.log(userResponse, 'USER DATA')
  const user = userResponse.data
  console.log(user, 'USER:::')
  document.getElementById('contact').innerHTML = user.email
}
// fetch("https://reqres.in/api/unknown")
//   .then((data) => {
//     data.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
