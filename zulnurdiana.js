 <script>

        function Mahasiswa(nama,persona){

            this.nama = nama;
            this.persona = persona;
        }

        Mahasiswa.prototype.dandan = function(jam){
            this.persona += jam;
            console.log(`Halo ${this.nama}, selamat berdandan !`);
        }

        Mahasiswa.prototype.mandi = function (waktu){
            this.persona -= waktu;
            console.log(`Halo ${this.nama}, selamat mandi!`);
        }

        Mahasiswa.prototype.tidur = function (jam){
            this.persona += jam * 5;
            console.log(`Halo ${this.nama}, selamat tidur!`);
        }


        let Mhs1 = new Mahasiswa('Shava',100);
        let Mhs2 = new Mahasiswa('Zulfikar',50);
    </script>
