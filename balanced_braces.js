function validBraces(braces){
    const matches = { '(':')', '{':'}', '[':']' };
    let stack = [];
    let currentChar;

    for (let i = 0; i < braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) { // opening braces
            stack.push(currentChar);
        } else { // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}

console.log(validBraces('[](([{}]))'))
