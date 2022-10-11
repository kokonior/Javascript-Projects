var answerMessage=document.getElementById('answer');
var buttons=document.getElementsByClassName('colourButton');
var heading;
heading=document.getElementById('colourValue');

function setButtonColour(button,red,green,blue){
   button.setAttribute('style','background-color: rgb('+ red +','+ green +','+ blue +');' )
}
var wincolour=document.getElementsByTagName('body');
function makeColourValue(){
  return Math.round(Math.random()*255);
}
function startGame(){
answerMessage.innerHTML=""; 
var answerButton=Math.round(Math.random()*(buttons.length-1));
setButtonColour(wincolour[0],248,248,248);
var i = 0;
function change() {
  var doc = document.getElementById("resetButton");
  var color = ["yellow", "blue", "brown", "violet"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 2000);
for(var i=0;i<buttons.length;i++){
var red=makeColourValue();
var green=makeColourValue();
var blue=makeColourValue();
setButtonColour(buttons[i],red,green,blue);
  if(i==answerButton){
  heading.innerHTML=`(${red},${green},${blue})`;
  }
  buttons[i].addEventListener('click',function(){
  if(this==buttons[answerButton]){
    answerMessage.innerHTML="Correct!";
    
    setButtonColour(wincolour[0],0,255,0);
  }else{
	  count+=1;
    answerMessage.innerHTML="Wrong answer! Guess again!";
	
  }
});
 }
}
document.getElementById('resetButton').addEventListener('click',startGame);