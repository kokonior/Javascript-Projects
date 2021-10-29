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
