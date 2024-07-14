'use strict';

const accumulatedScore0 = function (score) {
  document.getElementById('score--0').textContent = score;
};

const accumulatedScore1 = function (score) {
  document.getElementById('score--1').textContent = score;
};

const currentScore0 = function (score) {
  document.getElementById('current--0').textContent = score;
};

const currentScore1 = function (score) {
  document.getElementById('current--1').textContent = score;
};

const reset = function () {
  accumulatedScore0(0);
  accumulatedScore1(0);
  currentScore0(0);
  currentScore1(0);
  let [current0, current1, score0, score1, player0, player1] = [0,0,0,0,1,0];
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--0`).classList.remove("player--winner");  
  document.querySelector(`.player--1`).classList.remove("player--active","player--winner");
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.btn--roll').disabled=false;
  document.querySelector('.btn--hold').disabled=false;
};

const add = function (num) {document.querySelector(`.player--${num}`).classList.add("player--active");}

const remove = function (num) {document.querySelector(`.player--${num}`).classList.remove("player--active");}

const checkWinner = function (score,num) {
    if (score >= 50) {
        document.querySelector(`.player--${num}`).classList.add("player--winner");
        document.querySelector('.btn--roll').disabled=true;
        document.querySelector('.btn--hold').disabled=true;
    }}

document.querySelector('.btn--new').addEventListener('click', function () {
  reset();
});

reset();

let [current0, current1, score0, score1, player0, player1] = [0,0,0,0,1,0];


document.querySelector('.btn--roll').addEventListener('click', function () {
  let randomInt = Math.floor(Math.random() * 6 + 1);
  document.querySelector('.dice').src = `dice-${randomInt}.png`;
  document.querySelector('.dice').style.display = '';
  if (player0 === 1) {
    randomInt === 1
      ? ((current0 = 0), (player0 = 0), (player1 = 1), remove(0), add(1))
      : (current0 += randomInt);
    currentScore0(current0);
  } else if (player1 === 1) {
    randomInt === 1
      ? ((current1 = 0), (player1 = 0), (player0 = 1), remove(1), add(0))
      : (current1 += randomInt);
    currentScore1(current1);
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  document.querySelector('.dice').style.display = 'none';
  if (player0 === 1) {
    score0 += current0;
    accumulatedScore0(score0);
    currentScore0(0);
    checkWinner(score0,0)
    current0 = 0, player0 = 0, player1=1, remove(0), add(1);
  } else if (player1 === 1) {
    score1 += current1;
    accumulatedScore1(score1);
    currentScore1(0);
    checkWinner(score1,1)
    current1 = 0, player1 = 0, player0=1, remove(1), add(0);
  }
  
});