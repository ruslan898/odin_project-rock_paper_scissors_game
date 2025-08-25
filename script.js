const CHOICE_OPTIONS = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choicesArr) {
  const randomIndex = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper or Scissors?');
  return humanChoice;
}
