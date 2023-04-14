

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

alert("Your total for rental movie is" + total);

let payGoogle = 400
let payAmazon = 380
let payFacebook= 350

let hoursFacebook= parseInt(prompt("How many hours did you work at Google?"));
console.log('The user entered: ' + hoursFacebook);
let hoursGoogle= parseInt(prompt("How many hours did you work at Google?"));
console.log(" You worked at Amazon for " + hoursGoogle);
let hoursAmazon= parseInt(prompt("How many hours did you work at Amazon?"));
console.log(" You worked at Facebook for " + hoursAmazon);

let pay = (payGoogle * hoursGoogle) + (payAmazon * hoursAmazon) + (payFacebook *hoursFacebook);
alert("Your the total amount in payment you will receive this week is " + pay);


