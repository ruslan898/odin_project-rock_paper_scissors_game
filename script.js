const CHOICE_OPTIONS = ['rock', 'paper', 'scissors'];

function getComputerChoice(choicesArr) {
  const randomIndex = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper or Scissors?');
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanChoiceLowercase = humanChoice.toLowerCase();
    if (humanChoiceLowercase === 'rock' && computerChoice === 'paper') {
      console.log(`You lose! Paper beats Rock`);
      computerScore++;
    } else if (
      humanChoiceLowercase === 'rock' &&
      computerChoice === 'scissors'
    ) {
      console.log(`You win! Rock beats Scissors`);
      humanScore++;
    } else if (humanChoiceLowercase === 'paper' && computerChoice === 'rock') {
      console.log(`You win! Paper beats Rock`);
      humanScore++;
    } else if (
      humanChoiceLowercase === 'paper' &&
      computerChoice === 'scissors'
    ) {
      console.log(`You lose! Scissors beats Paper`);
      computerScore++;
    } else if (
      humanChoiceLowercase === 'paper' &&
      computerChoice === 'scissors'
    ) {
      console.log(`You lose! Scissors beats Paper`);
      computerScore++;
    } else if (
      humanChoiceLowercase === 'scissors' &&
      computerChoice === 'rock'
    ) {
      console.log(`You lose! Rock beats Scissors`);
      computerScore++;
    } else if (
      humanChoiceLowercase === 'scissors' &&
      computerChoice === 'paper'
    ) {
      console.log(`You win! Scissors beats Paper`);
      humanScore++;
    } else if (humanChoiceLowercase === computerChoice) {
      console.log("It's a draw!");
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice(CHOICE_OPTIONS));
  }
}

playGame();
