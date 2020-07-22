import {player} from './player.js'
import {gameBoard} from './gameBoard.js'

const response = (index, player, board, slots,status) => {
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

const init = (name1, name2) => {
    let containers = document.getElementsByClassName("container")
    console.log(containers)
    containers[1].classList.add('d-none')
    containers[1].classList.remove('d-flex')
    containers[0].classList.remove('d-none') 
    let header = document.getElementsByTagName('h5')[0]
    header.innerHTML= `${name1} Turn`
    header.classList.remove('d-none')
    let board = gameBoard()
    let player1 = player(name1, 'X')
    let player2 = player(name2, 'O')
        // let result = true
    let player1turn = true

    for (let i = 0; i < board.slots.length; i++) {
        board.slots[i].addEventListener('click', function() {
            if (player1turn) {

                let {
                    status,
                    player
                } = response(i, player1, board, board.slots, player1turn)
                player1turn = status
                if (!player1turn) {
                    header.innerHTML = `${player2.name} Turn`
                }

                player.checkWin(board, header)
            } else {

                let {
                    status,
                    player
                } = response(i, player2, board, board.slots,player1turn)
                player1turn = status;
                if (player1turn) {
                    header.innerHTML = `${player1.name} Turn`
                }

                player.checkWin(board, header)

            }
        })
    }
}




const startBtn = document.getElementById("startBtn")
startBtn.addEventListener('click', function(e){
    let form = document.getElementsByTagName('form')[0]
    // Prevent default refreshing
    e.preventDefault()
  let inputs = document.getElementsByTagName("input")

    if(inputs[0].value.length !==0 && inputs[1].value.length !== 0){
     init(inputs[0].value, inputs[1].value)
    }else if(inputs[0].value === ''){
        inputs[0].setCustomValidity("Cant be empty")
        inputs[0].reportValidity()
    }else{
        inputs[1].setCustomValidity("Cant be empty")
        inputs[1].reportValidity()
    }
});

