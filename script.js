const words = [
  {
    word: "hindi",
    hint: "Most widely spoken language in India",
  },
  {
    word: "punjabi",
    hint: "Language spoken in North-West region",
  },
  {
    word: "gujarati",
    hint: "Language spoken in West region",
  },
  {
    word: "marathi",
    hint: "Language spoken in Western Peninsula region",
  },
  {
    word: "bengali",
    hint: "Language spoken in Eastern region of Indian subcontinent",
  },
  {
    word: "tamil",
    hint: "Language spoken in Southernmost Part of India",
  },
  {
    word: "telugu",
    hint: "Language spoken in Southeastern Part of India",
  },
  {
    word: "kannada",
    hint: "Language spoken in Southwestern Part of India",
  },
];
const randomData = words[Math.floor(Math.random() * words.length)];

const word = randomData.word.toLowerCase();

const hint = randomData.hint;

console.log("Selected Word:", word);

let guessedLetters = [];

let displayLetters = new Array(word.length).fill("_");

let attempts = word.length;

const winningTarget = Math.floor(word.length / 2) + 1;

const wordElement = document.getElementById("word");

const hintElement = document.getElementById("hint");

hintElement.innerText = `Hint: ${hint}`;

const letterInput = document.getElementById("letterInput");

const guessBtn = document.getElementById("guessBtn");

const messageElement = document.getElementById("message");

const attemptsElement = document.getElementById("attempts");

function displayWord() {

  wordElement.innerText = displayLetters.join(" ");
}

displayWord();

attemptsElement.innerText = `Attempts Left: ${attempts}`;

guessBtn.addEventListener("click", function () {

  const guessedLetter = letterInput.value.toLowerCase();

  letterInput.value = "";

  if (guessedLetter === "") {

    return;
  }

  let totalCount = 0;

  let revealedCount = 0;

  for (let i = 0; i < word.length; i++) {

    if (word[i] === guessedLetter) {

      totalCount++;
    }

    if (displayLetters[i] === guessedLetter) {

      revealedCount++;
    }
  }

  if (totalCount > 0 && totalCount === revealedCount) {

    messageElement.innerText = "Letter already guessed!";

    return;
  }

  guessedLetters.push(guessedLetter);

  let found = false;

  for (let i = 0; i < word.length; i++) {

    if (word[i] === guessedLetter && displayLetters[i] === "_") {

      displayLetters[i] = guessedLetter;

      found = true;

      break;
    }
  }

  attempts--;

  if (found) {

    messageElement.innerText = "Correct Guess!";

  } else {

    messageElement.innerText = "Wrong Guess!";

  }

  attemptsElement.innerText = `Attempts Left: ${attempts}`;

  displayWord();

  checkGame();
});

function checkGame() {

  let revealedCount = 0;

  for (let letter of displayLetters) {

    if (letter !== "_") {

      revealedCount++;
    }
  }

  if (revealedCount >= winningTarget) {

    messageElement.innerText = "Congratulations! You Won!";

    wordElement.innerText = word;

    letterInput.disabled = true;

    guessBtn.disabled = true;

    restartBtn.style.display = "inline-block";

    return;
  }

  if (attempts <= 0) {

    messageElement.innerText = `Game Over! Word was: ${word}`;

    wordElement.innerText = word;

    letterInput.disabled = true;

    guessBtn.disabled = true;

    restartBtn.style.display = "inline-block";

  }

}

restartBtn.addEventListener("click", function () {

  location.reload();

});