# Hangman Word Guessing Game

A simple browser-based Hangman game built with HTML, CSS, and JavaScript. The player must guess an Indian language name one letter at a time before running out of attempts.

## Project Files

- `index.html` - the page structure and game UI.
- `style.css` - the visual styling for the game.
- `script.js` - the game logic, word selection, and win/loss handling.

## How To Run

1. Open `index.html` in a web browser.
2. Type one letter into the input box.
3. Click `Guess`.
4. Keep guessing until you reveal the full word or reach zero attempts.

## Game Rules

- The secret word is chosen randomly from a list of Indian language names.
- The word is displayed as underscores at the start.
- Correct letters are revealed in the word.
- Wrong guesses reduce the number of attempts.
- Repeating a guessed letter shows a warning.
- You win when every letter in the word is revealed.
- You lose when attempts reach `0`.

## How The Code Works

### `index.html`

The HTML file creates the main game layout:

- Game title
- Instruction text
- Word display area
- Letter input field
- Guess button
- Message area
- Attempts counter

It also loads `style.css` for styling and `script.js` for the game behavior.

### `style.css`

The CSS centers the game on the page and styles the card-like container, input field, button, and message text.

Main visual choices:

- Green background for the page
- Light panel for the game box
- Large spaced letters for the hidden word
- Red text for feedback messages

### `script.js`

The JavaScript file contains the full gameplay logic.

#### 1. Word selection

The game stores a list of words:

- Hindi
- English
- Punjabi
- Gujarati
- Marathi
- Bengali
- Tamil
- Telugu

A random word is chosen from that list and converted to lowercase.

#### 2. Game state

The script keeps track of:

- `guessedLetters` - letters the player has already entered
- `attempts` - remaining wrong guesses, starting at `7`

#### 3. Word display

The `displayWord()` function loops through each letter in the secret word and shows:

- the letter if it has been guessed
- an underscore if it has not been guessed yet

This updates the visible word after every guess.

#### 4. Guess handling

When the player clicks `Guess`:

- the input letter is read and converted to lowercase
- empty input is ignored
- repeated guesses are blocked with a message
- correct guesses are added to the revealed letters
- wrong guesses subtract one attempt
- the word display and attempts counter are refreshed
- the game checks whether the player won or lost

#### 5. Win and loss checks

The `checkGame()` function does two things:

- checks if every letter in the word has been guessed, then shows a win message
- checks whether attempts reached `0`, then shows the game-over message and reveals the word

## Notes

- The current game accepts one letter at a time.
- The selected word is shown in the browser console for debugging.
- The game does not yet include a restart button, so refreshing the page starts a new round.

## Possible Improvements

- Add a restart button
- Add hangman graphics
- Show guessed letters on screen
- Prevent invalid non-letter input
- Add keyboard support for Enter
