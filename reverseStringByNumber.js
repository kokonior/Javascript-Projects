//Reverse string if input is 123456 and 3 then output will be 321654

function reverseStringByNumber1(inputString, value){
    let stringToReverse = inputString.slice(0,value);
    let restOfTheString = inputString.slice(value);
    stringToReverse = [...stringToReverse].reverse().join('');
    return stringToReverse+restOfTheString;
}

function reverseStringByNumber(inputString, value){
    let stringArray = [...inputString];
        let i=0,j=value-1;
        while(i<j){
            [stringArray[i],stringArray[j]] = [stringArray[j],stringArray[i]];
            i++;
            j--;
        }
    return stringArray.join('');
}

console.log(reverseStringByNumber('123456',3));
// Output: 321456
