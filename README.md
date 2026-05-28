# Hangman Word Guessing Game

## Overview
A simple browser-based Hangman-style word guessing game implemented with HTML, CSS, and JavaScript. The game selects a random word from a built-in list, shows a hint, and lets the player guess letters until they win or run out of attempts.

## How to run
- Open `index.html` in a web browser (double-click or use Live Server).
- Enter a single letter into the input and click the Guess button.
- The page updates with correct guesses, remaining attempts, and messages.

## Gameplay rules
- A random word is chosen from the built-in `words` list.
- The player types a single letter and clicks Guess to reveal occurrences of that letter.
- Each guess decrements the Attempts counter regardless of correctness.
- Win condition: reveal at least `Math.floor(word.length / 2) + 1` letters.
- Lose condition: attempts reach zero; the full word is revealed.

## Files
- index.html — main HTML file and UI structure.
- script.js — game logic, random word selection, guesses, and win/lose checks.
- style.css — styling for the game UI.

See these files in the project root: index.html, script.js, style.css

## Where to customize
- Word list and hints: open `script.js` and edit the `words` array near the top. Each item is an object: `{ word: "example", hint: "a hint" }`.
- Attempts logic: the initial `attempts` value is set to `word.length` in `script.js`. Change this line if you want more/less attempts.
- Winning target: currently calculated as `Math.floor(word.length / 2) + 1`. Adjust the `winningTarget` calculation in `script.js` to change win difficulty.
- UI and styles: modify `index.html` and `style.css` to change layout and appearance.

## Notes for developers
- The console logs the selected word for easy debugging: `console.log("Selected Word:", word)` in `script.js`.
- Input validation: the UI currently accepts any single-character input; you can add stricter checks to ignore non-letter characters.

## License
This project is provided as-is for learning and customization.

---
If you want, I can: add a words file, improve input validation, or add keyboard support.