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

console.log(increment(board))
console.log(increment(board))
console.log(increment(board))
