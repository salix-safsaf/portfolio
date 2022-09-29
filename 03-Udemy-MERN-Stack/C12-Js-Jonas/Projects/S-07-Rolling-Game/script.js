'use strict';

// Section: Selecting elements.

// note: total score:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// note: total score:
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

// note: current score:
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// note: dice pic:
const diceEl = document.querySelector('.dice');

// note: buttons:
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Section: Starting conditions.

let scores, currentScore, activePlayer, playing;

let startingConditions = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

startingConditions();

// Section: switch Player.

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Section: btn Roll.

btnRoll.addEventListener('click', function () {
  if (playing) {
    // note: 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // note: 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    // note: 3. Check for rolled 1
    if (dice !== 1) {
      // ->-> Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // ->-> Add dice to current score
      switchPlayer();
    }
  }
});

// Section: btn Hold.

btnHold.addEventListener('click', function () {
  if (playing) {
    // note: 1. Add current score to active player's score.
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // note: 2. Check if player's score is >= 100.
    if (scores[activePlayer] >= 100) {
      // ->-> Finish the game.
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // ->-> Switch to the next player.
      switchPlayer();
    }
  }
});

// Section: btn New.
btnNew.addEventListener('click', startingConditions);
