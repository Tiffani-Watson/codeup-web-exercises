
//2. Create a function names showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(x){
    for(let i =1; i < 11; i++ )
    {
        console.log(`${x} * ${i} = ${x * i}`)
    }
}

showMultiplicationTable( 7)

//3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
//for(let i=random; i>19; i<201;i == i;)
{for(let i =0; i < 10; i++ )
{
    let random = Math.floor((Math.random() * 200) + 20);
if(random%2===0)
{
    console.log(`${random} is even`);
}else
{
    console.log(`${random} is odd`);
}
}
}

//4. Create a for loop that uses console.log to create the output shown below.

for (let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

//5.Create a for loop that uses console.log to create the output shown below.

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}


//Break and Continue

