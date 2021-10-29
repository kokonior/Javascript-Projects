let flag=0;
let position=1;
let exp;
const display = document.querySelector(".display");
const keys=document.querySelectorAll('input');
const scroller=document.querySelector(".circle");

function reset(){
    display.textContent='0';
    exp='0';
    flag=0;
}

function del(){
    if(exp.length==1){
        flag=0;
        display.textContent='0';
        return;
    }
  exp=exp.slice(0,-1);
  display.textContent=exp;
  

}
