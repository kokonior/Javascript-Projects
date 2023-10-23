const judul = document.getElementById('judul');
judul.style.fontWeight = 800;
judul.style.fontSize = '50px';
judul.style.color = 'white';
judul.style.backgroundColor = 'grey';

const a = document.getElementById('a');
a.style.color = 'red';

const paragraf1 = document.getElementsByTagName('p');
for (i=0; i<paragraf1.length; i++){
    paragraf1[i].style.backgroundColor = 'lightgreen';
}

const anchor = document.getElementsByTagName('a');
anchor[0].style.backgroundColor = 'lightgrey';

const paragraf2 = document.getElementsByClassName('p2');
paragraf2[0].style.fontSize = '100px';

const paragraf22 = document.querySelector ('section#a p.p2');
paragraf22.innerHTML ='Bima';

const list = document.querySelectorAll
('section#b ul li:nth-child(2)');
list[0].style.color ='red';
list[0].innerHTML = 'Bima';
list[0].style.backgroundColor ='lightgrey';

const section1 = document.querySelectorAll('#a a');
section1[0].style.fontSize = '100px'
