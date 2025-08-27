const CHOICE_OPTIONS = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultDisplayBox = document.querySelector('.result-display-box');
const scoreDisplayBox = document.querySelector('.score-display-box');
const playerScoreDisplayBox = document.querySelector('.player-score span');
const computerScoreDisplayBox = document.querySelector('.computer-score span');
const retryBtn = document.querySelector('.retry');

retryBtn.style.display = 'none';
retryBtn.addEventListener('click', () => {
  resultDisplayBox.textContent = '';
  rockBtn.classList.toggle('hide');
  paperBtn.classList.toggle('hide');
  scissorsBtn.classList.toggle('hide');
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplayBox.textContent = '0';
  computerScoreDisplayBox.textContent = '0';
  retryBtn.style.display = 'none';
});

rockBtn.addEventListener('click', () => {
  playRound('Rock', getComputerChoice(CHOICE_OPTIONS));
});
paperBtn.addEventListener('click', () => {
  playRound('Paper', getComputerChoice(CHOICE_OPTIONS));
});
scissorsBtn.addEventListener('click', () => {
  playRound('Scissors', getComputerChoice(CHOICE_OPTIONS));
});

function getComputerChoice(choicesArr) {
  const randomIndex = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomIndex];
}

function updateScoreDisplay(winner) {
  if (winner === 'player') {
    playerScoreDisplayBox.textContent = +playerScoreDisplayBox.textContent + 1;
  } else {
    computerScoreDisplayBox.textContent =
      +computerScoreDisplayBox.textContent + 1;
  }
}

function playRound(humanChoice, computerChoice) {
  scoreDisplayBox.classList.remove('hide');
  const humanChoiceLowercase = humanChoice.toLowerCase();
  if (humanChoiceLowercase === 'rock' && computerChoice === 'paper') {
    resultDisplayBox.textContent = `You lose! Paper beats Rock`;
    computerScore++;
    updateScoreDisplay('computer');
  } else if (humanChoiceLowercase === 'rock' && computerChoice === 'scissors') {
    resultDisplayBox.textContent = `You win! Rock beats Scissors`;
    playerScore++;
    updateScoreDisplay('player');
  } else if (humanChoiceLowercase === 'paper' && computerChoice === 'rock') {
    resultDisplayBox.textContent = `You win! Paper beats Rock`;
    playerScore++;
    updateScoreDisplay('player');
  } else if (
    humanChoiceLowercase === 'paper' &&
    computerChoice === 'scissors'
  ) {
    resultDisplayBox.textContent = `You lose! Scissors beats Paper`;
    computerScore++;
    updateScoreDisplay('computer');
  } else if (
    humanChoiceLowercase === 'paper' &&
    computerChoice === 'scissors'
  ) {
    resultDisplayBox.textContent = `You lose! Scissors beats Paper`;
    computerScore++;
    updateScoreDisplay('computer');
  } else if (humanChoiceLowercase === 'scissors' && computerChoice === 'rock') {
    resultDisplayBox.textContent = `You lose! Rock beats Scissors`;
    computerScore++;
    updateScoreDisplay('computer');
  } else if (
    humanChoiceLowercase === 'scissors' &&
    computerChoice === 'paper'
  ) {
    resultDisplayBox.textContent = `You win! Scissors beats Paper`;
    playerScore++;
    updateScoreDisplay('player');
  } else if (humanChoiceLowercase === computerChoice) {
    resultDisplayBox.textContent = "It's a draw!";
  }

  if (playerScore === 5) {
    resultDisplayBox.textContent = 'You have won the game!';
    rockBtn.classList.toggle('hide');
    paperBtn.classList.toggle('hide');
    scissorsBtn.classList.toggle('hide');
    scoreDisplayBox.classList.toggle('hide');
    retryBtn.style.display = 'block';
  } else if (computerScore === 5) {
    resultDisplayBox.textContent = 'Computer has won the game!';
    rockBtn.classList.toggle('hide');
    paperBtn.classList.toggle('hide');
    scissorsBtn.classList.toggle('hide');
    scoreDisplayBox.classList.toggle('hide');
    retryBtn.style.display = 'block';
  }
}
