'use strict';

const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let totalScores, activePlayer, score, isPlaying;

const initGame = () => {
  totalScores = [0, 0];
  activePlayer = 0;
  score = 0;
  isPlaying = true;

  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
  player0.classList.remove('player--active');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  diceElement.classList.add('hidden');

  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

initGame();

const switchActivePlayer = () => {
  score = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = score;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
      score += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = score;
    } else {
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (isPlaying) {
    totalScores[activePlayer] += score;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    if (totalScores[activePlayer] >= 100) {
      isPlaying = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchActivePlayer();
    }
  }
});

btnNew.addEventListener('click', initGame);
