//split() digunakan untuk membagi string ke array string, sebagai contoh dibawah ini digunakan untuk memisah huruf dari var kata = 'helmipradita' dan hasil split akan berubah menjadi array

var kata = 'helmipradita'
var hasil = kata.split('')
console.log(hasil)

//unshift() digunakan untuk memasukkan value ke sebuah array tetapi disimpan di bagian depan array, seperti contoh var hewan1 = ['ayam', 'sapi', 'kerbau'] ingin menambahkan data 'kambing' di paling depan maka memakai fungsi unshift()
var hewan1 = ['ayam', 'sapi', 'kerbau']
hewan1.unshift('kambing')
console.log(hewan1)

//shift() digunakan untuk menghapus value ke sebuah array tetapi di sorting pada bagian depan array, seperti contoh var hewan2 = ['ayam', 'sapi', 'kerbau'] ingin menhapus data 'ayam' di paling depan maka memakai fungsi shift()
var hewan2 = ['ayam', 'sapi', 'kerbau']
hewan2.shift('ayam')
console.log(hewan2)
