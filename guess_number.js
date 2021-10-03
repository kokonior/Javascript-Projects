const readLine = require('readline-sync');

let mainlagi = true;

while (mainlagi) {
  const pertanyaan = Math.ceil(Math.random() * 10);
  const benar = false;
  let nyawa = 3;
  while (!benar) {
    if (nyawa === 0) {
      console.log('nyawa habis');
      break;
    } else {
      console.log(`nyawa anda tinggal ${nyawa}`);
    }
    const tebakan = readLine.questionInt('Tebakan? : ');
    if (tebakan > pertanyaan) {
      console.log('angka lebih besar');
    } else if (tebakan < pertanyaan) {
      console.log('angka lebih kecil');
    } else {
      console.log('angka benar');
      break;
    }
    nyawa -= 1;
  }
  if (readLine.keyInYN('Continue Playing?') === false) {
    mainlagi = false;
  }
}
