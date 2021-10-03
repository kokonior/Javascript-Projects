var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if ( penumpang == 0 ) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array dan keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for ( var i = 0; i < penumpang.length; i++ ){
			// jika ada kursi yang kosong
			if ( penumpang[i] == undefined ) {
				// tambah penumpah di kursi tersebut
				penumpang[i] = namaPenumpang;
				// kembarikan isi array dan keluar dari function
				return penumpang;
			} else if ( penumpang[i] == namaPenumpang) {
				console.log(namaPenumpang + ' sudah ada di dalam angkot ! ');
				return penumpang;
			} else if ( i == penumpang.length - 1 ) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}		
	}

}

var hapusPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong 
	if ( penumpang.length == 0 ){
		console.log( 'Angkot sudah kosong, tidak perlu dihapus ')
		return penumpang;

	} else {
		for ( i = 0; i < penumpang.length; i++ ) {
			if ( penumpang[i] == namaPenumpang ) {
				penumpang[i] = undefined;
				return penumpang;
			} else if ( i == penumpang.length - 1 ) {
				console.log( namaPenumpang + ' tidak ada di dalam angkot');
				return penumpang;
			} 
		}
	}
}
