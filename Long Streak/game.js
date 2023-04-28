const buttonColours = ["red", "blue", "green", "yellow"];
let gamepattern = [];
let userpattern = [];
let level = 0;
let check = 0;

$('body').on('keypress click', function(event) {
  if (event.type === 'keypress' || (event.type === 'click' && check === 0)) {
    nextSequence();
    check++;
  }
});

function nextSequence() {
  $('h1').text(`Level ${level}`);
  const randomNumber = Math.floor(Math.random() * buttonColours.length);
  const randomChosenColour = buttonColours[randomNumber];
  gamepattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  userpattern = [];
  level++;
}

$('.btn').click(function() {
  const userChosenColour = $(this).attr('id');
  userpattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  if (userpattern.length === gamepattern.length && checkanswer()) {
    setTimeout(nextSequence, 1000);
  }
});

function playSound(name) {
  const sound = new Audio(`sounds/${name}.mp3`);
  sound.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass('pressed');
  setTimeout(function() {
    $(`#${currentColour}`).removeClass('pressed');
  }, 100);
}

function checkanswer() {
  return userpattern.every((color, index) => color === gamepattern[index]);
}

function mistake() {
  const wrong = new Audio('sounds/wrong.mp3');
  wrong.play();
  $('h1').text('Game over, Press any key to restart');
  $('body').addClass('game-over');
  setTimeout(function() {
    $('body').removeClass('game-over');
  }, 200);
  startover();
}

function startover() {
  level = 0;
  gamepattern = [];
  check = -1;
}
