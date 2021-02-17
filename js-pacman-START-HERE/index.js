import { LEVEL, OBJECT_TYPE } from './setup';
import GameBoard from './GameBoard';
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
const gameOver = (pacman, grid) => {};

const checkCollision = (pacman, ghosts) => {};

const gameLoop = (pacman, ghosts) => {};

const startGame = () => {};
