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

