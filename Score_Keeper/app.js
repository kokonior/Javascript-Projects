
    const p1 = {
        score: 0,
        button: document.querySelector('#p1Button'),
        display: document.querySelector('#p1Display')
    }
    const p2 = {
        score: 0,
        button: document.querySelector('#p2Button'),
        display: document.querySelector('#p2Display')
    }

    const resetButton = document.querySelector('#reset');
    const winningScoreSelect = document.querySelector('#playto');
    let winningScore = 3;
    let gameOver = false;

    function updateScores(player, opponent) {
       if (!gameOver) {
           player.score += 1;
           if(player.score === winningScore) {
               gameOver = true;
               player.display.classList.add('winner');
               opponent.display.classList.add('loser');
               player.button.disabled = true;
               opponent.button.disabled = true;
           }
           player.display.textContent = player.score;
       }
    }

    p1.button.addEventListener('click', function () { 
        if(winningScoreSelect.value !== "" && winningScoreSelect.value !== "0")
        updateScores(p1, p2)
        else 
        alert("Enter winning score!!!")
    })
     p2.button.addEventListener('click', function () {
        if(winningScoreSelect.value !== "" && winningScoreSelect.value !== "0")
        updateScores(p2, p1)
        else 
        alert("Enter winning score!!!")
    })

    winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

    function reset() {
    gameOver = false;
    for (p of [p1,p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false;
    }
}




/****** Detailed and long method to do the same code  *****/

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const resetButton = document.querySelector('#reset');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
// const winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3;
// let gameOver = false;

// p1Button.addEventListener('click', function () {
//     if(!gameOver){
//         p1Score += 1;
//         if(p1Score === winningScore){
//             gameOver = true;
//             p1Display.classList.add('winner');
//             p2Display.classList.add('loser');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// })

// p2Button.addEventListener('click', function () {
//     if(!gameOver){
//         p2Score += 1;
//         if(p2Score === winningScore){
//             gameOver = true;
//             p2Display.classList.add('winner');
//             p1Display.classList.add('loser');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// })

// winningScoreSelect.addEventListener('change', function() {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//     gameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
//     p1Display.classList.remove('winner', 'loser');
//     p2Display.classList.remove('winner', 'loser');
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }

