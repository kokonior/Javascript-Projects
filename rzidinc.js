const triangles = {
  normalTriangle: (num) => {
    let out = "";
    for (let i = 0; num >= i; i++) {
      console.log("*".repeat(i));
    }
    return out;
  },

  ascTriangle: (num) => {
    let out = "";
    for (let i = 0; num >= i; i++) {
      if (i > 0) {
        out += " ".repeat(num - (i - 1)) + "*".repeat(i) + "\n";
      }
    }
    return out;
  },

  normalReverseTriangle: (num) => {
    let out = "";
    for (let i = 0; num >= i; i++) {
      out += "*".repeat(num - i) + "\n";
    }
    return out;
  },

  reverseAscTriangle: (num) => {
    let out = "";
    for (let i = 0; num > i; i++) {
      out += " ".repeat(i) + "*".repeat(num - i) + "\n";
    }
    return out;
  }
};

const {
  normalTriangle,
  ascTriangle,
  normalReverseTriangle,
  reverseAscTriangle
} = triangles;

const countLoop = 6;

console.log("Normal Triangle");
console.log(normalTriangle(countLoop));

console.log("Ascending Triangle");
console.log(ascTriangle(countLoop));

console.log("Normal Reverse Triangle");
console.log(normalReverseTriangle(countLoop));

console.log("Reverse Ascending Triangle");
console.log(reverseAscTriangle(countLoop));
