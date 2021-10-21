function rotateLeft(array, numberOfRotation) {
    // Write your code here

    for (let i = 0; i < numberOfRotation; i++) {
        const first = array.shift();
        array.push(first);
    }

    return array;

}

console.log(rotateLeft([1,2,3,4,5], 2))
