fetch("https://api.github.com/users/tiffaniwatson/events/public", {headers: {'Authorization': `token ${MyPromisesApiKey}`}})
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        for (let event of data) {
            if (event.type === "PushEvent") {
                console.log(event.created_at); // Here's what I expected for the exercise.
                return event.payload.commits[0].url;
            }
        }
    })
    .then(url => fetch(url, {headers: {'Authorization': `token ${GH_KEY}`}}))
    .then(resp => resp.json())
    .then(data => console.log(new Date (data.commit.author.date))); // This is the actual date of the last commit.

const wait = ((milliseconds) => {
    return new Promise((resolve, reject) =>  {
        setTimeout( () => {
            resolve(`This will show up in ${milliseconds/1000} second(s).`);
        }, milliseconds);
    });
});

wait(3000).then(msg => console.log(msg));
wait(6000).then(msg => console.log(msg));