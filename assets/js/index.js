
/* eslint-disable import/extensions */

import player from './player.js';
import gameBoard from './gameBoard.js';

/* eslint-enable import/extensions */

const response = (index, player, board, slots, status) => {
  const response = board.modifyArray(index, player.val);
  if (response) {
    slots[index].innerHTML = player.val;
    status = !status;
  } else {
    /* eslint-disable no-alert */
    alert('Please choose another position');
    /* eslint-enable no-alert */
  }

  return {
    status,
    player,
  };
};

const init = (name1, name2) => {
  const containers = document.getElementsByClassName('container');
  const screen = document.getElementsByClassName('container-fluid')[0];
  containers[1].classList.add('d-none');
  screen.classList.add('d-none');
  containers[1].classList.remove('d-flex');
  containers[0].classList.remove('d-none');
  const header = document.getElementsByTagName('h5')[0];
  header.innerHTML = `${name1} Turn`;
  header.classList.remove('d-none');
  const board = gameBoard();
  const player1 = player(name1, 'X');
  const player2 = player(name2, 'O');
  // let result = true
  let player1turn = true;
  Array.from(board.slots).forEach((slot, i) => {
    slot.addEventListener('click', () => {
      if (player1turn) {
        const {
          status,
          player,
        } = response(i, player1, board, board.slots, player1turn);
        player1turn = status;
        if (!player1turn) {
          header.innerHTML = `${player2.name} Turn`;
        }

        player.checkWin(board, header);
      } else {
        const {
          status,
          player,
        } = response(i, player2, board, board.slots, player1turn);
        player1turn = status;
        if (player1turn) {
          header.innerHTML = `${player1.name} Turn`;
        }

        player.checkWin(board, header);
      }
    });
  });
};


const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', (e) => {
  // Prevent default refreshing
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