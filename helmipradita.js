//split() digunakan untuk membagi string ke array string, sebagai contoh dibawah ini digunakan untuk memisah huruf dari var kata = 'helmipradita' dan hasil split akan berubah menjadi array
var kata = 'helmipradita'
var hasil = kata.split('')
console.log(hasil)

// push() digunakan untuk menambahkan satu atau lebih elemen ke akhir sebuah array.
let makanan = ["Nasi Pecel", "Nasi Goreng", "Soto Ayam"];
let tambah = makanan.push("Bakso");
console.log(makanan);

//unshift() digunakan untuk memasukkan value ke sebuah array tetapi disimpan di bagian depan array, seperti contoh var hewan1 = ['ayam', 'sapi', 'kerbau'] ingin menambahkan data 'kambing' di paling depan maka memakai fungsi unshift()
var hewan1 = ['ayam', 'sapi', 'kerbau']
hewan1.unshift('kambing')
console.log(hewan1)

//shift() digunakan untuk menghapus value ke sebuah array tetapi di sorting pada bagian depan array, seperti contoh var hewan2 = ['ayam', 'sapi', 'kerbau'] ingin menhapus data 'ayam' di paling depan maka memakai fungsi shift()
var hewan2 = ['ayam', 'sapi', 'kerbau']
hewan2.shift('ayam')
console.log(hewan2)

// // filter() digunakan untuk mencari elemen di dalam array sesuai kriteria tertentu.
let number = [1, 3, 2, 4, 7, 5, 6, 8];
let ganjilGenap = number.filter(num => num % 2 == 0 ? true : false);
console.log(ganjilGenap);

// reduce() digunakan untuk mengeksekusi fungsi callback pada setiap elemen array, hasil kalkulasi elemen sebelumnya digunakan untuk kalkulasi elemen berikutnya.
let angka = [1, 2, 3, 4, 5];
let result = angka.reduce((nilaiSebelumnya, nilaiSekarang) => {
    return nilaiSebelumnya + nilaiSekarang;
});
console.log(result);

const printGenapGajil = (number) => {
    for(let i = 1; i <= number; i++){
        if(i%2==0){
            console.log(`${i} merupakan bilangan genap`);
        } else {
            console.log(`${i} merupakan bilangan ganjil`);
        }
    }
}
printGenapGajil(5);

const printSegitiga = (number) => {
    let string = "";

    for (let i = 1; i <= number; i++) {
        for (let j = 0; j < i; j++) {
            string += i;
        }
        string += `\n`;
    }
    console.log(string);
}
printSegitiga(5);
