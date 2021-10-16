function merge(left, right){
  let array = [];
  //break out of loop if any array gets empty
  while (left.length && right.length){
     //Find the smaller among the smallest elements of left and right subarrays
     if (left[0] < right[0]){
        array.push(left.shift());
     }else{
        array.push(right.shift());
     }
  }
  //This is where we are going to concatenate the leftover elements
  return [...array, ...left, ...right];
}

function merge_sort_algorithm(array){
  const half = array.length /2;
  
  if (array.length < 2){
     return array;
  }
  
  const left = array.splice(0, half);
  return merge(merge_sort_algorithm(left), merge_sort_algorithm(array));
}

let array = [41, 18, 9, 7, 2, 11, 1, 3];
console.log(merge_sort_algorithm(array))