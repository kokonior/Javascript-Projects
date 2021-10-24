const holes = document.querySelectorAll(".hole"),
    scoreBoard = document.querySelector(".score"),
    moles = document.querySelectorAll(".mole"),
    start = document.querySelector(".start");
let lastHole,
    timeUp = false,
    score = 0,
    flag = 0,
    timeout1,
    timeout2;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHoles(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHoles(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHoles(holes);
    hole.classList.add("up");
    timeout1 = setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();
    timeout2 = setTimeout(() => (timeUp = true), 20000);
}

function bonk(e) {
    if (!e.isTrusted) return;
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
    console.log(e);
}

start.addEventListener("click", () => {
    if (flag == 0) {
        startGame();
        start.textContent = "Stop!";
        flag = !flag;
    } else if (flag == 1) {
        start.textContent = "Start!";
        holes.forEach((e) => e.classList.remove("up"));
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        flag = !flag;
    }
});
moles.forEach((e) => e.addEventListener("click", bonk));
