
//Business Logic
function inputToArray(userInput){
  let inputArray = [];
  for (let index = 0; index <= userInput; index += 1) {
    inputArray.push(index); 
  }; 
  return inputArray;
};

function translate(inputArray){
  // const contains1 = "Beep!"
  // const contains2 = "Boop!"
  // const contains3 = "Won't you be my neighbor?"
  inputArray.map(let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.includes("1"))
    console.log("contains1");
  };
};

//UI Logic
function userInputFunction(event) {
  event.preventDefault();
  const userInput = document.getElementById("numberInput").value;
  const inputArray = inputToArray(userInput);
  const convertedValue = translate(inputArray);
  document.getElementById("userInput").innerText = "User Inputted Number: " + userInput;
  document.getElementById("userInputCount").innerText = "User Inputted Number Counted Out: " + inputArray;
  document.getElementById("userInputConverted").innerText = "User Inputted Number Converted: " + convertedValue;
}

window.addEventListener("load", function() {
  document.querySelector("form#rN-Form-Input").addEventListener("submit", userInputFunction);
});
