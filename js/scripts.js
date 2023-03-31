

function userInputFunction(event) {
  event.preventDefault();
  let userInput = document.getElementById("numberInput").value;
  
  let arrayResults = [];
  for (let index = 0; index <= userInput; index += 1) {
    arrayResults.push(index);  
  };
  // console.log(arrayResults); - correctly displays counting up by 1 from 0
}

window.addEventListener("load", function() {
  document.querySelector("form#rN-Form-Input").addEventListener("submit", userInputFunction);
});
