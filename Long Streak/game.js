var buttonColours = ["red","blue","green","yellow"];
var gamepattern = [];
var userpattern = [];
var level = 0;
var check = 0;

$("body").keypress(function () {
    nextSequence();
});

$("body").click(function () {
    if (check == 0)
        nextSequence();
    check++;
})

function nextSequence() {
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamepattern.push(randomChosenColour);
    // console.log(gamepattern);
    setTimeout(function () {
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        
    }, 1000);
    userpattern = [];
    level++;
}

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userpattern.push(userChosenColour);

    // console.log(userpattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    if (userpattern.length <= gamepattern.length) {
        var flag = checkanswer();
    }
    if (flag == 1 && userpattern.length==gamepattern.length)
        nextSequence();
});



function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
    
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkanswer() {
    var flag = 1;
    for (var i = 0; i < userpattern.length; i++)
    {
        if (userpattern[i] != gamepattern[i]) {
            mistake();
            flag = 0;
        }
        else
            continue;
    }
    return flag;
}

function mistake() {
    // console.log("mistake");
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("h1").text("Game over, Press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    startover();
    // setTimeout(nextSequence(), 1000);
}

function startover() {
    level = 0;
    gamepattern = [];
    check = -1;
    // nextSequence();
}