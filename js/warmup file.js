
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
