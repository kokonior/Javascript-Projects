const name = prompt('Welcome, \nInput your name:').trim();
const age  = Number(prompt('Input your age:'));
let subjectPrefix;

switch(age) {
  case age > 20:
    subjectPrefix = 'Mr/Ms';
    break;
  default:
    subjectPrefix = 'boys/girls';
}

alert(`Welcome ${subjectPrefix} ${name}, to our Hacktoberfest !`);