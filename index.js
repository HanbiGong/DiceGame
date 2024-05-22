// Generate a random number between 1 and 6 for the first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Generate the image file name for the first dice
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomSourceImage1 = "image/" + randomDiceImage1; // image/dice1.png - image/dice6.png

// Select the first image element and set its source attribute
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSourceImage1);

// Generate a random number between 1 and 6 for the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Generate the image file name for the second dice
var randomSourceImage2 = "image/dice" + randomNumber2 + ".png"; // image/dice1.png - image/dice6.png

// Select the second image element and set its source attribute
document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);

// Determine the winner and update the header
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!!!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!!!";
}
