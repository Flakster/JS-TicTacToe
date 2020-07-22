export const gameBoard = () => {

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
