import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from './setup';

class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  showGameStatus(gameWin) {
    const div = document.createElement('div');
    div.classList.add('game-status');
    div.innerHTML = `${gameWin ? 'YOU WIN!' : 'GAME OVER!'}`;
    this.DOMGrid.appendChild(div);
  }

  createGrid(level) {
    //when a new game is started, the dotcount is set back to 0
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid.innerHTML = '';
    //this will make the grid dynamic
    this.DOMGrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);`;

    //Loop through each element in the array with our level
    level.forEach((square, i) => {
      const div = document.createElement('div');
      // set the class on newly created div element to be square. Then we add another class depending on the value in each square from the LEVEL array, in the Setup.js file, that we loop through (that's what the CLASS_LIST[square] does.)
      div.classList.add('square', CLASS_LIST[square]);
      div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`;
      this.DOMGrid.appendChild(div);
      //push the div to the this.grid array.
      this.grid.push(div);
      if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
    });
  }

  addObject(pos, classes) {
    //the position (pos) is where in the grid we want to apply the classes.
    this.grid[pos].classList.add(...classes);
  }

  removeObject(pos, classes) {
    //removes class in the grid
    this.grid[pos].classList.remove(...classes);
  }

  objectExist = (pos, object) => {
    //checking to see if the passed in class named 'object' is present at the current grid position
    return this.grid[pos].classList.contains(object);
  };
  //rotates pacman on the grid
  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`;
  }

  moveCharacter(character) {
    if (character.shouldMove()) {
      const { nextMovePos, direction } = character.getNextMove(
        this.objectExist
      );
      const { classesToRemove, classesToAdd } = character.makeMove();

      if (character.rotation && nextMovePos !== character.pos) {
        this.rotateDiv(nextMovePos, character.dir.rotation);
        this.rotateDiv(character.pos, 0);
      }
      this.removeObject(character.pos, classesToRemove);
      this.addObject(nextMovePos, classesToAdd);

      character.setNewPos(nextMovePos, direction);
    }
  }

  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);
    return board;
  }
}

export default GameBoard;
