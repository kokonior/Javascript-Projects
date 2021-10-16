function selectionSort(unorderedArray) {

    if (!unorderedArray || !unorderedArray.length) {
        return;
    }

    if (unorderedArray.length === 1) {
        return unorderedArray;
    }

    if (unorderedArray.length === 2) {
        if (unorderedArray[0] > unorderedArray[1]) {
            return [unorderedArray[1], unorderedArray[0]]
        }

        return unorderedArray;
    }

    for (let i = 0; i < unorderedArray.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < unorderedArray.length; j++) {
            if (unorderedArray[j] < unorderedArray[minIndex]) {
                minIndex = j
            }

            if (j === unorderedArray.length - 1) {
                const tmp = unorderedArray[i]
                unorderedArray[i] = unorderedArray[minIndex]
                unorderedArray[minIndex] = tmp
            }
        }
    }

    return unorderedArray
}
