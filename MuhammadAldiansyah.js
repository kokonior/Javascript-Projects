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

function concat(){
    if(flag==0 && this.value=='-'){
        display.textContent=this.value; 
        exp=this.value;
        flag++;             
    }
    if(flag===0 && this.value<=9 ){
            display.textContent=this.value; 
            exp=this.value;
            flag++;
    }
    else if(flag>0){ 
        if(Number(exp[exp.length-1])<=9 ){
            if(this.value=='x'){
             display.textContent+='*'; 
             exp+='*';
            }
            else{
            display.textContent+=this.value; 
            exp+=this.value; 
            }
        }
        else if(Number(this.value)<=9){
            display.textContent+=this.value; 
            exp+=this.value;
        }
    }
         
}
