var tanya = true;
while(tanya){

// pilihan player
var p = prompt('Pilih : gajah, semut, orang');

// pilihan komputer
// membangkitkan bilangan random
var com = Math.random();

if (com < 0.34){
    com = 'gajah';
} else if (com >= 0.34 && com < 0.67){
    com = 'semut';
} else {
    com = 'orang'
}

//rules
var hasil = '';
if (p == com ){
    hasil = 'SERI';
} else if (p == 'gajah'){
    hasil = (com == 'orang') ? 'MENANG' : 'KALAH';
} else if (p == 'orang'){
    hasil = (com == 'gajah') ? 'KALAH' : 'MENANG';
} else if (p == 'semut'){
    hasil = (com == 'orang') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'Pilihan Yang Anda Masukkan Salah!!'
}

//hasil
alert('Anda Memilih: '+p+' Dan Komputer Memilih: ' +com+'\nMaka Hasilnya : Kamu '+hasil);

tanya = confirm('Ingin Bermain Lagi?')
}

alert('Terima Kasih Sudah Bermain');
