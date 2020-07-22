const gameBoard = () => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const slots = document.getElementsByClassName('slot');
  // Verify use of this function ---> OPTIONAL.
  const displayArray = () => {
    for (let i = 0; i < board.length; i += 1) {
      slots[i].innerHTML = board[i];
    }
  };
  // Work on this function
  const modifyArray = (i, val) => {
    if (board[i].length === 0 && val.length !== 0) {
      board[i] = val;
      return true;
    }
    return false;
  };


  return {
    slots,
    displayArray,
    modifyArray,
    board,
  };
};

export default gameBoard;
