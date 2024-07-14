'use strict';

//  COMMENT: THIS CODE IS WAY MESSIER THAN IT SHOULD!

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
  gameState.current0= 0;
  gameState.current1= 0;
  gameState.score0= 0;
  gameState.score1= 0;
  gameState.player0= 1;
  gameState.player1= 0;
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

let gameState = {
  current0: 0,
  current1: 0,
  score0: 0,
  score1: 0,
  player0: 1,
  player1: 0,
}


reset();


document.querySelector('.btn--roll').addEventListener('click', function () {
  let randomInt = Math.floor(Math.random() * 6 + 1);
  document.querySelector('.dice').src = `dice-${randomInt}.png`;
  document.querySelector('.dice').style.display = '';
  if (gameState.player0 === 1) {
    randomInt === 1
      ? ((gameState.current0 = 0), (gameState.player0 = 0), (gameState.player1 = 1), remove(0), add(1))
      : (gameState.current0 += randomInt);
    currentScore0(gameState.current0);
  } else if (gameState.player1 === 1) {
    randomInt === 1
      ? ((gameState.current1 = 0), (gameState.player1 = 0), (gameState.player0 = 1), remove(1), add(0))
      : (gameState.current1 += randomInt);
    currentScore1(gameState.current1);
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  document.querySelector('.dice').style.display = 'none';
  if (gameState.player0 === 1) {
    gameState.score0 += gameState.current0;
    accumulatedScore0(gameState.score0);
    currentScore0(0);
    checkWinner(gameState.score0,0)
    gameState.current0 = 0, gameState.player0 = 0, gameState.player1=1, remove(0), add(1);
  } else if (gameState.player1 === 1) {
    gameState.score1 += gameState.current1;
    accumulatedScore1(gameState.score1);
    currentScore1(0);
    checkWinner(gameState.score1,1)
    gameState.current1 = 0, gameState.player1 = 0, gameState.player0=1, remove(1), add(0);
  }
});