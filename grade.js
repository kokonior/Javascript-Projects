grade=prompt("Masukan Grade Nilai (A,B,C,D,E)")

switch(grade){

   case 'A': bobot=4

   break

   case 'B': bobot=3

   break

   case 'C': bobot=2

   break

   case 'D': bobot=1

   break

   default :bobot=0

}

document.write("Bobot nilai = "+bobot)
