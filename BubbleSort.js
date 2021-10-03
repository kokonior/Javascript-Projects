const data1 = [4, 2, 5, 1, 3];
const data2 = [3, 2, 1];
const data3 = [9, 1, 2, 6, 5, 3, 7, 8];

const bubbleSort = (data, type = 'asc') => {
  let x;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < data.length; i++) {
      if (type === 'asc') {
        if (data[i] > data[i+1]) {
         x = data[i];
         data[i] = data[i+1];
         data[i+1] = x; 
        } 
      } else {
        if (data[i] < data[i+1]) {
          x = data[i];
          data[i] = data[i+1];
          data[i+1] = x;
        }
      }
    } 
  }
  
  return data;
}

console.log(bubbleSort(data1, 'desc')); // 5, 4, 3, 2, 1
console.log(bubbleSort(data2)); // 1, 2, 3
console.log(bubbleSort(data3)); // 1, 2, 3, 5, 6, 7, 8, 9
