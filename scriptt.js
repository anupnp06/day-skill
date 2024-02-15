const options = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', playGame);
});

function playGame(event) {
  const playerChoice = event.target.id;
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  const result = getResult(playerChoice, computerChoice);
  displayResult(result);
}

function getResult(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!';
  } else {
    switch(player) {
      case 'rock':
        return (computer === 'scissors') ? 'You win!' : 'Computer wins!';
      case 'paper':
        return (computer === 'rock') ? 'You win!' : 'Computer wins!';
      case 'scissors':
        return (computer === 'paper') ? 'You win!' : 'Computer wins!';
    }
  }
}

function displayResult(result) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = result;
}
