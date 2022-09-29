// Using strict mode
'use strict';

// SECTION: Set Numbers

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// SECTION: Message Func.

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// SECTION: Smily Func.
const smilyMessage = function (note) {
  document.querySelector('.end-note').textContent = note;
};

// SECTION: secretNumber Func.

const secretRevealed = function () {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '30rem';
};

// SECTION: Check Btn.

document.querySelector('.check').addEventListener('click', function () {
  // Task: Guess Num.
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // Note: No Input.
    displayMessage('⛔ No Number!');
    smilyMessage('😑');

    // Note: Out of Range.
  } else if (guess > 20) {
    displayMessage('⛔ Out Of Range!');
    smilyMessage('😡');

    // Note: Correct Num.
  } else if (guess === secretNumber) {
    secretRevealed();
    displayMessage('🎉 Correct Number!');
    smilyMessage('🏆 Winner 🏆');
    document.querySelector('body').style.backgroundColor = '#52BE80';

    // ->-> Highscore settings.
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Note: Wrong Num.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      smilyMessage(guess > secretNumber ? '🙄' : '🤔');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      secretRevealed();
      displayMessage('💥 You Lost!');
      smilyMessage('😢 GAME OVER! 😢');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#CD6155';
    }
  }
});

// SECTION: Again Btn.

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  smilyMessage('😶');

  // Task: Score Reset.
  score = 20;
  document.querySelector('.score').textContent = 20;

  // Task: secretNumber Reset.
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
