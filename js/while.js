
//while
//Create a while loop that uses console.log() to create the output shown below.

let num = 2;

while (num <= 65536) {
    console.log(num);
    num *= 2;
}


// Do While Loop

// let conesLeft = Math.floor(Math.random() * 51) + 50;
// console.log(`Starting with ${conesLeft} cones.`);
//
// do {
//     let conesSold = Math.floor(Math.random() * 5) + 1;
//     if (conesLeft >= conesSold) {
//         conesLeft -= conesSold;
//         console.log(`${conesSold} cones sold. ${conesLeft} cones left.`);
//     } else {
//         console.log(`Cannot sell ${conesSold} cones, only ${conesLeft} left.`);
//     }
// } while (conesLeft > 0);
//
// console.log(`All cones sold!`);


// Generate a random number of cones to sell
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    // Generate a random number of cones to sell to the current customer
    var conesToSell = Math.floor(Math.random() * 5) + 1;

    // Check if there are enough cones to sell
    if (conesToSell <= allCones) {
        // Sell the cones
        console.log(conesToSell + " cones sold...");

        // Update the remaining number of cones
        allCones -= conesToSell;
    } else {
        // Inform the customer that there are not enough cones
        console.log("Cannot sell you " + conesToSell + " cones I only have " + allCones + "...");
    }
} while (allCones > 0);

// Inform the seller that all cones have been sold
console.log("Yay! I sold them all!");
