const gameBoard = () => {

    let board = ['', '', '', '', '', '', '', '', ''];
    let slots = document.getElementsByClassName('slot')
        //Verify use of this function ---> OPTIONAL.
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
    // Here is is to check the game logic
    const checkWin = (
        gameBoard, header
    ) => {
        let board = gameBoard.board
        if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
            renderWinner(gameBoard, header)
        }
        if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
            renderWinner(gameBoard, header)
        }
        if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
            renderWinner(gameBoard, header)
        }
        if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
            renderWinner(gameBoard, header)
        }
        if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
            renderWinner(gameBoard, header)
        }
        if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
            renderWinner(gameBoard, header)
        }
        if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
            renderWinner(gameBoard, header)
        }
        if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
            renderWinner(gameBoard, header)
        }


        return false

    }

    const renderWinner = ({
        slots,
        board
    }, header) => {
        header.classList.add('d-none')
        for (let i = 0; i < slots.length; i += 1) {
            slots[i].classList.add('d-none')
        }
        let pop = document.getElementsByClassName('rounded')[0]
        pop.classList.add('d-block')

        document.body.style.background = '#f6f6f6'
        let children = pop.children
        let popUp = children[0]

        let drawArray = board.filter(x => {
            return x !== ''
        })

        if (drawArray.length === 9) {
            console.log("Game drawed!")
        }
        console.log(`this is drawArray ${drawArray}`)

        popUp.innerHTML = `${name} WINS!`
        children[1].addEventListener('click', function() {
            location.reload()
        })
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
        slots[index].innerHTML = player.val
        status = !status
    } else {
        alert("Please choose another position")


    }

    return {
        status,
        player
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

                let {
                    status,
                    player
                } = response(i, player1, board, board.slots, header, player1turn)
                player1turn = status
                if (!player1turn) {
                    header.innerHTML = `${player2.name} Turn`
                }

                player.checkWin(board, header)

                // alert(`${player.name} is the winner!`)

            } else {

                let {
                    status,
                    player
                } = response(i, player2, board, board.slots, header, player1turn)
                player1turn = status;
                if (player1turn) {
                    header.innerHTML = `${player1.name} Turn`
                }

                player.checkWin(board, header)

            }
        })
    }
}




init()