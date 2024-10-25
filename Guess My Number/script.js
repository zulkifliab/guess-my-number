'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20

let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);

    // When there is no input
    if (guess === 0 || isNaN(guess)) {
        document.querySelector(".message").textContent = "No number entered!";

        // When player guess is correct
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "⭐ Correct Number! ⭐";

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#72A0C1";

        document.querySelector(".number").style.width = "35rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        // When player guess is wrong 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            if (guess > secretNumber) {
                document.querySelector(".message").textContent = "Too High!";
            } else {
                document.querySelector(".message").textContent = "Too Low!";
            }
            score = score - 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "Game Overrr!!! 🐍"
            document.querySelector(".score").textContent = 0;
        }
    }
});

// Reset everything ("Again" Button)
document.querySelector(".again").addEventListener("click", function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";

    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = "?"

    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";

});
