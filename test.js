"use strict"
console.log("yada, yada, yada");

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