//soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

daftarHewan.sort()

// daftarHewan.forEach(item => console.log(item));
for (i = 0; i < daftarHewan.length; i++) {
    console.log(daftarHewan[i])
};

//soal 2
function introduce(name, age, address, hobby) {
    name = data.name;
    age = data.age;
    address = data.address;
    hobby = data.hobby;
    var text = "Nama saya " + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby;
    return text;
}

var data = {
    name: "John",
    age: 30,
    address: "Jalan Pelesiran",
    hobby: "Gaming"
};

var perkenalan = introduce(data)
console.log(perkenalan)

//soal 3
function hitung_huruf_vokal(nama) {
    var hasil = (nama.match(/[aiueo]/gi).length)
    return hasil;
}

console.log(hitung_huruf_vokal('Agil'));


//soal 4
function hitung(angka) {
    var hasil = angka * 2 - 2;
    return hasil

}
console.log(hitung(3))