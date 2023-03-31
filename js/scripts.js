
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
  // console.log(inputArray);
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i].toString().includes("1")) {
    console.log(inputArray[i] + " has a 1");
    } else if (inputArray[i].toString().includes("2")) {
      console.log(inputArray[i] + " has a 2");
    } else if (inputArray[i].toString().includes("3")) {
      console.log(inputArray[i] + " has a 3");
    }; 
  };
}





//   const translatedArray = inputArray.map(function(element, index){
//     if (inputArray.includes(1)){
//       console.log(index);
//     }
//     });  
// };

//UI Logic
function userInputFunction(event) {
  event.preventDefault();
  const userInput = document.getElementById("numberInput").value;
  const inputArray = inputToArray(userInput);
  const convertedValue = translate(inputArray);
  document.getElementById("userInput").innerText = "User Inputted Number: " + userInput;
  document.getElementById("userInputCount").innerText = "User Inputted Number Counted Out: " + inputArray;
  // document.getElementById("userInputConverted").innerText = "User Inputted Number Converted: " + convertedValue;
}

window.addEventListener("load", function() {
  document.querySelector("form#rN-Form-Input").addEventListener("submit", userInputFunction);
});
