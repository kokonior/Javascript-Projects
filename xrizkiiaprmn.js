import readlineSync from "readline-sync";

function mergeName(data) {
  return data.reduce(
    (previousValue, currentValue) => previousValue + ` ${currentValue}`
  );
}

console.info(
  "Tools Penggabung Nama\nSilahkan Masukkan Nama Anda Sesuai Intruksi DIbawah Ini!\n"
);
const firstName = readlineSync.question(`Nama Depan\t: `);
const middleName = readlineSync.question(`Nama Tengah\t: `);
const LastName = readlineSync.question(`Nama Belakang\t: `);

console.info(mergeName([firstName, middleName, LastName]));
#HACKTOBERFEST2022
