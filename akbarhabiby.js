// * run with node akbarhabiby.js _input-text_

const [, , ...inputs] = process.argv;
const input = [...inputs].join(" ");
const board = [
  ["*", "*", "*", 10],
  ["*", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b"],
];
const arrOfNums = [
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
  [[3, 5, 1], [1, 5, 3], [1]],
  [[2]],
];

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

const reverseText = (text = "") => {
  return text
    .split("")
    .map((_, i) => text[text.length - (1 + i)])
    .join("");
};

const vocalSeeker = (board = [[]], vocals = "AIUEO") => {
  const result = board
    .map((arr) =>
      arr
        .map((el) =>
          typeof el === "string"
            ? vocals.split("").find((v) => v === el.toUpperCase())
              ? el
              : ""
            : ""
        )
        .join("")
    )
    .join("");
  return `vokal ditemukan ${result.length} dan kumpulan vokal adalah ${result}`;
};

const deepSum = (input = [[[]]], sum = 0) => {
  input.forEach((l1) => l1.forEach((l2) => l2.forEach((l3) => (sum += l3))));
  return sum; // * not fully dynamic
};

console.log("FizzBuzz =>", fizzBuzz(), "\n");
console.log("ReverseText =>", reverseText(input ? input : "Hello World"), "\n");
console.log("VocalSeeker =>", vocalSeeker(board), "\n");
console.log("DeepSum =>", deepSum(arrOfNums));
