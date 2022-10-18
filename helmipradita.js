//program triangle
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


//program diskon
const discount = (jumlah, harga) => {
    let total = jumlah * harga;
    let potongan = 0;
    let subTotal = total - potongan;

    if(total <= 60000) {
        subTotal = total;
        console.log(`harga dibawah 60000`);
    } else if(total >= 60000) {
        potongan = total * 0.35;
        if(potongan <= 50000) {
            subTotal = total - potongan;
            console.log(`harga dibawah 60000 dan potongan sama dengan 50000`);
        } else {
            potongan = 50000;
            subTotal = total - potongan;
            console.log(`harga diatas 60000 dan potongan diatas 50000`);
        }
    } 
    console.log(`Total Harga : ${total} `);
    console.log(`Potongan    : ${potongan} `);
    console.log(`SubTotal    : ${subTotal} `);
}

discount(3,25000);
