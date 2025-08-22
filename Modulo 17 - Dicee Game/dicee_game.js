var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice1 = document.getElementsByClassName("img1")[0];
var dice2 = document.getElementsByClassName("img2")[0];
dice1.setAttribute("src", `./images/dice${randomNumber1}.png`);
dice2.setAttribute("src", `./images/dice${randomNumber2}.png`);
var title = document.querySelector("h1");
var winner = "Draw!"
if (randomNumber1 > randomNumber2) {
    winner = "🚩 Player 1 Wins!";
} else {
    if ( randomNumber1 < randomNumber2 ) {
        winner = "Player 2 Wins! 🚩";
    }
}
title.textContent = winner;
