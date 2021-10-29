let board = [
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 1, 0]
];

//first loop for 4 nested array
function change1tox(board) {
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (board[i][j] === 1) {
                board[i][j] = 'x'
            }
        }

    }
    return board
}

//second function increment around x position
function increment(board) {
    let newBoard = [...(change1tox(board))]
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (board[i][j] === 'x') {
                for (let row = i - 1; row < i + 2; row++) {
                    for (let col = j - 1; col < j + 2; col++) {
                        if (row >= 0 && col >= 0 && row <= 3 && col <= 3 && newBoard[row][col] !== 'x') {
                            newBoard[row][col]++
                        }
                    }
                }

            }
        }


    }
    return newBoard
}
=======
console.log(increment(board))
console.log(increment(board))
console.log(increment(board))

