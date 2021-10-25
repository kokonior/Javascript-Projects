const button = document.querySelector('button');
const bge = document.querySelector('.man');
const col = document.querySelector('.color');
col.innerHTML='#27e9c9';

button.addEventListener('click',()=>{
    let color = '#';
    const random = Math.random().toString(16).slice(2,8);
    color+=random;
    bge.style.backgroundColor = color;
    col.innerHTML=color;
})