import { LEVEL, OBJECT_TYPE } from './setup';
import GameBoard from './GameBoard';
import Pacman from './Pacman';
//DOM ELEMENTS
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

//GAME CONSTANTS
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//INITIAL SETUP
let score, timer, gameWin, powerPillActive, powerPillTimer;

score = 0;
timer = null;
gameWin = false;
powerPillActive = false;
powerPillTimer = null;

//GAME FUNCTIONS
function gameOver(pacman, grid) {}

function checkCollision(pacman, ghosts) {}

function gameLoop(pacman, ghosts) {
  gameBoard.moveCharacter(pacman);
}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;
  startButton.classList.add('hide');
  gameBoard.createGrid(LEVEL);
  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
  document.addEventListener('keydown', (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist)
  );
  timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED);
}

//INITIALIZE GAME
startButton.addEventListener('click', startGame);
