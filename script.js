'use strict';

const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
let score = 0;

scoreElement0.textContent = '0';
scoreElement1.textContent = '0';
diceElement.classList.add('hidden');

btnRoll.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  diceElement.classList.remove('hidden');
  diceElement.src = `dice${diceNumber}.png`;

  if (diceNumber === 1 && player0.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player0.classList.remove('player--active');
  } else if (diceNumber === 1 && player1.classList.contains('player--active')) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }

  if (diceNumber !== 1) {
    score += Number(diceNumber);
  }

  if (player0.classList.contains('player--active')) {
    currentScore0.textContent = score;
  } else if (player1.classList.contains('player--active')) {
    currentScore1.textContent = score;
  }
});
