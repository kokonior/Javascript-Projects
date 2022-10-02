function dedupe(array) {
  return [...new Set(array)];
}

const noDupesArray = dedupe([1, 2, 1, 4, 7, 3, 1]);

// output: [1, 2, 4, 7, 3]
console.log(noDupesArray);

for(let i=0; i<=10; i++){
  i;
}
