"use strict"

function userName() {
    user = prompt("Hi stranger! Please tell me your name.");
    alert("Welcome to my site, " + user + "!");
    console.log(user);
}

userName();

alert("Hi, I am Yaga. Welcome to my site!");

let myName = prompt  ("Would you like to enter my dreamy world?").toLowerCase();

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
