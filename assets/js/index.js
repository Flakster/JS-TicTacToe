const gameBoard = () => {

    let board = ['', '', '', '', '', '', '', '', ''];
    let slots = document.getElementsByClassName('slot')
        //Verify use of this function
    const displayArray = () => {
            for (let i = 0; i < board.length; i += 1) {
                slots[i].innerHTML = board[i]
            }

        }
        //Work on this function
    const modifyArray = (i, val) => {
        if (board[i].length === 0 && val.length !== 0) {
            board[i] = val
            return true
        } else {
            console.log('The position is already taken.')
            return false
        }
    }


    return {
        slots,
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

const response = (index, player, board, slots, header, status) => {
    let response = board.modifyArray(index, player.val)
    if (response) {
        header.innerHTML = `${player.name} turn`
        slots[index].innerHTML = player.val
        return !status
    } else {
        return status
        alert("Please choose another position")
    }

}

const init = () => {
    let header = document.getElementsByTagName('h5')[0]
    let board = gameBoard()
    let player1 = player('Player 1', 'X')
    let player2 = player('Player2', 'O')
        // let result = true
    let player1turn = true

    for (let i = 0; i < board.slots.length; i++) {
        board.slots[i].addEventListener('click', function() {
            if (player1turn) {
                player1turn = response(i, player1, board, board.slots, header, player1turn)

            } else {
                player1turn = response(i, player2, board, board.slots, header, player1turn)
            }
        })
    }
}




init()