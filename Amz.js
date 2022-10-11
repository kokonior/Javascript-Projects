const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
    ["Lisbon","Portugal"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));
console.log(capital.get("Lisbon"));
console.log(capital.size);

/* output
3
England
4
India
 */
