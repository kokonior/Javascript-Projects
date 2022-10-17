// push() digunakan untuk menambahkan satu atau lebih elemen ke akhir sebuah array.
let makanan = ["Nasi Pecel", "Nasi Goreng", "Soto Ayam"];
let tambah = makanan.push("Bakso");
console.log(makanan);

// pop() digunakan untuk menghapus elemen terakhir dari array, pop tidak menerima parameter.
let minuman = ["Es Teh", "Es Jeruk", "Air Putih"];
let hapus = minuman.pop();
console.log(minuman);

//unshift() digunakan untuk memasukkan value ke sebuah array tetapi disimpan di bagian depan array, seperti contoh var hewan1 = ['ayam', 'sapi', 'kerbau'] ingin menambahkan data 'kambing' di paling depan maka memakai fungsi unshift()
var hewan1 = ['ayam', 'sapi', 'kerbau']
hewan1.unshift('kambing')
console.log(hewan1)

//shift() digunakan untuk menghapus value ke sebuah array tetapi di sorting pada bagian depan array, seperti contoh var hewan2 = ['ayam', 'sapi', 'kerbau'] ingin menhapus data 'ayam' di paling depan maka memakai fungsi shift()
var hewan2 = ['ayam', 'sapi', 'kerbau']
hewan2.shift('ayam')
console.log(hewan2)
