function theme1(){
    document.querySelector("body").style.background="hsl(222, 26%, 31%)"
    document.querySelector(".keypad").style.background="hsl(223, 31%, 20%)"
    document.querySelector(".display").style.background="hsl(224, 36%, 15%)"    
    for (let i = 0; i < keys.length-3; i++) {
        keys[i].style.background="hsl(30, 25%, 89%)"
        keys[i].style.boxShadow=" 0 3px 1px 0px hsl(28, 16%, 65%)";
        keys[i].style.color="hsl(221, 14%, 31%)";0
        keys[i].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")
    }

    keys[15].style.background="hsl(6, 63%, 50%)";
    keys[15].style.boxShadow="0 3px 1px 0px hsl(6, 70%, 34%)";
    keys[15].style.color="hsl(0, 0%, 100%)";
    keys[15].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")

    keys[16].style.background="hsl(225, 21%, 49%)";
    keys[17].style.background="hsl(225, 21%, 49%)";

    keys[16].style.boxShadow="0 3px 1px 0px hsl(224, 28%, 35%)";
    keys[17].style.boxShadow="0 3px 1px 0px hsl(224, 28%, 35%)";
    keys[16].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")
    keys[17].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")

    display.style.color="hsl(0, 0%, 100%)";

    document.querySelector(".top").style.color="hsl(0, 0%, 100%)";

    document.querySelector(".scroll").style.background="hsl(223, 31%, 20%)"

    document.querySelector(".circle").style.background="hsl(6, 63%, 50%)"

    }

function theme2(){
    document.querySelector("body").style.background="hsl(0, 0%, 90%)"
    document.querySelector(".keypad").style.background="hsl(0, 5%, 81%)"
    document.querySelector(".display").style.background="hsl(0, 0%, 93%)"
    for (let i = 0; i < keys.length-3; i++) {
        keys[i].style.background="hsl(45, 7%, 89%)"
        keys[i].style.boxShadow=" 0 3px 1px 0px hsl(35, 11%, 61%)";
        keys[i].style.color="hsl(60, 10%, 19%)";
        keys[i].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")
    }

    keys[15].style.background="hsl(25, 98%, 40%)";
    keys[15].style.boxShadow="0 3px 1px 0px hsl(25, 99%, 27%)";
    keys[15].style.color="hsl(0, 0%, 100%)";
    keys[15].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")


    keys[16].style.background="hsl(185, 42%, 37%)";
    keys[17].style.background="hsl(185, 42%, 37%)";
    keys[16].style.boxShadow="0 3px 1px 0px hsl(185, 58%, 25%)";
    keys[17].style.boxShadow="0 3px 1px 0px hsl(185, 58%, 25%)";
    keys[16].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")
    keys[17].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")

    display.style.color="hsl(60, 10%, 19%)";

    document.querySelector(".top").style.color="hsl(60, 10%, 19%)";

    document.querySelector(".scroll").style.background="hsl(0, 5%, 81%)";

    document.querySelector(".circle").style.background="hsl(25, 98%, 40%)";

    key

}

function theme3(){

    document.querySelector("body").style.background="hsl(268, 75%, 9%)"
    document.querySelector(".keypad").style.background="hsl(268, 71%, 12%)"
    document.querySelector(".display").style.background="hsl(268, 71%, 12%)"
    for (let i = 0; i < keys.length-3; i++) {
        keys[i].style.background="hsl(268, 47%, 21%)";
        keys[i].style.boxShadow=" 0 3px 1px 0px  hsl(290, 70%, 36%)";
        keys[i].style.color="hsl(52, 100%, 62%)";
        keys[i].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")
    }

    keys[15].style.background="hsl(176, 100%, 44%)";
    keys[15].style.boxShadow="0 3px 1px 0px hsl(177, 92%, 70%)";
    keys[15].style.color='hsl(198, 20%, 13%)';
    keys[15].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")
    

    keys[16].style.background="hsl(281, 89%, 26%)";
    keys[17].style.background="hsl(281, 89%, 26%)";
    keys[16].style.boxShadow="0 3px 1px 0px hsl(285, 91%, 52%)";
    keys[17].style.boxShadow="0 3px 1px 0px hsl(285, 91%, 52%)";
    keys[16].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")
    keys[17].setAttribute("style","input:active,input::backdrop {box-shadow: none;outline: 0;}")


    display.style.color="hsl(52, 100%, 62%)";

    document.querySelector(".top").style.color="hsl(52, 100%, 62%)";

    document.querySelector(".scroll").style.background="hsl(268, 71%, 12%)"

    document.querySelector(".circle").style.background="hsl(176, 100%, 44%)"


}

for (let i = 0; i < keys.length-3; i++) {
    keys[i].addEventListener("click", concat);
}

keys[15].addEventListener('click',calculate);
keys[16].addEventListener('click',reset);
keys[17].addEventListener('click',del);
scroller.addEventListener("click",move);
