//
// // Write a function that returns the number 7.
// //4/27/23
// // function returnSeven(){
// //     return 7;
// // }
// //
// // console.log(returnSeven());
//
//
// // 4/1/23
// // Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.
// //
// //     function findFactors() {
// //
// // }
// //
// // findFactors(6); // returns [1,2,3,6];
// // findFactors(16); // returns [1,2,4,8,16];
// // findFactors(0); // returns [];
// // findFactors(true); // returns false;
// // findFactors("13"); // returns false;
// // findFactors([54,72,144]); // returns false;
// // findFactors({value: 64}); // returns false;
// // findFactors(); // returns false;
//
//
//
// function findFactors(num) {
//     if (typeof num !== "number") {
//         return false;
//     }
//
//     const factors = [];
//
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }
//
//     return factors;
// }
//
// //May 2 warm up file.
// // Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.
//
// // function countEs() {
// //
// // }
// //
// // console.log(countEs("Ease")); // returns 2;
// // console.log(countEs("teleconference")); // returns 5;
// // console.log(countEs("TOM")); // returns 0;
// // console.log(countEs(true)); // returns false;
// // console.log(countEs(['e', 'E'])); // returns false;
// // console.log(countEs()); // returns false;
//
//
//
// function countEs(str) {
//     // Check if the argument is a string
//     if (typeof str !== 'string') {
//         return false;
//     }
//
//     // Convert the string to lowercase to make the search case-insensitive
//     const lowercaseStr = str.toLowerCase();
//
//     // Use a regular expression to match all occurrences of the letter 'e'
//     const count = (lowercaseStr.match(/e/g) || []).length;
//
//     return count;
//
//
// //May 3
//
// // Write a function that takes in a string and returns true if the argument contains at least one instance of the letter 'e'. This should be case-insensitive. If the argument is not a string, or if the argument does not contain 'e' it should return false.
//
//
//
// // function containsLetterE(input) {
// //     if (typeof input !== 'string') {
// //         return false; // Input is not a string, return false
// //     }
// //     // Convert input to lowercase and check if it contains the letter 'e'
// //     return input.toLowerCase().indexOf('e') !== -1;
// }
//
//
// function containsE(str) {
//     if (countEs(str) === false) {
//         return false;
//     }else {
//         return countEs(str) >0;
//     }
// }


// Write a function named fizzBuzz that prints to the console the number 1-100.
// If the number is divisible by 3 print fizz instead of the number.
//     If the number is divisible by 5 print buzz. If the number is
// divisible le by both 3 and 5 print fizzBuzz.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}


