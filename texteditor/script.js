let tools_div = document.getElementById('tools');
let tools_di = document.getElementsByClassName('tools');
var body = document.getElementsByTagName('body')[0];
var bt = document.getElementById('m');
let dark = false
let tools= [
    {"name": "bold","data":"bold", "icon":"<i class='fas fa-bold'></i>", "on":false },
    {"name": "italic","data":"italic", "icon":"<i class='fas fa-italic'></i>", "on":false },
    {"name": "justify-left","data":"justifyLeft", "icon":"<i class='fas fa-align-left'></i>",  },
    {"name": "justify-center","data":"justifyCenter", "icon":"<i class='fas fa-align-center'></i>", },
    {"name": "justify-right","data":"justifyRight", "icon":"<i class='fas fa-align-right'></i>", },
    {"name": "underline","data":"underline", "icon":"<i class='fas fa-underline'></i>", "on":false },
    {"name": "ordered-list","data":"insertOrderedList", "icon":"<i class='fas fa-list-ol'></i>", },
    {"name": "unordered-list","data":"insertunorderedlList", "icon":"<i class='fas fa-list-ul'></i>", },
    {"name": "heading","data":"formatBlock", "icon":"", "list":['H1', 'H2', 'H3','H4', 'H5', 'H6']},
    {"name": "size","data":"fontSize", "icon":"", "list":[1,2,3,4,5,6,7,8,9,10] },
    {"name": "Background","data":"foreColor", "icon":"" },
    {"name": "colour","data":"hiliteColor", "icon":"" },
      
];
// var mode = document.getElementById('mode');
// mode.addEventListener('click', (e)=>{
    function mode(){
        if(dark){
            body.style.background = "white";
            body.style.color = "black"
            bt.className= 'dark'
            console.log(bt)
            bt.innerHTML = "<i class='fas fa-moon'></i>"
            dark=false
        }else{
            body.style.background = "rgb(14, 0, 29)";
            body.style.color = "white"
            bt.className= 'light'
            console.log(bt)
            bt.innerHTML = "<i class='fas fa-sun'></i>"
            dark=true
        }
        ;
    }
// })

tools.forEach(tool=>{

    // console.log(tool.list)
    if (tool.list) 
    {
        var action = "<select data-command='"+tool.data+"'>";
           
        tool.list.forEach(e=>{
           action += "<option value='"+e+"'>"+e+" </option>";
        })
  
        action += "<\/select>"

        let div = "<div class='' >"+action+"</div>";

        tools_div.innerHTML += div;
       
    }else if(tool.name=="Background" || tool.name=="colour"){
        
        var action = "<input type='color' data-command='"+tool.data+"'>";
        let div = "<div class='' >"+action+"</div>";

        tools_div.innerHTML += div;
    }
    else{
        var action = "<button data-command='"+tool.data+"'> "+ tool.icon +"</button>";
        let div = "<div class='' >"+action+"</div>";

        tools_div.innerHTML += div;
    }
});


let text = document.getElementById('text').focus();
for (let element of tools_di[0].children) {
    if (element.children[0].tagName=== "SELECT") {
        element.children[0].addEventListener("change", ()=>{
            let u = element.children[0].dataset['command'];
            let arg = element.children[0].value;
            console.log(arg)
            document.execCommand(u, false, arg);
            let text = document.getElementById('text').focus();
        
        })
    }
    else if(element.children[0].type === "color"){
        element.children[0].addEventListener("input", ()=>{
            let u = element.children[0].dataset['command'];
            let arg = element.children[0].value;
            console.log(arg)
            document.execCommand(u, false, arg);
            let text = document.getElementById('text').focus();
        
        })
    }
    else{
        element.addEventListener("click", ()=>{
            let u = element.children[0].dataset['command'];
            document.execCommand(u, false,null);
            tools.forEach(tool => {
                if (tool.data == u) {
                    if (tool.on === true) {
                        element.children[0].style.background = 'rgb(228, 228, 228)'
                        tool.on = false
                    }else if(tool.on === false){
                        element.children[0].style.background = 'blue'
                        tool.on = true
                    }
                    
                }
            });
            let text = document.getElementById('text').focus();
         
        })
    }
}