"use strict";
(function() {
    //Declaring an array.
    let emptyArr = [];
    console.log(Array.isArray(emptyArr));
    let cheeses = ["Cheddar","String", "Wensleyday"];// This arrays contains 3 elements.
    let falsyValues= [0,"", false, undefined, null];// We can collect different data types using arrays.
    // ... However, this can lead to some unintended results with a looping/iterative structure
    console.log(cheeses[1])// this will print the second element in our cheese array.
    console.log(cheeses.indexOf("cheddar")); // This will return and print 0
    console.log(cheeses[0].indexOf("Brie")); //This returns -1
    console.log(cheeses.indexOf("White Cheddar")); //This returns and prints -1
    console.log(cheeses[cheeses.length-1]);
    console.log(cheeses.length)
    //Let's create a loop to print out all of our cheeses to the console!
    for (let i = 0; i < cheeses.length;i ++){
        console.log(cheeses[i]);
    }
    for (let i = cheeses.length -1; i>= 0; i--) {
        console.log(cheeses[i]);
    }
    //For Each version
    cheeses.forEach(function (cheese) {
        console.log(cheese);
    });
    cheeses.forEach(function (cheese , index, array) {
        console.log(`${index}: ${cheese}`);
    });
    cheeses.forEach(function (cheese , index, array) {
        console.log(`${index}: ${cheese}`);
    })
})();