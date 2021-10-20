const number = parseInt(prompt("Masukan angka: "));

if (number > 0) {
    console.log("Angka "+number+" adalah bilangan positif");
}

else if (number == 0) {
  console.log("Angka "+number+" adalah nol");
}

else {
     console.log("Angka "+number+" adalah bilangan negatif");
}