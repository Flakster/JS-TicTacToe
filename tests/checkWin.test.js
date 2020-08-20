import gameBoard from '../assets/js/gameBoard';

const myBoard = gameBoard();

it('checkWin returns true when the board has a winning combination', () => {
  const board = ['X', '', '', '', 'X', '', '', '', 'X'];
  expect(myBoard.checkWin('player1', board)).toBe(true);
});

it('checkWin returns false when the board does not have a winning combination', () => {
  const board = ['X', '', '', '', '0', '', '', '', 'X'];
  expect(myBoard.checkWin('player1', board)).toBe(false);
});
