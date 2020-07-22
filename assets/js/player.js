
const player = (name, val) => {
  // Here is is to check the game logic

  const renderPop = (slots, message, header) => {
    // const board = document.getElementsByClassName('container')[0];
    // board.classList.add('d-none');
    const mainTitle = document.getElementsByTagName('h1')[0];
    mainTitle.style.color = '#ffff';
    header.classList.add('d-none');
    const pop = document.getElementsByClassName('position-absolute')[0];
    pop.classList.remove('d-none');
    document.body.style.background = '#f6f6f6';
    const { children } = pop;

    const popUp = children[0].children[0];

    popUp.innerHTML = message;
    children[0].children[1].addEventListener('click', () => {
      window.location.reload();
    });
  };

  const renderWinner = ({
    slots,
  }, header) => {
    const message = `${name} WINS!`;
    renderPop(slots, message, header);
  };

  const checkDraw = ({ slots, board }, header) => {
    const positions = board.filter(x => x !== '');
    if (positions.length === 9) {
      const message = 'Game drawed!';
      renderPop(slots, message, header);
    }
  };

  const checkWin = (
    gameBoard, header,
  ) => {
    const { board } = gameBoard;
    if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
      renderWinner(gameBoard, header);
      return;
    }
    if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
      renderWinner(gameBoard, header);
      return;
    }
    if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
      renderWinner(gameBoard, header);
      return;
    }
    if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
      renderWinner(gameBoard, header);
      return;
    }
    if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
      renderWinner(gameBoard, header);
      return;
    }
    if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
      renderWinner(gameBoard, header);
      return;
    }
    if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
      renderWinner(gameBoard, header);
      return;
    }
    if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
      renderWinner(gameBoard, header);
      return;
    }

    checkDraw(gameBoard, header);
  };

  return {
    checkWin,
    name,
    val,
  };
};

export default player;