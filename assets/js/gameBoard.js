const gameBoard = () => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const slots = document.getElementsByClassName('slot');

  const modifyArray = (i, val) => {
    if (board[i].length === 0 && val.length !== 0) {
      board[i] = val;
      return true;
    }
    return false;
  };


  return {
    slots,
    modifyArray,
    board,
  };
};

export default gameBoard;
