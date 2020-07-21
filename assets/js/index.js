const gameBoard = () => {

    let board = ['', '', '', '', '', '', '', '', ''];
    let slots = document.getElementsByClassName('slot')
    let index;

    const displayArray = () => {
        for (let i = 0; i < board.length; i += 1) {
            slots[i].innerHTML = board[i]
        }

    }

    const modifyArray = (i, val) => {
        if (board[i].length === 0 && val.length !== 0) {
            board[i] = val
            return true
        } else {
            console.log('The position is already taken.')
            return false
        }
    }



    for (let i = 0; i < board.length; i += 1) {
        // ModifyArray?
        slots[i].addEventListener('click', function() {
            index = i;
        })

    }


    return {
        index,
        displayArray,
        modifyArray,
        board,
    }
};

const player = (name, val) => {
    const checkWin = (board) => {
        return true

    }
    return {
        checkWin,
        name,
        val,
    }
}

const init = () => {
    let header = document.getElementsByTagName('h5')[0]
    let board = gameBoard()
    let player1 = player('Player 1', 'X')
    let player2 = player('Player2', 'O')
    let result = true
    let player1turn = true


    if (player1turn) {
        header.innerHTML = 'Player 1 turn'
        let res = board.modifyArray(board.index, player1.val)
        if (res) {
            board.displayArray()
            player1 = false
        } else {
            alert('Please choose another position.')
        }
    } else {
        header.innerHTML = 'Player 2 turn'
        let res = board.modifyArray(board.index, player2.val)

    }
}

init()