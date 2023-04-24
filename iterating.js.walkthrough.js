
    // (function(){
    //     "use strict";
    //
    //     /**
    //      * TODO:
    //      * Create an array of 4 people's names and store it in a variable called
    //      * 'names'.
    //      */
    //
    //     let names = ["Tom","Alex", "Valerie", "Monica"];// This arrays contains 4 elements.
    //     // console.log(names.length); //4
    //     // console.log(names[1])
    //
    //     for (let i = 0;i <= 3;i++){
    //         console.log(names[i])
    //     }
    //
    //
    //     names.forEach(function(name){
    //         console.log(name)
    //     })
    //
    //     /**
    //      * TODO:
    //      * Create a log statement that will log the number of elements in the names
    //      * array.
    //      */
    //
    //     let name = ["Tom","Alex", "Valerie", "Monica"];
    //     console.log(names.length);
    //
    //
    //     /**
    //      * TODO:
    //      * Create log statements that will print each of the names individually by
    //      * accessing each element's index.
    //      */
    //     console.log(names[0]);
    //     console.log(names[1]);
    //     console.log(names[2]);
    //     console.log(names[3]);

       // for (let i = 0;i <= 3;i++){
          //  console.log(names[i])

            /**
             * TODO:
             * Write some code that uses a for loop to log every item in the names
             * array.
             */

            for(let i = 0; <= names.length; i++)
    {
        console.log(names[i]);
    }
            // for (let i = 0;i <= 3;i++){
            //     console.log(names[i])
            // }


            /**
             * TODO:
             * Refactor your above code to use a `forEach` loop
             */

            names.forEach(function(name){
                console.log(name)
            })


            /**
             * TODO:
             * Create the following three functions, each will accept an array and
             * return an an element from it
             * - first: returns the first item in the array
             * - second: returns the second item in the array
             * - last: returns the last item in the array
             *
             * Example:
             *  > first([1, 2, 3, 4, 5]) // returns 1
             *  > second([1, 2, 3, 4, 5]) // returns 2
             *  > last([1, 2, 3, 4, 5]) // return 5
             */
function first(arr) {
                return arr[0];
            }
    function first(arr) {
        return arr[1];
    }
    function first(arr) {
        return arr[3];
    }


            // for (let i = 0;i <= 3;) {
            //     console.log(names[i])
            // }
            // for (let i = 1;i <= 3;) {
            //     console.log(names[i])
            // }
            // for (let i = 2;i <= 3;) {
            //     console.log(names[i])
            }
        }});