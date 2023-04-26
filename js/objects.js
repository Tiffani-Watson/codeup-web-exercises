(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

        let person = {
            firstName: 'Tiffani',
            lastName: 'Watson'
    };

        // var person = {
        //     name: "Tiffani Watson"
        // };
        // console.log(person.name);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    let people = {
        firstName: 'Tiffani',
        lastName: 'Watson',
        sayHello: function() {
            return `Hello from ${this.firstName} ${this.lastName}!`;
        }
    };

    console.log(person.sayHello()); // Output: "Hello from Tiffani Watson!"


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];


        // Define an array of objects representing each shopper
    const shoppers = [
            { name: 'Cameron', amount: 180 },
            { name: 'Ryan', amount: 250 },
            { name: 'George', amount: 320 }
        ];

// Define a function to calculate the discount and total amount
    function calculateAmount(name, amount) {
        let discount = 0;
        let total = amount;

        // Check if the purchase amount is greater than $200
        if (amount > 200) {
            discount = amount * 0.12;
            total = amount - discount;
        }

        // Display the results in the console
        console.log(`${name} needs to pay $${amount.toFixed(2)}.`);
        if (discount > 0) {
            console.log(`They received a discount of $${discount.toFixed(2)}.`);
        }
        console.log(`The total amount due is $${total.toFixed(2)}.\n`);
    }

// Call the calculateAmount function for each shopper in the shoppers array
    shoppers.forEach(function(shopper) {
        calculateAmount(shopper.name, shopper.amount);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


        // Define an array of objects representing books
    const books = [
            {
                title: "The Hitchhiker's Guide to the Galaxy",
                author: {
                    firstName: "Douglas",
                    lastName: "Adams"
                }
            },
            {
                title: "Pride and Prejudice",
                author: {
                    firstName: "Jane",
                    lastName: "Austen"
                }
            },
            {
                title: "To Kill a Mockingbird",
                author: {
                    firstName: "Harper",
                    lastName: "Lee"
                }
            },
            {
                title: "1984",
                author: {
                    firstName: "George",
                    lastName: "Orwell"
                }
            },
            {
                title: "The Great Gatsby",
                author: {
                    firstName: "F. Scott",
                    lastName: "Fitzgerald"
                }
            }
        ];

// Testing the array
    console.log(books[0].title); // "The Hitchhiker's Guide to the Galaxy"
    console.log(books[0].author.firstName); // "Douglas"
    console.log(books[0].author.lastName); // "Adams"



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
-------------------------------------------------------------
     // Define a function that creates a book object given a title and author name
     function createBook(title, authorName) {
  const names = authorName.split(' ');
  const author = {
    firstName: names[0],
    lastName: names[names.length - 1]
  };
  return {
    title: title,
    author: author
  };
}

     // Define an array of objects representing books using the createBook function
     const books = [
     createBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams"),
     createBook("Pride and Prejudice", "Jane Austen"),
     createBook("To Kill a Mockingbird", "Harper Lee"),
     createBook("1984", "George Orwell"),
     createBook("The Great Gatsby", "F. Scott Fitzgerald")
     ];

     // Test the array by logging the properties of the first book
     console.log(books[0].title); // "The Hitchhiker's Guide to the Galaxy"
     console.log(books[0].author.firstName); // "Douglas"
     console.log(books[0].author.lastName); // "Adams"



     -----------------------------------------------------

     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.


------------------------------------------------------------

        // Define a function that outputs the information for a given book object
        function showBookInfo(book) {
            console.log(`Title: ${book.title}`);
            console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        }

//Define an array of objects representing books using the createBook function//

     const books = [
        createBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams"),
        createBook("Pride and Prejudice", "Jane Austen"),
        createBook("To Kill a Mockingbird", "Harper Lee"),
        createBook("1984", "George Orwell"),
        createBook("The Great Gatsby", "F. Scott Fitzgerald")
    ];

// Iterate through the books array and display information for each book using showBookInfo
    books.forEach(function(book) {
        showBookInfo(book);
    });
---- */


})();