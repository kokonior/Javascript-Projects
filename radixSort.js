function radixSort(arr) {
	const maxValue = Math.max(...arr)
	const maxDigitCount = maxValue.toString().length

	// Iterate over digit places
	for (let place = 0; place < maxDigitCount; place++) {
		// Create digit buckets: [[], [], [], []. []. [], [], [], [], []]
		let digit_buckets = Array.from({ length: 10 }, () => [])

		// Iterate over the numbers
		for (let i = 0; i < arr.length; i++) {
			// Get digit in place
			let digit = Math.floor(arr[i] / Math.pow(10, place)) % 10
			// Push the number to its corresponding bucket
			digit_buckets[digit].push(arr[i])
		}

        // extract numbers from bucket and fill the original list
		arr = [].concat(...digit_buckets)
	}

	return arr
}

console.log(radixSort([233, 0, 45, 23, 56, 7, 16, 5433]))
