const CHOICE_OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice(choicesArr) {
  const randomIndex = Math.floor(Math.random() * choicesArr.length + 1);
  return choicesArr[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper or Scissors?')
  return humanChoice;
}