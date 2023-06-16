"use strict";

console.log ("script logged as expected");

let points = 0;

// welcome used with the message
alert("Welcome to my guessing game")

// Ask the user for their name
let user = prompt("I'm Yaga. What is your name?")

// The response could be and string, an ampty string or null
// if user is empty string or null, keep asking the user for their name
// empty string and null are falsy values, so if use is false ask for their name 
// I will need a loop that runs intill the condition is not met
// every time the loop runs, ask the question again

//(!) esclamation mark is logical mark for not, in this case !user=false; user=true
// 

while(!user) {
    user = prompt("What is your name? We cannot progress without it").toLowerCase();
}

// **falsy valuse**
// null - the absence of any value
// undefined - a variable (but not exclusive to variable) 
// that has not been assigned to value let: let dog; - undifined; let dog="ralf" - defined
// false - boolean value
// NaN - not a number
// 0 - the number 0
// -0 - the number negative
// 22 - empty string including "", '', ``

// !== - not equals comparison operator

if(user != "Yaga") {
    alert("Too bad you are not Yaga, Yaga is a great name!")
}
alert("Hi " + user + "! I am so glad you decided to come to my site.")

let answer = prompt ("Is my favourite food popcord? Yes or no.").toLowerCase();
console.log(answer);

// **Arrays**

// Arrays allow us to hold more than one valoe in a single variable
// Array indexes start form 0
// Each item in the array is named an element
// Arrays should be declared using const as they cannot be reassigned
// Arrays can be manipulated using variety of array method

// **Array methods we will look at today**
// .length - tell us the length of the array
// .push - adds an element to the end of the array
// . pop - removes the element from  the end of an array
// . unshift - add an element to the start of an array
// .shift - removes an element to the start of an array
// .indexOf -tells you and index of an arry (index start from)

const foodsYagaLikes =["potato", "ramen", "seaweed"];

console.log(foodsYagaLikes[0]);
console.log(foodsYagaLikes[2]);
console.log(foodsYagaLikes[3]);
console.log(foodsYagaLikes.length);
console.log(foodsYagaLikes);

// more often than not the 'for' loop is used to loop through an array

for(let i = 0; i < foodsYagaLikes.length; i++) {
    console.log(foodsYagaLikes[i]);
}

//***

console.log(foodsYagaLikes);

//.push
foodsYagaLikes.push("gherkin");
console.log(foodsYagaLikes);

//. pop
foodsYagaLikes.pop();
console.log(foodsYagaLikes);

// .unshift
foodsYagaLikes.unshift("cherry pie");
console.log(foodsYagaLikes);

// .shift
foodsYagaLikes.shift();
console.log(foodsYagaLikes);

// .indexOf
let index = foodsYagaLikes.indexOf("seaweed");
console.log(index)

// **look into**
// .splice() array
// .slice() array

// Also look 'do while' loop

// points++ when correct answer

// dont repeat yourself

/// Chris' code - number

const number  = "9";
for(let i = 3; i > 0; i--) {
    
    let guesses = i + 1
    let guess = prompt ("Guess an number between 1-15. you have 3" +  guesses + "attempts.")
    if (guess)
}

//Chris' notes for rundaom number

const number = Math.floor(Math.random)() * 10 +1);

// more is sent on disord

// (initialisation/  condition / after
for(let i = 0; i < 3; i++) {
    console.log([i])
}