"use strict";

let user;

function userName() {
    user = prompt("Hi stranger! Please tell me your name.");
    alert("Welcome to my site, " + user + "!");
    console.log(user);
}

userName();

alert("My name is Yaga. Nice to meet you!" + user);

let myName = prompt  ("Would you like to enter my dreamy world?").toLowerCase();

while (myName != "yes" && myName != "no" && myName !="y" && myName != "n") {
    alert("Please answer yes/no or y/n only");
    myName = prompt("Would you like to enter my dreamy world? Please answer yes/no or y/n only.").toLowerCase();
}

if (myName === "yes" || myName === "y") {
    //console.log("Correct, my name is Yaga!");
    alert("Great! let's start litte quiz about me :)");
} else if (myName === "no" || myName === "n") {
    // console.log("That is not correct!");
    alert("That is not correct!");

}

let cloud = prompt ("Was I born on a pink cloud?").toLowerCase();

while (myName != "yes" && myName != "no" && myName !="y" && myName != "n") {
    alert("Please answer yes/no or y/n only");
    myName = prompt("Was I born on a pink cloud? Please answer yes/no or y/n only.").toLowerCase();
}

if (myName === "yes" || myName === "y") {
    //console.log("Correct, my name is Yaga!");
    alert("Yes! The cloud was Pink and cosy.");
} else if (myName === "no" || myName === "n") {
    // console.log("That is not correct!");
    alert("Oh, try again!");
}

let Stork = prompt("Was I kidnapped by baby delivery Stork?").toLowerCase();
    //alert("Please answer yes/no or y/n only");

while (myName != "yes" && myName != "no" && myName !="y" && myName != "n") {
    alert("Please answer yes/no or y/n only");
    myName = prompt("Was I kidnapped by baby delivery Stork? Please answer yes/no or y/n only.").toLowerCase();
}

if (myName === "yes" || myName === "y") {
//console.log("Correct, my name is Yaga!");
alert("Yes! His name was William and he was very confused after all. I was not his target!");
} else if (myName === "no" || myName === "n") {
// console.log("That is not correct!");
alert("Oh, try again!");
}

let seal = prompt("Did I befriend with plush toy seal?").toLowerCase();
//alert("Please answer yes/no or y/n only");

while (myName != "yes" && myName != "no" && myName !="y" && myName != "n") {
    alert("Please answer yes/no or y/n only");
    myName = prompt("Did I befriend with plush toy seal? Please answer yes/no or y/n only.").toLowerCase();
}

if (myName === "yes" || myName === "y") {
//console.log("Correct, my name is Yaga!");
alert("Yes! Her name was Foka Hoka and her fur was patterned in flowers");
} else if (myName === "no" || myName === "n") {
// console.log("That is not correct!");
alert("Oh, try again!");
}

alert("Thank you for all your answers, " + user + "! Stay tuned for more!");


