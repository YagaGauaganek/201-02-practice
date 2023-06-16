"use strict";

let user;

function userName() {
    user = prompt("Hi stranger! Please tell me your name.");
    alert("My name is Yaga. Nice to meet you, " + user + "!");
    console.log(user);
}

userName();

//alert("My name is Yaga. Nice to meet you!" + user);

let myName = prompt ("Would you like to enter my dreamy world?").toLowerCase();

while (myName != "yes" && myName != "no" && myName !="y" && myName != "n") {
    alert("Please answer yes/no or y/n only");
    myName = prompt("Would you like to enter my dreamy world? Please answer yes/no or y/n only.").toLowerCase();
}

if (myName === "yes" || myName === "y") {
    //console.log("Correct, my name is Yaga!");
    alert("Great! let's start litte quiz about me :)");
} else if (myName === "no" || myName === "n") {
    // console.log("That is not correct!");
    alert("Oh, sad :( Let's give a try anyway.");

}

let cloud = prompt ("Was I born on a pink cloud?").toLowerCase();

while (cloud != "yes" && cloud != "no" && cloud !="y" && cloud != "n") {
    alert("Please answer yes/no or y/n only");
    cloud = prompt("Was I born on a pink cloud? Please answer yes/no or y/n only.").toLowerCase();
}

if (cloud === "yes" || cloud === "y") {
    //console.log("Correct, my name is Yaga!");
    alert("Yes! The cloud was Pink and cosy.");
} else if (cloud === "no" || cloud === "n") {
    // console.log("That is not correct!");
    alert("Well, I was. Let's try with another question!");
}

let stork = prompt("Was I kidnapped by baby delivery Stork?").toLowerCase();
    //alert("Please answer yes/no or y/n only");

while (stork != "yes" && stork != "no" && stork !="y" && stork != "n") {
    alert("Please answer yes/no or y/n only");
    stork = prompt("Was I kidnapped by baby delivery Stork? Please answer yes/no or y/n only.").toLowerCase();
}

if (stork === "yes" || stork === "y") {
//console.log("Correct, my name is Yaga!");
alert("Yes! His name was William and he was very confused after all. I was not his target!");
} else if (stork === "no" || stork === "n") {
// console.log("That is not correct!");
alert("Well, I was. Let's try with another question!");
}

let seal = prompt("Did I befriend with plush toy seal?").toLowerCase();
//alert("Please answer yes/no or y/n only");

while (seal != "yes" && seal != "no" && seal !="y" && seal != "n") {
    alert("Please answer yes/no or y/n only");
    seal = prompt("Did I befriend with plush toy seal? Please answer yes/no or y/n only.").toLowerCase();
}

if (seal === "yes" || seal === "y") {
//console.log("Correct, my name is Yaga!");
alert("Yes! Her name was Foka Hoka and her fur was patterned in flowers.");
} else if (seal === "no" || seal === "n") {
// console.log("That is not correct!");
alert("Not this time.");
}

let artist = prompt("Is my fav artist Yayoi Kusama?").toLowerCase();
//alert("Please answer yes/no or y/n only");

while (artist != "yes" && artist != "no" && artist !="y" && artist != "n") {
    alert("Please answer yes/no or y/n only");
    artist = prompt("Is my fav artist Yayoi Kusama? Please answer yes/no or y/n only.").toLowerCase();
}

if (artist === "yes" || artist === "y") {
//console.log("Correct, my name is Yaga!");
alert("Yes! I have seen her exhibition 'Infinity Mirror Rooms' in London last year.");
} else if (artist === "no" || artist === "n") {
// console.log("That is not correct!");
alert("Not this time.");
}

let music = prompt("Is my fav music artist Beyonce?").toLowerCase();
//alert("Please answer yes/no or y/n only");

while (music != "yes" && music != "no" && music !="y" && music != "n") {
    alert("Please answer yes/no or y/n only");
    music = prompt("Is my fav music artist Beyonce? Please answer yes/no or y/n only.").toLowerCase();
}

if (music === "no" || music === "n") {
//console.log("Correct, my name is Yaga!");
alert("Well, not big fan, not a hater.");
} else if (music === "no" || music === "n") {
// console.log("That is not correct!");
alert("Not this time");
}

alert("Thank you for all your answers, " + user + "! Let's try more questions");

const number = Math.floor(Math.random() * 10 +1);
console.log(number);

for (let i = 2; i >= 0; i--) {
    let guesses = i + 1;

    let guess = prompt("Guess a numner bewteen 1 and 10!  You have " + guesses + " attempts.");

    const guessNum = parseInt(guess);

    if (guessNum === number) {
        // console.log("You win);
        alert ("You win");
        break;
    } else if (guessNum < number) {
        // console.log("Too low!");
        alert("Too low!");
    } else if (guessNum > number) {
        // console.log("Too high.");
        alert("Too high.");
    }

    if (i === 0) {
        alert("The correct number is " + number);
        break;
    }
}

function guessMyTravel () {
    const myTravel = ["Slovakia", "England", "Greece", "Poland"];
    const maxAttempts = 6;
    const guessedTravel = [];

    for (let i = 1; i <= maxAttempts; i++) {
        const guess = prompt("Guess in what countries have I cooked as a chef");

        let isCorrect = false;
        for (let j = 0; j < myTravel.length; j++){
            if (guess.toLowerCase() === myTravel[j].toLowerCase()) {
                guessedTravel.push(guess);
                isCorrect = true;
                break;
            }
        }
        if (isCorrect) {
            alert("Well done. You have guessed country I worked as a chef.");
        } else {
            alert("Unfortunately it is not correct answer. Please try again.");
        }
    }

alert("This quiz has ened! You scored " + guessedTravel.length + " correct answers. I worked in " + myTravel);
}

guessMyTravel ();

alert ("It was nice to meet you " + user +  "! Thank you for all your answers.");




