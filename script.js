const words = ["Hindi", "English", "Punjabi", "Gujarati", "Marathi", "Bengali", "Tamil", "Telugu"];

const word = words[Math.floor(Math.random() * words.length)].toLowerCase();

console.log("Selected Word:", word);

let guessedLetters = [];

let attempts = 7;

const wordElement = document.getElementById("word");
const letterInput = document.getElementById("letterInput");
const guessBtn = document.getElementById("guessBtn");
const messageElement = document.getElementById("message");
const attemptsElement = document.getElementById("attempts");

function displayWord() {

    let display = "";

    for (let letter of word) {

        if (guessedLetters.includes(letter)) {
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }
    wordElement.innerText = display;
}

displayWord();

attemptsElement.innerText = `Attempts Left: ${attempts}`;

document.getElementById("guessBtn").addEventListener("click", function () {

    const input = document.getElementById("letterInput");

    const guessedLetter = input.value.toLowerCase();

    input.value = "";

    if (guessedLetter === "") {
        return;
    }

    if (guessedLetters.includes(guessedLetter)) {
        messageElement.innerText = "Letter already guessed!";
        return;
    }

    guessedLetters.push(guessedLetter);

    if (word.includes(guessedLetter)) {
        messageElement.innerText = "Correct Guess!";
    }else {
        attempts--;
        messageElement.innerText = "Wrong Guess!";
    }

    attemptsElement.innerText = `Attempts Left: ${attempts}`;

    displayWord();

    checkGame();
});

function checkGame() {

    let won = true;

    for (let letter of word) {
        if (!guessedLetters.includes(letter)) {
            won = false;
        }
    }

    if (won) {
        messageElement.innerText = "Congratulations! You Won!";
    }
    if (attempts === 0) {
        messageElement.innerText = `Game Over! The word was: ${word}`;
    }
}