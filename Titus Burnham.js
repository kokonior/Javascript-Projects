const timeEl = document.getElementById("countdown-timer");
const word = document.getElementById("spellCheck");
const scoreEl = document.getElementById("scoreBoard");
//const remains constant throughout, let can be updated
let time = 11;
let score = 0;
scoreEl.innerHTML = score;
const words = ['sigh',
'tense',
'airplane',
'ball',
'pies',
'juice',
'warlike',
'bad',
'north',
'dependent',
'steer',
'silver',
'highfalutin',
'superficial',
'quince',
'eight',
'feeble',
'admit',
'drag',
'loving'
];

function getRandomElement () {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToH3 () {
    document.getElementById("word").innerHTML = getRandomElement();
}

var countdown = setInterval(updateTime,1000);

function updateTime () {
    time--;
    timeEl.innerHTML = time;

    if(time == 0)
    {
        clearInterval(countdown);
        document.getElementById("spellCheck").disabled = true;
        document.getElementById("word").innerHTML = "TIME UP!";
    }
}

addWordToH3();

function updateTime2() {
    time += 2;
    timeEl.innerHTML = time;
}

function updateScore () {
    score += 1;
    scoreEl.innerHTML = score;
}
//the main happening, here we add an event listener with an input to check out for any changes in the input text field. We pass element to the function so as we can target the input text field
word.addEventListener('input',function(element) {
    const submission = element.target.value;
    if(submission === document.getElementById("word").innerHTML) {
        updateTime2();
        addWordToH3();
        // to clear the input area after word entered is correct
        element.target.value = "";
        updateScore();
    }
});
