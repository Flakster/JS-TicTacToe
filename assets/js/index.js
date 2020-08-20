/* eslint-disable import/extensions */
import player from './player.js';
import gameBoard from './gameBoard.js';
import DOM from './objectsDOM.js';
import '../stylesheets/style.css';
/* eslint-enable import/extensions */

const response = (index, player, board, slot, status) => {
  const response = board.modifyArray(index, player.val);
  if (response) {
    slot.innerHTML = player.val;
    status = !status;
    slot.style.cursor = 'default';
  }

  return {
    status,
    player,
  };
};

const checkPlay = (board, player) => {
  if (board.checkWin(player)) {
    const message = player.renderWinner();
    player.renderPop(message);
  } else if (board.checkDraw(player)) {
    const message = 'Game drawed!';
    player.renderPop(message);
  }
};

const init = (name1, name2) => {
  DOM().modifyElementsDOM(name1);
  const board = gameBoard();
  const player1 = player(name1, 'X');
  const player2 = player(name2, 'O');
  let player1turn = true;
  Array.from(DOM().slots).forEach((slot, i) => {
    slot.addEventListener('click', () => {
      if (player1turn) {
        const { status, player } = response(
          i,
          player1,
          board,
          slot,
          player1turn,
        );
        player1turn = status;
        if (!player1turn) {
          DOM().header.innerHTML = `${player2.name} Turn`;
        }
        checkPlay(board, player);
      } else {
        const { status, player } = response(
          i,
          player2,
          board,
          slot,
          player1turn,
        );
        player1turn = status;
        if (player1turn) {
          DOM().header.innerHTML = `${player1.name} Turn`;
        }
        checkPlay(board, player);
      }
    });
  });
};

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', e => {
  e.preventDefault();
  const inputs = document.getElementsByTagName('input');

  if (inputs[0].value.length !== 0 && inputs[1].value.length !== 0) {
    init(inputs[0].value, inputs[1].value);
  } else if (inputs[0].value === '') {
    inputs[0].setCustomValidity('Cant be empty');
    inputs[0].reportValidity();
  } else {
    inputs[1].setCustomValidity('Cant be empty');
    inputs[1].reportValidity();
  }
});