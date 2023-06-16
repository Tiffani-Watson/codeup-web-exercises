
// #2: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLanguages = users.filter(function(user){
    return user.languages.length >= 3;
})

console.log(threeLanguages);
//# 3: Use .map to create an array of strings where each element is a user's email address

const emailAdd = users.map(function(user){
    return user.email;
})

console.log(emailAdd);

