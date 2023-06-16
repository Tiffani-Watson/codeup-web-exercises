
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


//# 4: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYearsExp = users.reduce(function(totalYears,user){
    return totalYears + user.yearsOfExperience;
},0)

console.log(totalYearsExp);


//# 5: Use .reduce to get the longest email from the list of users.

const longestUserEmail = users.reduce(function(longestEmail,user){
    if(user.email.length >= longestEmail.length){
        longestEmail = user.email;
    }
    return longestEmail;
},"")

console.log(longestUserEmail);


