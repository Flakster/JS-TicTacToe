
export const player = (name, val) => {
    // Here is is to check the game logic
    const checkWin = (
        gameBoard, header
    ) => {
        let board = gameBoard.board
        if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
            renderWinner(gameBoard, header)
            return;
        }
        if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
            renderWinner(gameBoard, header)
            return;
        }
        if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
            renderWinner(gameBoard, header)
            return;
        }
        if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
            renderWinner(gameBoard, header)
             return;
        }
        if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
            renderWinner(gameBoard, header)
            return;
        }
        if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
            renderWinner(gameBoard, header)
            return;
        }
        if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
            renderWinner(gameBoard, header)
            return;
        }
        if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
            renderWinner(gameBoard, header)
            return;
        }

        checkDraw(gameBoard,header)
        

    }

    const checkDraw = ({slots,board},header)=>{
        let positions= board.filter(x=>{
            return x !== ''
        })
        if(positions.length === 9){
            let message = "Game drawed!"
            renderPop(slots,message,header)
        } 
        
    }

    const renderWinner = ({
        slots
    }, header) => {
        
        let message = `${name} WINS!`
        renderPop(slots,message,header)
        
    }

    const renderPop=(slots,message,header)=>{
        let board = document.getElementsByClassName('container')[0]
        board.classList.add('d-none')
        header.classList.add('d-none')
        let pop = document.getElementsByClassName('rounded')[0]
        pop.classList.add('d-block')

        document.body.style.background = '#f6f6f6'
        let children = pop.children
        let popUp = children[0]

        popUp.innerHTML = message
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