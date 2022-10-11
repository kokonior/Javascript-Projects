let input=document.getElementById('input-task');
let nothing=document.getElementById('nothing');
let add=document.getElementById('btn');
let display=document.getElementById('display');

add.addEventListener('click',function(){
    if(input.value=='') return;

    display.style.display="block";
    nothing.style.display="none";

    var container=document.createElement('div');
    let checkPara = display.getElementsByTagName('div');
    if(checkPara.length) {
        var hr = document.createElement('hr');
        container.prepend(hr);
    }

    // adding tasks
    var flex=document.createElement('section');
    var content=document.createElement('p');
    var del=document.createElement('span');
    del.innerText = "X";
    content.innerText = input.value;
    input.value='';
    flex.append(content);
    flex.append(del);
    container.prepend(flex);
    display.prepend(container);

    // deleting tasks
    del.addEventListener('click',function(){
        var remove=del.parentElement.parentElement;
        display.removeChild(remove);

        let check = display.getElementsByTagName('div');
        if(!(check.length)){
            display.style.display="none";
            nothing.style.display="flex";
        }
    })
    
})

// keyboard input
input.addEventListener('keypress',function(event){
    if(event.key=='Enter'){
        add.click();
        input.value='';
    }
    
})
