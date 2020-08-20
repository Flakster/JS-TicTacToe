import gameBoard from '../assets/js/gameBoard';

const board = gameBoard();

it('Modifies board if slot is empty on that current position', () => {
  expect(board.modifyArray(0, 'X')).toBe(true);
});

it('Cant modify board if slot is not empty', () => {
  board.modifyArray(0, 'O');
  expect(board.modifyArray(0, 'X')).toBe(false);
});