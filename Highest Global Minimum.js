/**PSEUDOCODE
 * 1. Tentukan variable 'minArr1' sama dengan 0
 * 2. Tentukan variable 'minArr2' sama dengan 0
 * 3. FOR pertambahan 1 dengan index awal = 0 dan index akhir = panjang 'firstArr'-1 :
 *      IF index saat ini = 0, THEN:
 *        Tentukan 'minArr1' = variable 'firstArr' dengan index 0
 *      ENDIF
 *      IF variable di 'firstArr' pada index saat ini lebih kecil dari pada 'minArr1', THEN:
 *        Tentukan 'minArr1' = variable 'firstArr' dengan index saat ini
 *      ENDIF
 *    ENDFOR
 * 4. FOR pertambahan 1 dengan index awal = 0 dan index akhir = panjang 'secondArr'-1 :
 *      IF index saat ini = 0, THEN:
 *        Tentukan 'minArr2' = variable 'secondArr' dengan index 0
 *      ENDIF
 *      IF variable di 'firstArr' pada index saat ini lebih kecil dari pada 'minArr2', THEN:
 *        Tentukan 'minArr2' = variable 'secondArr' dengan index saat ini
 *      ENDIF
 *    ENDFOR
 * 5. IF nilai pada 'minArr1' lebih besar dari pada nilai pada 'minArr2', THEN:
 *      return 'minArr1'
 *    ELSE IF nilai pada 'minArr1' lebih kecil dari pada nilai pada 'minArr2', THEN:
 *      return 'minArr2'
 */

function highestGlobalMinimum(firstArr, secondArr) {
    var tempFirstArr = 0;
    var tempSecondArr = 0;
    
    for (var i=0; i<=firstArr.length-1; i++){
      if (i===0){
        tempFirstArr = firstArr[i];
      }else{
        if(firstArr[i]<tempFirstArr){
          tempFirstArr = firstArr[i];
        }
      }
    }
    
    for (var j=0; j<=secondArr.length-1; j++){
      if (j===0){
        tempSecondArr = secondArr[j];
      }else{
        if(secondArr[j]<tempSecondArr){
          tempSecondArr = secondArr[j];
        }
      }
    }
    
    if(tempFirstArr>tempSecondArr){
      return tempFirstArr;
    }else{
      return tempSecondArr;
    }
    
    
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
