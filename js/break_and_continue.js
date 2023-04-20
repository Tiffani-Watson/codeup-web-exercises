//2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

while (true) {
    let number = prompt("Please enter an odd number between 1 and 50:");
    if (number === null) { // user clicked "cancel"
        break;
    }
    number = Number(number);
    if (number >= 1 && number <= 50 && number % 2 === 1) {
        // valid input, use the number here
        console.log("You entered a valid number:", number);
        break;
    } else {
        // invalid input, prompt again
        alert("Invalid input. Please enter an odd number between 1 and 50.");
    }
}


//5

let numberToSkip = prompt("Please enter an odd number between 1 and 50 to skip:");
numberToSkip = Number(numberToSkip);

if (numberToSkip >= 1 && numberToSkip <= 50 && numberToSkip % 2 === 1) {
    console.log("Number to skip is:", numberToSkip);

    for (let i = 1; i <= 50; i += 2) {
        if (i === numberToSkip) {
            console.log("Yikes! Skipping number:", numberToSkip);
            continue;
        }
        console.log("Here is an odd number:", i);
    }
} else {
    console.log("Invalid input. Please enter an odd number between 1 and 50 to skip.");
}

//While Loops



