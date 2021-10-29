let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;
let low = 1;
let high = 100;

function updateRange() {
  const rangeOutput = document.getElementById("rangeOutput");
  rangeOutput.innerText = `${low} - ${high}`;
  rangeOutput.style.marginLeft = low + "%";
  rangeOutput.style.marginRight = 100 - high + "%";
  rangeOutput.classList.add("flash");

  const lowValue = document.getElementById("low");
  lowValue.style.flex = low + "%";
  lowValue.style.background = "#ef7b54";

  const space = document.getElementById("space");
  space.style.flex = high - low + "%";
  space.style.background = "#83E1D0";

  const highValue = document.getElementById("high");
  if (high == 100) highValue.style.flex = 0;
  highValue.style.flex = 100 - high + "%";
  highValue.style.background = "#ef7b54";
}

