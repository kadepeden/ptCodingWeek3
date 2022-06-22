// this section is going to be about functions

console.log("I'm really excited to be working with functions!") // just an opportunity to make sure my js file is connected to my console

// fuction notes and practices start below

// functions allow us to write code to use later
// function syntax is 1) function keyword 2) name of the function 3) a set of parenthesis 4) curly braces
// function myFunction (){}
// all of the code inside of the curly braces is what will be invoked when you call this function
// it's like calling a box - you get all it's contents
// we build functions first and then we "envoke" them
// once you have declared a function, all you need to do is write it; it doesn't require "console.log"

function myFunction () {
    for ( var i = 0; i <= 100; i++) {
     console.log (i)
    }
}

myFunction();

//below is an example of creating a function with paramenters
//paramenters are like parking spots; they are placeholders
//arguments, the things you pass into the parameters in the function, are like cars

function createFullName (firstName, lastName){
    console.log(firstName + " " + lastName); 
}

createFullName("Tom", "Sawyer");

createFullName ("Kade", "Peden");