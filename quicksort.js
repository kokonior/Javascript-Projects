function partition(array, left, right, pivot) {
    let swapElement = () => {
        const tmp = array[left];
        array[left] = array[right];
        array[right] = tmp;
    }

    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }

        while (array[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swapElement();
            left++;
            right--;
        }
    }

    return left;
}

function quicksort(array, left, right) {
    if (left >= right) {
        return;
    }

    const pivot = array[Math.floor((right + left) / 2)];
    const pivotIndex = partition(array, left, right, pivot)

    if (left < pivotIndex - 1) {
        quicksort(array, left, pivotIndex - 1);
    }

    if (pivotIndex < right) {
        quicksort(array, pivotIndex, right);
    }

    return array
}

function main(array) {
    if (!array || !array.length) {
        return [];
    }

    if (array.length === 1) {
        return array;
    }

    if (array.length === 2 && array[0] > array[1]) {
        return [array[1], array[0]];
    }

    return quicksort(array, 0, array.length - 1);
}

const unorderedArray = Array.from({length: 50}, () => Math.floor(Math.random() * 50));
console.log('Unordered array', unorderedArray)
console.log('Sorted array', main(unorderedArray))
