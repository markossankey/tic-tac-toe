let board = Array(9).fill(null)

const clicked = (id) => {
    let currentPlayer = document.getElementById('current-player');
    const solutions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    
    if (currentPlayer.innerHTML == "X") {
        board[id] = currentPlayer.innerText;
        document.getElementById(id).innerText = currentPlayer.innerText;
        document.getElementById(id).setAttribute('disabled', false)

        for (i = 0; i < solutions.length; i ++) {
            let [a, b, c] = solutions[i]
            
            if (board[a] && board[a] == board[b] && board[a] == board[c]) {
                console.log('winner is ' + currentPlayer.innerText)
                displayWinner(currentPlayer);
            }
        }
        currentPlayer.innerHTML = "O"
    }
    else {
        board[id] = currentPlayer.innerText;
        document.getElementById(id).innerText = currentPlayer.innerText;
        document.getElementById(id).setAttribute('disabled', false)

        for (i = 0; i < solutions.length; i ++) {
            let [a, b, c] = solutions[i]
            
            if (board[a] && board[a] == board[b] && board[a] == board[c]) {
                console.log('winner is ' + currentPlayer.innerText)
                displayWinner(currentPlayer);
            }
        }
        currentPlayer.innerHTML = "X"
    }

function displayWinner(currentPlayer) {
    for (i = 0; i < 9; i ++) {
        document.getElementById("" + i).setAttribute('disabled', false)
    }
    document.getElementById('winner').innerText = currentPlayer.innerText
    document.getElementById('winning-screen').style.visibility = "visible"
    
}

    
    

    //console.log(board)
}