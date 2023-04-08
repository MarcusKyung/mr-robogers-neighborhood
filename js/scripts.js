//Business Logic
function inputToArray(userInput, reverse){
  let inputArray = [];
  if (reverse === true){
    for (let index = 0; index <= userInput; index += 1) {
      inputArray.push(index);
    } 
    return inputArray.reverse();
  } else {
    for (let index = 0; index <= userInput; index += 1) {
      inputArray.push(index); 
    } 
    return inputArray;
  }
  
}

function translate(inputArray, userName){
  const contains1 = " Beep!";
  const contains2 = " Boop!";
  const contains3 = " Won't you be my neighbor, " + userName;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].toString().includes("3")) {
      inputArray[i] = contains3;
    } else if (inputArray[i].toString().includes("2")) {
      inputArray[i] = contains2;
    } else if (inputArray[i].toString().includes("1")) {
      inputArray[i] = contains1;
    } else {
      inputArray[i] = inputArray[i].toString() + " ";
    } 
  } 
  return inputArray;
}

//UI Logic
function userInputFunction(event) {
  event.preventDefault();
  const userInput = document.getElementById("numberInput").value;
  const userName = document.getElementById("nameInput").value;
  const reverse = document.getElementById("reverse").checked;
  console.log(userName);
  const inputArray = inputToArray(userInput, reverse);
  const convertedValue = translate(inputArray, userName);
  document.getElementById("userInput").innerText = "User Inputted Number: " + userInput;
  document.getElementById("userInputCount").innerText = "User Input Number Translated: " + convertedValue;
}

window.addEventListener("load", function() {
  document.querySelector("form#rN-Form-Input").addEventListener("submit", userInputFunction);
});
