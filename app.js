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

