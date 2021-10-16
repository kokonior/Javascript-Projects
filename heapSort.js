//simple swap function
function swap(input, index_A, index_B) {
  var temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}


function max_heapify(array, index, length) {
  let left = 2 * index; //left child index
  let right = 2 * index + 1; //right child index
  let maximum;
  if (right < length) { //Right child exists?
    if (array[left] >= array[right]) { //compare children to find maximum
      maximum = left;
    } else {
      maximum = right;
    }
  } else if (left < length) { //Left child exists?
    maximum = left;
  } else {
    return; //no children -> return
  }
  if (array[index] < array[maximum]) { //check if the largest child is greater than the parent
    swap(array, index, maximum); //it is? Swap both!
    max_heapify(array, maximum, length); //all over again!
  }
}

function heap_sort(array) {
  let length = array.length;
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    max_heapify(array, i, length); //hear we build the max heap
  }
  for (let i = length - 1; i >= 0; i--) {
    swap(array, 0, i); //delete the root element
    max_heapify(array, 0, i); //build max heap again
  }
  return array;
}

let array = [8, 4, 7, 1, 3, 5];
console.log(heap_sort(array))