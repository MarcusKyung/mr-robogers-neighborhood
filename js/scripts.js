
//Business Logic
function inputToArray(userInput){
  let inputArray = [];
  for (let index = 0; index <= userInput; index += 1) {
    inputArray.push(index); 
  }; 
  return inputArray;
};

//UI Logic
function userInputFunction(event) {
  event.preventDefault();
  const userInput = document.getElementById("numberInput").value;
  const inputArray = inputToArray(userInput)
  document.getElementById("userInput").innerText = "User Inputted Number: " + userInput;
  document.getElementById("userInputCount").innerText = "User Inputted Number Counted Out: " + inputArray;
  // document.getElementById("userInputConverted").innerText = "User Inputted Number Converted: ";
}

window.addEventListener("load", function() {
  document.querySelector("form#rN-Form-Input").addEventListener("submit", userInputFunction);
});
