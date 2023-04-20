"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     if(color === "blue"){
//         return "blue is the color of the sky";
//     } else if(color === "red"){
//         return "Strawberries are red";
//     }else{
//         return "I don't know anything about"+ color;
//     }
// }
//
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("orange"));


// function analyzeColor(colorName) {
//     if (colorName === 'blue') {
//         return ('Blue is the color of the sky.');
//     }
//     else if (colorName=== 'yellow')
//     {
//        return ('lemons are yellow.');
//
//     }
//     else if (colorName=== 'red')
//     {
//         return ( 'Awesome! My favorite color is red.');
//     }
//     else if (colorName=== 'orange')
//     {
//         return ( 'Oranges are orange.');
//     }
//     else if (colorName=== 'green')
//     {
//         return ( 'the grass is green.');
//     }
//     else {
//         return ('I don\'t know that color.');
//     }
// }
//
// console.log(analyzeColor('red'));
// console.log(analyzeColor('green'));
// console.log(analyzeColor('cyan'));
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('orange'));






// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];



/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(color{
    switch(color){
        case'blue':
            return"Blue ish the color of the sky";
        case'red':
            return " Strawberries are red";
        default:
            return"I don't know anything about" + color;
    }
}
console.log(analyzeColor('red'));
console.log(analyzeColor('green'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('orange'));
// function analyzeColor(colorName) :string {
//     switch (colorName){
//         case 'red':
//             return "Red, like roses";
//         case 'orange':
//             return "Oranges are orange";
//         case 'yellow':
//             return "Lemons are yellow";
//         case 'green':
//             return " The grass is green.";
//         case 'blue':
//             return "The sky is blue.";
//         default:
//             return 'I have no idea what the color is.';
//     }
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userInput = prompt("Please enter a color");
//alert(analyzeColor(userInput));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function caculcateTotal(luckyNum, total) {
    if (luckyNum === 0) {
        return total;
    } else if (luckyNum === 1) {
        return total - (total * .10);
    } else if (luckyNum === 2) {
        return total - (total * .25);

    } else if (luckyNum === 3) {

        return total - (total * .35);

    } else if (luckyNum === 5) {
        return total - (total * .50);

    } else if (luckyNum === 5) {
        return 0;
    } else {
        return "Please enter a valid input";
    }
}
//calculateTotal(0, 100) // returns 100
// calculateTotal(4, 100) // returns 50
// calculateTotal(5, 100) // returns 0
// function calculateTotal(luckyNumber, totalAmount) {
//     switch (luckyNumber){
//         case 1:
//             return totalAmount - totalAmount * 0.1;
//         case 2:
//             return totalAmount - totalAmount * 0.25;
//         case 3:
//             return totalAmount - totalAmount * 0.35;
//         case 4:
//             return totalAmount - totalAmount * 0.50;
//         case 5:
//             return 0;
//         default:
//             return totalAmount;
//     }
// }
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
let luckyNumber :number =Math.floor(m=Math.random() * 6);

let totalBill = prompt("Please enter a total amount of your bill");

alert(calculateTotal(luckyNumber, totalBill));
alert("Your lucky number was" + luckyNumber + ". The price before discount was $" + totalBill +". Your total amount after the discount is $" + calculateTotal(luckyNumber, totalBill));
// let ogBill :string = prompt('What is the total bill amount due
// ?');
// alert('Your lucky number is ' + luckyNumber + '!');
// alert('Your total bill is' + ogBill + '!');
// alert('After the discount, your price is ' + calculateTotal(luckyNumber,ogBill) + '!');

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function numberInfo() {

    if (confirm("would you like to enter a number?")) {
        let userInput = prompt("Enter a number");

        if (!isNaN(userInput)) {


            if (userInput % 2 === 0) {
                alert("The number" + userInput + "is even");
            } else {
                alert("The number" + userInput + " is odd");
            }
            alert("The number plus 100 = " + (parseInt(userInput) + 100));

            if (userInput >= 0) {
                alert("The number" + userInput + "IsPositive");
            } else {
                alert("The number" + userInput + "IsNegative");
            }
        }else{
        alert("You entered something that is not a number, please try again.");
        }
    }
}
        numberInfo();



// let enterNumber = confirm('Would you like to enter a number?');
// if (enterNumber) {
//     let myNumber = parseFloat(prompt('Please enter your number here.'));
// if(!isNaN(myNumber)) {
//     if (myNumber % 2 === 0) {
//         alert('Your number is an even number.');
//     } else {
//         alert('Your number is a odd number.');
//     }
//     alert('Your Number + 100 is ' + (myNumber + 100) + '!');
//     if (myNumber >= 0) {
//         alert('Your number is positive!')
//     }
// }else {
//     alert('incorrect input data type.')
// }
// }