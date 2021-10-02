// * Fizz-Buzz
const fizzBuzz = (min = 1, max = 100) => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    let temp = [];
    if (i % 3 === 0) temp.push("Fizz");
    if (i % 5 === 0) temp.push("Buzz");
    arr.push(temp.length > 0 ? temp.join("") : i);
  }
  return arr;
};

console.log("FizzBuzz =>", fizzBuzz());
