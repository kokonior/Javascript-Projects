/**
 * a function to check if a word is palindrome
 * @param {string} _word
 */
const isWordPlaindrome = (_word) => {
  const word = _word.replace(/\s/g, "").toLowerCase(); //remove space from words and make the words all lowercase
  const l = word.length; //get the length of the word
  const halfLength = Math.round(l / 2); // get the half length of the word
  for (var i = 0; i < halfLength; i++) {
    //loop to check if every index is the same letter
    if (word.charAt(i) !== word.charAt(l - 1 - i)) {
      return false;
    }
  }
  return true;
};

const TEST_CASE = [
  "racecar", //true
  "developer", //false
  "level", //true
  "mouse", //false
  "radar", //true
  "keyboard", //false
  "Mr Owl ate my metal worm", //true
  "not a palindrome", //false
];

TEST_CASE.forEach((item) => console.log(isWordPlaindrome(item)));
