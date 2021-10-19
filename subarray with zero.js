// Given an integer array, check if it contains a subarray having zero - sum.

// For example:

// Input: { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

// Output: Subarray with zero - sum exists

// The subarrays with a sum of 0 are:

// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

let checkSubbary = (number) => {
    let data = 0
    number.forEach(item => data = data + parseInt(item))
    if (data == 0) {
        return "Subarray with zero - sum exists"
    } else {
        return "Subarray with zero - sum not exists"
    }
}

console.log(checkSubbary([3, 4, - 7]))