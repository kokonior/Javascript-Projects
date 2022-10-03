//convert from romawi to numeric
function romawiToNumber(romawi){
    var angka = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var huruf = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var i=12;
    var hasil = 0;
    while(i>=0 && romawi.length>0){
        if(romawi.substring(0,huruf[i].length)==huruf[i]){
            hasil += angka[i];
            romawi = romawi.substring(huruf[i].length,romawi.length);
        }else{
            i--;
        }
    }
    return hasil;
}