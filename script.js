'use strict';

const messages = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const number = document.querySelector('.number');
const highscoreOutput = document.querySelector('.highscore');
const scoreOutput = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
console.log(secretNumber);

const displayMessage = function (message, color = 'brown') {
  messages.style.color = color;
  messages.textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!', 'red');

    // When player wins and correct guess
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!', 'yellow');
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
     checkBtn.disabled = true;
     checkBtn.style.cursor = 'not-allowed';
     checkBtn.style.backgroundColor = 'red';
     againBtn.style.backgroundColor = 'orange';

    if (score > highscore) {
      highscore = score;
      highscoreOutput.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreOutput.textContent = score;
    } else {
      displayMessage('💥 You lost the game!', 'red');
      scoreOutput.textContent = 0;
      checkBtn.disabled = true;
      checkBtn.style.cursor = 'not-allowed';
      checkBtn.style.backgroundColor = 'red';
      againBtn.style.backgroundColor = '#60b347';
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...', 'Yellow');
  scoreOutput.textContent = score;
  againBtn.style.backgroundColor = '';
  checkBtn.disabled = false;
  checkBtn.style.cursor = 'pointer';
  checkBtn.style.backgroundColor = '#60b347';
  number.textContent = '?';
  guessInput.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
