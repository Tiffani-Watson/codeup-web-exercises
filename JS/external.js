

console.log("Hello from external JavaScript")

alert("Welcome to my website!");

let userInput = prompt('What is your favorite color?');
console.log("Awesome! " + userInput + " is also my favorite color.");


let userInputLM= parseInt(prompt("How many days would you like to rent the movie "The little Mermaid"?));
console.log(" You are renting the Little Mermaid for " + userInputLM + " Days");
let userInputBB= parseInt(prompt("How many days would you like to rent the movie "Brother Bear"?));
console.log(" You are renting the Brother Bear for " + userInputLM + " Days");
let userInputHercules= parseInt(prompt("How many days would you like to rent the movie "Hercules"?));
console.log(" You are renting the Hercules for " + userInputLM + " Days");

let total = 3 *(userInputLM + userInputBB + userInputHercules);

Alert("Your total for rental movie is" + total);

