// angka
const elementAngkaPertama = document.querySelector(".panjang");
const elementAngkaKedua = document.querySelector(".lebar");
const elementAngkaKetiga = document.querySelector(".tinggi");

// button
const elementTombolHitung = document.querySelector(".tombol-hitung");

// hasil
const elementHasil = document.querySelector(".hasil");

elementTombolHitung.addEventListener("click", function () {
  const nilaiAngkaPertama = Number(elementAngkaPertama.value);
  const nilaiAngkaKedua = Number(elementAngkaKedua.value);
  const nilaiAngkaKetiga = Number(elementAngkaKetiga.value);

  const hasil = nilaiAngkaPertama * nilaiAngkaKedua * nilaiAngkaKetiga;
  elementHasil.textContent = `Hasilnya adalah ${hasil}`;
});
