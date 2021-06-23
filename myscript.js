"use strict";

let buttons = document.querySelectorAll(".drum");

for ( let i = 0; i < buttons.length; i++ ) {
    
    buttons[i].addEventListener("click", () => {

        makeSound(buttons[i].innerHTML);
        buttonAnimation(buttons[i].innerHTML);

    });
}
                 
document.addEventListener("keydown", (event) => {

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){

    switch (key) {

        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "KeyJ":
        case "j":
            new Audio("sounds/crash.mp3").play();
            break;

        case "k":
            new Audio("sounds/kick-bass.mp3").play();
            break;

        case "l":
            new Audio("sounds/snare.mp3").play();
            break;
            
        default:
            console.log(key);
            break;
    }

}

function buttonAnimation(currentButton) {

    let x = document.querySelector(`.${currentButton}`);
    x.classList.add("pressed");

    setTimeout( () => {
        x.classList.remove("pressed");
    },300 )
}