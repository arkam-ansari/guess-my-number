'use strict';
// Initial Values
let scoreValue = 20;
document.querySelector('.score').textContent = scoreValue;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;
let secretValue = Math.ceil((Math.random() * 20));

// Handle Click on Check Button
document.querySelector('.check').addEventListener('click', function () {
  let guessValue = document.querySelector('.guess').value;
  if (!guessValue) {
    // When input empty
    document.querySelector('.message').textContent = '🛑No Number🛑';
  } else if (guessValue == secretValue) {
    // When guess correct value
    document.querySelector('.message').textContent = '🎉Correct Answer🎉';
    document.querySelector('.number').textContent = guessValue;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = scoreValue;
    if (scoreValue >= highScore) {
      highScore = scoreValue;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue != secretValue) {
    // When guess wrong value
    if (scoreValue > 1) {
      document.querySelector('.message').textContent = guessValue > secretValue ? '📈Too high📈' : '📉Too low📉';
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      document.querySelector('.message').textContent = '😔You lose the game😔';
    }
  }
});

// Handle Click on Again Button
document.querySelector('.again').addEventListener('click', function () {
  // Reset Game 
  scoreValue = 20;
  secretValue = Math.round((Math.random() * 20) + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});