"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello, " + name ;
}


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Tiffani");

console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let yourName = "Tiffani Watson";
console.log(sayHello(yourName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number) {
    return number === 2;
}

console.log(random);
console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(total,tipPercent){
    return total * tipPercent;
}

console.log(calculateTip(0.20, 20));
console.log(calculateTip(0.25, 25.50));
console.log(calculateTip(0.15, 33.42));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let input1 = prompt(" What is the bill total?");
let input2 = prompt("What is the tip percentage?");
alert("Your tip amount is" + calculateTip(input1, input2));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(originalPrice, discountPercent) {
   let discountAmount = (originalPrice*discountPercent);
   return (originalPrice - discountAmount);
}

console.log(applyDiscount(45.99, 0.12));


//practice for quiz

//Write a function named remainder that will accept two arguments and
// return the remainder of a division between the two values (the first
// divided by the second). If either argument is not a number, the
// function should return false .

function remainder(a, b) {
    // Check if either argument is not a number
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    // Calculate the remainder of a divided by b
    return a % b;
}
// Write a function named containsAce that takes in an argument and
// returns true if the argument passed is a string that contains the
// sequence of characters "ace" somewhere within the string. This
// check should be case insensitive. The function should return false
// if the argument is not a string, or if it doesn't contain "ace" ' +
// 'somewhere in the string.

function containsAce(str) {
    // Check if the argument is a string
    if (typeof str !== 'string') {
        return false;
    }

    // Check if the string contains the substring "ace" (case insensitive)
    return str.toLowerCase().includes('ace');
}

// Write a function named divisibleBy5 that accepts
// an argument returns true is the argument a number
// that is evenly divisible by 5. If the argument provided
// is either not a number, or is not evenly divisibile by
// 5, the function should return false .

function divisibleBy5(num) {
    // Check if the argument is a number and is evenly divisible by 5
    if (typeof num !== 'number' || num % 5 !== 0) {
        return false;
    }

    return true;
}


// Write a function named averageThreeNumbers that accepts three arguments,
//     and returns the average (mean) of the three arguments if all three
// arguments are numbers. If any/all of the three arguments are not a number,
//     or if there are fewer than three arguments, the function should return
// false .

function averageThreeNumbers(a, b, c) {
    // Check if there are exactly three arguments and if all of them are numbers
    if (arguments.length !== 3 || typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return false;
    }

    // Calculate the average of the three numbers
    return (a + b + c) / 3;
}
// Write a function named stringsAreSameLength that accepts two
// arguments and returns true if both arguments are strings of
// the same length. If either argument is not a string, has
// fewer than two arguments, or if the two strings are of different
// lengths, the function should return false .

function stringsAreSameLength(str1, str2) {
    // Check if there are exactly two string arguments and if they have the same length
    if (arguments.length !== 2 || typeof str1 !== 'string' || typeof str2 !== 'string' || str1.length !== str2.length) {
        return false;
    }

    return true;
}
