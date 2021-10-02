// * run with node akbarhabiby.js _input-text_

const [, , ...inputs] = process.argv;
const input = [...inputs].join(" ");
const board = [
  ["*", "*", "*", 10],
  ["*", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b"],
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

console.log("FizzBuzz =>", fizzBuzz(), "\n");
console.log("ReverseText =>", reverseText(input ? input : "Hello World"));
console.log(vocalSeeker(board));
