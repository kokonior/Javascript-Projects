author
Ahmad Muhardian
· 20 Sep 2018
Pemrograman Javascript: Langkah Awal Belajar Javascript
#Javascript
Belajar Pemrograman Javascript dari Nol
Javascript adalah bahasa pemrograman yang wajib kamu pelajari jika ingin mendalami dunia web development.

Saat ini javascript tidak hanya digunakan di sisi client (browser) saja. Javascript juga digunakan pada server, console, program desktop, mobile, IoT, game, dan lain-lain.

Hal ini membuat javascript semakin populer dan menjadi bahasa yang paling banyak digunakan di Github.

Hasil survey Github 2017
Pada artikel ini, kita akan belajar Javascript dari dasar. Mulai dari pengenalan Javascript, hingga membuat program pertama dengan Javascript.

Siap?

Mari kita mulai…


Apa itu javascript?
Javascript adalah bahasa pemrograman yang awalnya dirancang untuk berjalan di atas browser.

Namun, seiring perkembangan zaman, javascript tidak hanya berjalan di atas browser saja. Javascript juga dapat digunakan pada sisi Server, Game, IoT, Desktop, dsb.

Javascript awalnya bernama Mocha, lalu berubah menjadi LiveScript saat browser Netscape Navigator 2.0 rilis versi beta (September 1995). Namun, setelah itu dinamai ulang menjadi Javascript. 1

Terinspirasi dari kesuksesan Javascript, Microsoft mengadopsi teknologi serupa. Microsoft membuat ‘Javascript’ versi mereka sendiri bernama JScript. Lalu di tanam pada Internet Explorer 3.0.

Hal ini mengakibatkan ‘ perang browser’, karena JScript milik Microsoft berbeda dengan Javascript racikan Netscape.

Akhirnya pada tahun 1996, Netscape mengirimkan standarisasi ECMA-262 ke Ecma International. Sehingga lahirlah standarisasi kode Javascript bernama ECMAScript atau ES. Saat ini ECMAScript sudah mencapai versi 8 (ES8). 2

Versi ECMAScript	Tahun Rilis
ES 1	Juni 1997
ES 2	Juni 1998
ES 3	Desember 1999
ES 4	Terbengkalai
ES 5	Desember 2009
ES 5.1	Juni 2011
ES 6	Juni 2015
ES 7	Juni 2016
ES 8	Juni 2017
Peralatan untuk Belajar Javascript
Apa saja perlatan yang harus disiapkan untuk belajar Javascript?

Web Browser (Google Chrome, Firefox, Opera, dll)
Teks Editor (rekomendasi: VS Code)
Itu saja?

Ya itu saja sudah cukup. Bila kamu ingin belajar Javacript dari Nodejs, silahkan baca: Pengenalan Nodejs untuk Pemula.

Rekomendasi saya: belajar Javascript dari sisi client dulu. Nanti Nodejs belakangan.


Mengenal Console JavaScript
Ada yang mengatakan, belajar javascript itu susah, karena saat melihat hasilnya di web browser, pesan error-nya tidak tampil. Pendapat ini tidak benar. Karena kita bisa melihatnya melalui console.

Console Javascript dapat kita buka melalui Inspect Element->Console.

Console Mozilla Firefox
Di dalam console, kita bisa menulis fungsi atau kode-kode javascript dan hasilnya akan langsung ditampilkan.

Misalnya, mari kita coba kode berikut:

console.log("Hi apa kabar!");
alert("Saya sedang belajar javascript");
Maka hasilnya:

Console Javascript Mozilla Firefox
Jika kamu menggunakan Nodejs, maka cara mengakses console adalah dengan mengetik perintah node pada Terminal.

Console Javascript di Nodejs
Setelah mencoba console Javascript, maka dapat kita simpulkan:

Console bisa digunakan untuk mengujicoba fungsi atau kode Javascript;
Console dapat kita gunakan untuk melihat pesan error saat debugging program.
…apa lagi ya?
Membuat Program Javascript Pertama
Sudah paham cara membuka dan menggunakan console javascript?

Bagus…

Kalau begitu, mari kita buat program pertama dengan Javascript.

Silahkan buka teks editor, kemudian buat file baru bernama hello_world.html dan isi dengan kode berikut:

<!DOCTYPE html>
<html>
<head>
    <title>Hello World Javascript</title>
</head>
<body>
    <script>
        console.log("Saya belajar Javascript");
        document.write("Hello World!");
    </script>
</body>
</html>
Jika kamu menggunakan teks editor VS Code, maka akan terlihat seperti ini:

Menulis program javascript di teks editor VS Code
Silahkan disimpan dengan nama hello_world.html, kemudian buka file tersebut dengan web browser.





<!DOCTYPE html>
<html>
    <head>
        <title>Belajar Javascript dari Nol</title>
        <script>
            // ini adalah penulisan kode javascript
            // di dalam tag <head>
            console.log("Hello JS dari Head");
        </script>
    </head>
    <body>
        <p>Tutorial Javascript untuk Pemula</p>
        <script>
            // ini adalah penulisan kode javascript
            // di dalam tag <body>
            console.log("Hello JS dari body");
        </script>
    </body>
</html>
