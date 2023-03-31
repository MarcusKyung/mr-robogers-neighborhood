//Business Logic
function inputToArray(userInput){
  let inputArray = [];
  for (let index = 0; index <= userInput; index += 1) {
    inputArray.push(index); 
  }; 
  return inputArray;
};

function translate(inputArray){
  const contains1 = " Beep!"
  const contains2 = " Boop!"
  const contains3 = " Won't you be my neighbor, ";
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i].toString().includes("3")) {
      inputArray[i] = contains3;

    } else if (inputArray[i].toString().includes("2")) {
      inputArray[i] = contains2;

    } else if (inputArray[i].toString().includes("1")) {
      inputArray[i] = contains1;

    } else {
      inputArray[i + ""];
    }; return inputArray;
  }; 
}


//UI Logic
function userInputFunction(event) {
  event.preventDefault();
  const userInput = document.getElementById("numberInput").value;
  // const userName = document.getElementById("nameInput").value;
  const inputArray = inputToArray(userInput);
  const convertedValue = translate(inputArray);
  document.getElementById("userInput").innerText = "User Inputted Number: " + userInput;
  document.getElementById("userInputCount").innerText = "User Input Number Translated: " + inputArray;
  console.log(convertedValue);
}

window.addEventListener("load", function() {
  document.querySelector("form#rN-Form-Input").addEventListener("submit", userInputFunction);
});
