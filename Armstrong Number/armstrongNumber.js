// Check if an number is an Armstrong number
//Armstrong number is a number that is equal to the sum of cubes of its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers.

export const isArmstrongNumber = (num) => {
    if (num < 9) return true
    let length = String(num).length
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10
        sum += digit ** length
        temp = Math.floor(temp / 10)
    }
    return sum === num
};
