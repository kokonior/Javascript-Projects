myList= document.querySelector('.myList');
tasks = document.getElementsByTagName('LI');
for(let i=0; i<tasks.length; i++){
	var span = document.createElement('span');
    span.innerHTML = 'Remove';
    span.className='close';
  tasks[i].appendChild(span);
  tasks[i].addEventListener('click',function(){ tasks[i].classList.toggle('checked');
  });
    }
del();
function add(){
	var input = document.getElementById('title');
    input_text = input.value;
    if(input_text =="")
    {alert("EMPTY");
    //break;
    }
    //document.write(input_text);
    var li =document.createElement('li');
    li.innerHTML = input_text;
    var span = document.createElement('span');
    span.innerHTML = 'Remove';
    span.className='close';
    li.appendChild(span);
    myList.appendChild(li);
    input.value ="";
    del();
    }
function del(){
del_keys = document.getElementsByTagName('span');
for(let i=0; i<del_keys.length; i++){
	del_keys[i].addEventListener('click', function(){del_keys[i].parentElement.style.display = 'none';});
    }
    }
