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
