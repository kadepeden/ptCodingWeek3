// 1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    // a) Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
    // b) Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
    // c) Use a loop to iterate through the array and calculate the average age. Print the result to the console.

var ages  = [3, 9, 23, 64, 2, 8, 28, 93];

//a 

function lastMinusFirst (array) {
    var first = array[0];
    var last = array[array.length - 1];
        return last - first;
}

var answer1 = lastMinusFirst(ages)

console.log("The answer to question 1(a) is:", answer1);

//b

ages.push(30);

console.log("I've added a new element using .push, which makes the array:" , ages);

var answer2 = lastMinusFirst(ages)

console.log("The answer to question 1(b) is:" , answer2);

var sum = 0

//c 

for (var number of ages) {
    sum += number;
}

average = sum/ ages.length;

console.log("The answer to question 1(c) is:" , average);

//2) Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
    // a) Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

console.log("For question 2 I created the following array" , names);

var total = 0

for (var i = 0; i < names.length; i++) {
    total+=names[i].length;
}

var average = total/names.length

console.log("The answer to question 2 (a) is:" , average);

// 3)	How do you access the last element of any array?

console.log("The answer to question 3 is that you use the length property of the array and use length -1 in order to determine what the last element is. Log that out and now you've got the element!");

// 4)	How do you access the first element of any array?

console.log("The answer to question 4 is that you can use index[0] to access the first element since arrays in Javascript are 0 based index.");

// 5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    // For example:

    // namesArray = ["Kelly", "Sam", "Kate"] //given this array
    // nameLengths = [5, 3, 4] //create this new array

var nameLengths = [];

for (var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log("The answer to question 5 is:" , nameLengths);

// 6) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

var sum = 0

for (var i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log("The answer to question 6 is:" , sum);

// 7) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordConcactenator (word, n) {
    var con = word;
    for (i = 1; i <= n; i++) {
        con = con.concat(word);
    }
    return con
}

console.log("The answer to question 7 is:" , wordConcactenator ("oh", 3));

// 8) Write a function that takes two parameters, firstName and lastName, and returns a full name 
// (the full name should be the first and the last name separated by a space)

function firstNameLastName (firstName, lastName) {
    return firstName.concat("", lastName);
}

console.log("The answer to question 8 is:" , firstNameLastName("Kade", " Peden"))

// 9)  Write a function that takes an array of numbers 
// 
and returns true if the sum of all the numbers in the array is greater than 100.

function takesArraysWithSumBiggerThan100 (arr) {
    sum = 0
    for (i  = 0; i <= arr.length; i++) {
        sum = sum + arr
    }
    if (sum > 100) {
        return true
    } else {
        return false;
    }
}

console.log("For question 9, when I use the function 'takesArrayWithSumBiggerThan100' and give it '1, 4, 6' I get:", takesArraysWithSumBiggerThan100 (1, 4, 6));

//10) Write a function that takes an array of numbers and returns the average of all the elements in the array.

function takesArrayAndReturnsAverages (array) {
    return array.reduce ((a,b) => (a+b)) / array.length
}

var result = takesArrayAndReturnsAverages([1, 2, 3, 4,]);

console.log ("The answer to question 10 given the array '1,2,3,4' is:" , result);

//11) Write a function that takes two arrays of numbers 
// and returns true if the average of the elements in the first array
// is greater than the average of the elements in the second array.

function isFirstAverageBiggerThanSecondAverage (array1, array2) {
    var total1 = 0
    for (i = 0; i < array1.length; i++) {
        total1 += array2[i]
    }
    var total2 = 0
    for (i = 0; i < array2.length; i++) {
        total2 += array2[i]
    }
    var average1 = total1/array1.length
    var average2 = total2/array2.length

    if (average1 > average2) {
        return true
    } else {
        return false
    }
}

var result = isFirstAverageBiggerThanSecondAverage ([1,2,3], [4,5,6]);

console.log ("The answer to question 11 given 'array1 = 1,2,3' and 'array2 = 4,5,6' is:" , result);

//12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true
    } else {
        return false
    }
}

console.log("The answer to question 12 if willBuyDrink is 12 and moneyInPocket is 25 is:" , willBuyDrink (true, 25));

//13) Create a function of your own that solves a problem.
// In comments, write what the function does and why you created it.

function shouldIGoKayaking (temperature, isFree){
    if (temperature >= 32 && isFree === true) {
        return "Yes, boof boof away!"
    } else {
        return "No, stay home and be sad."
    }
}

console.log("Should I go kayaking today?", shouldIGoKayaking(50,true))

// This function gives me directions on if I should go kayaking on any given day. 
// If the temperature is at or above freezing (32) and I am free that day, I can go kayaking. 
// If bother parameters aren't true, I need to stay home. Boofing a slang term in kayaking.