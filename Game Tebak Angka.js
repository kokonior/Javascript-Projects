var lagi = true;
while(lagi){
//Komputer membangkitkan angka random
  var random = Math.round(Math.random() * 10);
  console.log(random);

// Player melakukan input (menebak)
var guest = prompt('Pilihlah Angka Antara 1 - 10! \n(Anda Cuma Memiliki Tiga Kali Kesempatan)');
// Alur Permainan
var hasil ='';
for (var chance = 3; chance >=1; chance--){//3 2 1
    if(guest == random){
        hasil = 'BENAR';
        alert('Angka Tebakan Anda ' +hasil+'.');
        break;
    } else if (guest != random && chance > 1) {
        hasil = (guest < random) ? 'Terlalu RENDAH' : 'Terlalu TINGGI';
        guest = prompt('Angka Tebakan Anda ' + hasil + '\nCoba Tebak Lagi:)');
    } else if (guest != random && chance == 1) {
        hasil = "SALAH";
        alert('Angka Tebakan Anda '+ hasil +'\nKesempatan Anda Sudah Habis');
    } else {
        hasil = ('Angka Yang Anda Masuekan Lebih Besar Dari 10!!');
    }
    
}
var lagi = confirm ('Apakah Anda Ingin Bermain Lagi?');

}
alert('Terima Kasih Sudah Bermain!!');