const correctID = "" + Math.floor(Math.random() * 3);

function addButtonEventListeners() {
    let buttons = document.querySelectorAll('button'); // vanilla js
    for (let button of buttons) { // this loop can be simplified
        button.addEventListener('click', checkButton); // vanilla js
    }

}

function checkButton() {
    let b = (this.id == correctID); // uses vanilla js

    // steps for each button
    document.querySelectorAll('button').forEach(function (button) { // can be rewritted with jquery
        button.disabled = true; // vanilla js
        button.classList.remove("btn-primary"); // vanilla js
        if (b) {
            button.innerText = "You win!"; // vanilla js
        } else {
            button.innerText = "Game Over.";
        }
    });

    let button = document.getElementById(this.id); // vanilla js
    if (b) {
        button.classList.add('btn-success'); // vanilla js
    } else {
        button.classList.add('btn-danger'); // vanilla js
        document.getElementById(correctID).classList.add('btn-warning'); // vanilla js
    }
}

document.addEventListener("DOMContentLoaded", function () { // vanilla js
    addButtonEventListeners();
});