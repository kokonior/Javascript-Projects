//detecting button press
var numberDrumButtons= document.querySelectorAll(".drum").length;

for(var i=0; i<numberDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick()
{

  this.style.color= "lavender";

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

}


//detecting keyboard press

document.addEventListener("keydown" , function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound (key)
{
  switch (key) {
    case "w":
    var tom1= new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;

      case "a":
      var tom1= new Audio("sounds/tom-2.mp3");
      tom1.play();
        break;

        case "s":
        var tom1= new Audio("sounds/tom-3.mp3");
        tom1.play();
          break;

          case "d":
          var tom1= new Audio("sounds/tom-4.mp3");
          tom1.play();
            break;

            case "j":
            var tom1= new Audio("sounds/snare.mp3");
            tom1.play();
              break;

              case "k":
              var tom1= new Audio("sounds/crash.mp3");
              tom1.play();
                break;

                case "l":
                var tom1= new Audio("sounds/kick-bass.mp3");
                tom1.play();
                  break;


    default:console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey)
{
  //assigning a class called .pressed to it so that it shows that behaviours

  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout( function(){
    document.querySelector("." + currentKey).classList.remove("pressed");
  } , 100);

  //100 is the time in milliseconds
}
