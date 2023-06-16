/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'Tiffani',
        email: 'tiffani.marie.watson@gmail.com',
        languages: ['javascript', 'html', 'css']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Tiffani';
const email = 'tiffani.marie.watson@gmail.com';
const languages = ['javascript', 'java', 'css', 'html', 'mysql'];

// TODO: rewrite the object literal using object property shorthand
users.forEach((user) => emails.push(user.email));
users.forEach((user) => names.push(user.name));

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];


// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
    return emails.push(user.email);
});
users.forEach(function(user) {
    return names.push(user.name);
});

// TODO: replace `var` with `let` in the following declaration
var developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    const {name, email, languages} = user;

    // TODO: rewrite the assignment below to use template strings
//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

    developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}.`);
});

// TODO: Use `let` for the following variable
// var list = '<ul>';
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

for (let developer of developers) {
    // TODOne: rewrite the assignment below to use template strings
    list += `<li>${developer}</li>`;
}
list += '</ul>';

    // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';

document.getElementsByTagName("body")[0].innerHTML += list;
