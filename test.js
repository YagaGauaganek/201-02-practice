"use strict"

console.log("Script has been logged");

let answer1 = confirm("Are you ready to know me better");
console.log(answer1);

if(answer1) {
    console.log("letes get ready for rumble");
} else {
    console.log("jab, jab, right hook");
}

let first = false;
let second = false;
let third = true;

if(first && third) {
    console.log ("first and third were both true");
} else if (first || second ) {
    console.log("first or second was truwe"); 
} else if (third) {
    console.log("Third....");
} else {
    console.log = prompt("whats your fav color?");
}

let color = prompt("what is your fav color?");

switch (color.toLowerCase()) {
    case "red":
        console.log("your fav color is read");
        break;
    case "blue":
        console.log("your fav color is blue");
        break;
    default:
    console.log("No idea what that color is!!!")
}

let myName = prompt  ("Is my name Yaga? Please answer yes/no or y/n only.").toLowerCase();

while (myName != "yes" && myName != "no" && myName !="y" && myName != "n") {
    alert("Please answer yes/no or y/n only");
    myName = prompt("Is my name Yaga? Please answer yes/no or y/n only.").toLowerCase();
}

if (myName === "yes" || myName === "y") {
    //console.log("Correct, my name is Yaga!");
    alert("Correct, my name is Yaga");
} else if (myName === "no" || myName === "n") {
    // console.log("That is not correct!");
    alert("That is not correct!");
}

// My 1st attempt
while (myName != "yes" && myName != "no" && myName !="y" && myName != "n") {
    myName = prompt("Was I born on a pink cloud?").toLowerCase();
    alert("Please answer yes/no or y/n only");
}

if (myName === "yes" || myName === "y") {
    //console.log("Correct, my name is Yaga!");
    alert("Yes! The cloud was Pink and cosy.");
} else if (myName === "no" || myName === "n") {
    // console.log("That is not correct!");
    alert("Oh, try again!");
}

while (myName != "yes" && myName != "no" && myName !="y" && myName != "n") {
    myName = prompt("Was I kidnapped by baby delivery Stork?").toLowerCase();
    alert("Please answer yes/no or y/n only");
}

if (myName === "yes" || myName === "y") {
    //console.log("Correct, my name is Yaga!");
    alert("Yes! His name was William and he was very confused after all. I was not his target!");
} else if (myName === "no" || myName === "n") {
    // console.log("That is not correct!");
    alert("Oh, try again!");
}
// rating
function displayRating() {
    let output = "";
    let rating = prompt("On a scale of 1-5, how much do you rate this page?");
    for (let i = 0; i < rating; i++) {
        output += "<img class+'star-img' src='images/star.png' alt=star rating'>";
    }
    return document.write(output);
}

// guess number function

function guessNumber (){
    let i=0;
    let secretNumber = 9;
    let numGuess = prompt("Try to guess how long I live in England. Hint: it is between 1-20");

for (i=0; i < 3 ; i++) {
    console.log(i)
    if (secretNumber == numGuess) {            
    alert("Yes, you're right! Well done!");
    break;
} else {
    i++;
    alert(" you have gusessed " + i + " times.")
    numGuess = prompt("Try again!")
    }
}
}

// v2
function guessNumber(){
    let i=0;
    let secretNumber = 9;
    let numGuess = prompt("Try to guess how long I live in England. Hint: it is between 1-20");
    for(i = 0; i < 4 ; i++) {
        console.log(i)
        if (numGuess < secretNumber) {
        alert("Yes, you're right! Well done!")
        break;
    } else {
        i++;
        alert(user + " you tried" + i + "times.")
        numGuess = prompt("Too short. Try again!")
    }
        console.log(numGuess)
}
alert("You guessed it! Well done!");
};
guessNumber();
// v1
function guessNumber (){
    let i=0;
    let secretNumber = 9;
    let numGuess = prompt("Try to guess how long I live in England. Hint: it is between 1-20");

for (i=0; i < 3 ; i++) {
    console.log(i)
    if (secretNumber == numGuess) {            
    alert("Yes, you're right! Well done!");
    break;
} else {
    i++;
    alert(" you have gusessed " + i + " times.")
    numGuess = prompt("Try again!")
    }
}
}

//v 3
    function guessNumber() {
    const correctNumber = 9;
    let attempts = 4;
    while (attempts > 0) {
      myGuessNumber = parseInt(prompt("Guess how many years do I live in England. Hint: number is between 1-15"));

      if (myGuessNumber === correctNumber) {
        alert("Congratulations! You guessed it!");
        return;
      } else if (myGuessNumber > correctNumber && myGuessNumber !== 9) {
        alert("It is little bit longer. Try again");
      } else if (myGuessNumber < correctNumber && myGuessNumber !== 9) {
        alert("Not that many. Try again,");
      }
      attempts--;
    }
    alert(
      "No More attempts. I live in England " +
        correctNumber +
        "."
    );
  }
  guessNumber();