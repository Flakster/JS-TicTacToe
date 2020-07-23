const gameBoard = () => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const modifyArray = (i, val) => {
    if (board[i].length === 0 && val.length !== 0) {
      board[i] = val;
      return true;
    }
    return false;
  };

  const checkDraw = (player) => {
    const positions = board.filter(x => x !== '');
    if (positions.length === 9) {
      const message = 'Game drawed!';
      player.renderPop(message);
    }
  };

  const checkWin = (player) => {
    if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
      player.renderWinner();
      return;
    }
    if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
      player.renderWinner();
      return;
    }
    if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
      player.renderWinner( );
      return;
    }
    if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
      player.renderWinner( );
      return;
    }
    if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
      player.renderWinner( );
      return;
    }
    if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
      player.renderWinner( );
      return;
    }
    if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
      player.renderWinner( );
      return;
    }
    if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
      player.renderWinner( );
      return;
    }

    checkDraw(player);
  };



  return {
    checkWin,
    modifyArray
  };
};

export default gameBoard;
