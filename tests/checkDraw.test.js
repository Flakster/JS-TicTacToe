import gameBoard from '../assets/js/gameBoard';

const myBoard = gameBoard();

it('checkDraw returns true on a full board and no winning combinations', () => {
  const board = ['X', '0', 'X', '0', '0', 'X', '0', 'X', '0'];
  expect(myBoard.checkDraw('player1', board)).toBe(true);
});

it('checkDraw returns false on a winning combination', () => {
  const board = ['X', '0', 'X', '0', '', 'X', '0', 'X', 'X'];
  expect(myBoard.checkDraw('player1', board)).toBe(false);
});