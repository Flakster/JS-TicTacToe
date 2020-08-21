const gameBoard = () => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const modifyArray = (i, val) => {
    if (board[i].length === 0 && val.length !== 0) {
      board[i] = val;
      return true;
    }
    return false;
  };

  const checkDraw = (player, arr = false) => {
    const board2 = arr || board;
    const positions = board2.filter(x => x !== '');
    if (positions.length === 9) {
      return true;
    }
    return false;
  };

  const checkWin = (player, arr = false) => {
    const board2 = arr || board;
    if (board2[0] !== '' && board2[0] === board2[1] && board2[1] === board2[2]) {
      return true;
    }
    if (board2[3] !== '' && board2[3] === board2[4] && board2[4] === board2[5]) {
      return true;
    }
    if (board2[6] !== '' && board2[6] === board2[7] && board2[7] === board2[8]) {
      return true;
    }
    if (board2[0] !== '' && board2[0] === board2[3] && board2[3] === board2[6]) {
      return true;
    }
    if (board2[1] !== '' && board2[1] === board2[4] && board2[4] === board2[7]) {
      return true;
    }
    if (board2[2] !== '' && board2[2] === board2[5] && board2[5] === board2[8]) {
      return true;
    }
    if (board2[0] !== '' && board2[0] === board2[4] && board2[4] === board2[8]) {
      return true;
    }
    if (board2[2] !== '' && board2[2] === board2[4] && board2[4] === board2[6]) {
      return true;
    }

    // return checkDraw(player);
    return false;
  };


  return {
    board,
    checkWin,
    checkDraw,
    modifyArray,
  };
};

export default gameBoard;