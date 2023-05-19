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
// Warm up for 5 May 2023

// let num = 2;
//
// do {
//   console.log(num);
//   num = num ** 2;
// } while (num < 1000000);

let num = 2;

do {
    console.log(num);
    num = num ** 2;
} while (num < 1000000);
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
// Warm up for 5 May 2023

// let num = 2;
//
// do {
//   console.log(num);
//   num = num ** 2;
// } while (num < 1000000);

let num = 2;

do {
    console.log(num);
    num = num ** 2;
} while (num < 1000000);



// Warm up for May 10

// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).

// function addEmUp() {}
//
// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605

function addEmUp(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


//May 11th Warmup

// Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and an isEvenLength property that contains a boolean for whether the string's length is even or not.

function explainString() {}

console.log(explainString("cheese")); // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
console.log(explainString("dog")); // returns {string: "dog", numberOfEs: 0, isEvenLength: false}

// Below is David's solution'

// function explainString(str){
//     return{
//         string: str,
//         numberOfEs: countEs(str),
//         isEvenLength: str.lenth % 2 === 0
//     }
// }

// My solution is below
function explainString(str) {       // The function takes a string str as input.
    const numberOfEs = (str.match(/e/gi) || []).length;
    const isEvenLength = str.length % 2 === 0;

    return { string: str, numberOfEs, isEvenLength };
}
// The numberOfEs variable is initialized with the number of times the letter "e" appears in the string, using a regular expression to match both upper and lowercase "e"s globally (/e/gi). If there are no matches, numberOfEs will be zero.
// The isEvenLength variable is set to true if the length of the string is even, and false otherwise.
// The function returns an object with the original string, the count of "e"s, and whether the length is even or not.



// May 12 Warm up

// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// function extractNames() {}
//
// console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];
//


function extractNames(arr) {
    return arr.map(obj => obj.name);
}

// another way is

function extractNames(hamsters) {
    return hamsters.map(hamster => hamster.name);
}


//Instructors answer:

function extractNames(arr){
    let bucket = [];
    arr.forEach(function(el) {
        bucket.push(el.name);
    })
    return bucket;
}

// 5-15 java warmup

// Write a function that takes in an array of objects and returns the object with the largest heightInMM property

const getTallest = function(){};

console.log(getTallest(hamsters)); // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}




function findTallestObject(objects) {
    if (!objects || objects.length === 0) {
        return null;
    }

    let tallestObject = objects[0];

    for (let i = 1; i < objects.length; i++) {
        if (objects[i].heightInMM > tallestObject.heightInMM) {
            tallestObject = objects[i];
        }
    }

    return tallestObject;
}
function findTallestObject(objects) {
    if (!objects || objects.length === 0) {
        return null;
    }

    let tallestObject = objects[0];

    for (let i = 1; i < objects.length; i++) {
        if (objects[i].heightInMM > tallestObject.heightInMM) {
            tallestObject = objects[i];
        }
    }

    return tallestObject;
}
function findTallestObject(objects) {
    if (!objects || objects.length === 0) {
        return null;
    }

    let tallestObject = objects[0];

    for (let i = 1; i < objects.length; i++) {
        if (objects[i].heightInMM > tallestObject.heightInMM) {
            tallestObject = objects[i];
        }
    }

    return tallestObject;
}


// May 16
// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.

function singleFurColor() {}

console.log(singleFurColor(hamsters)); // returns [{name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10"}];


function singleFurColor(hamsters) {
    return hamsters.filter(hamster => hamster.fur.length === 1);
}
console.log(singleFurColor(hamsters));



// May 17 Warm up

// Write a function that takes in an array of objects and returns the object with the most colors in the fur array.

// function mostColorful() {}
//
// console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};



function mostColorful(hamsters) {
    let maxColors = 0;
    let mostColorfulHamster = null;

    for (let i = 0; i < hamsters.length; i++) {
        const hamster = hamsters[i];
        const colorsCount = hamster.fur.length;

        if (colorsCount > maxColors) {
            maxColors = colorsCount;
            mostColorfulHamster = hamster;
        }
    }

    return mostColorfulHamster;
}

// function oneFurColor(arr) {
//     let newArr = [];
//     arr.forEach(fuunction(elem)
//    if(elem.fur.lenth === 1) {
// newArr.push(elem);
//     }
// )
// return newArr;
// }
// oneFurColor(hamsters);
// console.log(oneFurColor(hamsters));










// May 19th warm up

// Write a JavaScript function that takes in a number and returns an object with the following fields: number, which will contain the original number; evenOrOdd, which will contain a string ("even" or "odd") as to whether the value is even or odd; factors, an array of numbers that are evenly divisible within the number passed; and numberOfDigits, a number counting the number of digits with the number passed.

function describeNumber() {}

console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};






function multiplyElementsByThree(numbers) {
    return numbers.map(function(number) {
        return number * 3;
    });
}
