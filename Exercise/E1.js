//Wrtite a javascript program to generate a random number and store it in a variable
//The program takes an input from user and tells user wheter the guesss number correct,lower and greater than the origanal number

const { attempt } = require("lodash")




var random_no = Math.random()*10
var my_random = Math.floor(random_no)



let atte = 0
while(true)
{

   b = process.argv[2]
    if (b == my_random)
    {
        console.log("Your Guess no is right...",b)    
        console.log(atte)
        break

    }

    atte = atte++  
    break
}
