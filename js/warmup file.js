
// Write a function that returns the number 7.
//4/27/23
// function returnSeven(){
//     return 7;
// }
//
// console.log(returnSeven());


// 4/1/23
// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.
//
//     function findFactors() {
//
// }
//
// findFactors(6); // returns [1,2,3,6];
// findFactors(16); // returns [1,2,4,8,16];
// findFactors(0); // returns [];
// findFactors(true); // returns false;
// findFactors("13"); // returns false;
// findFactors([54,72,144]); // returns false;
// findFactors({value: 64}); // returns false;
// findFactors(); // returns false;



function findFactors(num) {
    if (typeof num !== "number") {
        return false;
    }

    const factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

//May 2 warm up file.
// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

// function countEs() {
//
// }
//
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;



function countEs(str) {
    // Check if the argument is a string
    if (typeof str !== 'string') {
        return false;
    }

    // Convert the string to lowercase to make the search case-insensitive
    const lowercaseStr = str.toLowerCase();

    // Use a regular expression to match all occurrences of the letter 'e'
    const count = (lowercaseStr.match(/e/g) || []).length;

    return count;
}
