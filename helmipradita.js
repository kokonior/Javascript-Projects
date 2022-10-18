//program triangle
const printSegitiga = (number) => {
    let string = "";

    for (let i = 1; i <= number; i++) {
        for (let j = 0; j < i; j++) {
            string += i;
        }
        string += `\n`;
    }
    console.log(string);
}
printSegitiga(5);

