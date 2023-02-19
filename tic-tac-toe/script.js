const cellElements = document.querySelectorAll('[data-cell]');
const statusElement = document.querySelector('#status');
const restartButton = document.querySelector('#restart-btn');
let xIsNext = true;
let gameIsLive = true;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function computerTurn() {
    const cellElements = document.querySelectorAll('[data-cell]');
    const availableCells = [];
    cellElements.forEach(cell => {
      if (!cell.classList.contains('x') && !cell.classList.contains('o')) {
        availableCells.push(cell);
      }
    });
    const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.classList.add('o');
    checkGameStatus();
  }
  

  function handleCellClick(e) {
    const cell = e.target;
    const currentClass = xIsNext ? 'x' : 'o';
  
    if (!gameIsLive || cell.classList.contains('x') || cell.classList.contains('o')) {
      return;
    }
  
    cell.classList.add(currentClass);
    checkGameStatus();
  
    if (gameIsLive) {
      statusElement.innerHTML = "It's the computer's turn";
      setTimeout(computerTurn, 1000);
    }
  }
  

function checkGameStatus() {
  const cellElements = document.querySelectorAll('[data-cell]');
  const currentClass = xIsNext ? 'x' : 'o';
  let winner = null;

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const cell1 = cellElements[a];
    const cell2 = cellElements[b];
    const cell3 = cellElements[c];

    if (cell1.classList.contains(currentClass) && cell2.classList.contains(currentClass) && cell3.classList.contains(currentClass)) {
        winner = currentClass;
        break;
        }
        }
        
        if (winner) {
        statusElement.innerText = `${winner.toUpperCase()} has won!`;
        gameIsLive = false;
} else if (isBoardFull()) {
statusElement.innerText = "Game is tied!";
gameIsLive = false;
} else {
xIsNext = !xIsNext;
statusElement.innerText = `It's ${xIsNext ? 'X' : 'O'}'s turn`;
}
}

function isBoardFull() {
return [...cellElements].every(cell => cell.classList.contains('x') || cell.classList.contains('o'));
}

function handleRestartClick() {
xIsNext = true;
gameIsLive = true;

for (let i = 0; i < cellElements.length; i++) {
const cell = cellElements[i];
cell.classList.remove('x');
cell.classList.remove('o');
}

statusElement.innerText = `It's ${xIsNext ? 'X' : 'O'}'s turn`;
}

cellElements.forEach(cell => {
cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', handleRestartClick);
