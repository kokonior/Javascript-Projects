function pl() {
    let str = document.getElementById("str").value;
    let ot = document.getElementById("ot");

    let vowels = ["a", "e", "i", "o", "u"];

    let newStr = "";
    let stra = str.split(" ");

    for (s in stra) {
        let ss = stra[s];

        if (vowels.indexOf(ss[0]) > -1) {
            newStr += " " + ss + "way";

        } else {
            let firstMatch = ss.match(/[aeiou]/g) || 0;
            let vowel = ss.indexOf(firstMatch[0]);
            newStr += " " + ss.substring(vowel) + ss.substring(0, vowel) + "ay";
        }
    }
ot.innerHTML = newStr;
    ot.innerHTML = newStr;
    ot.innerHTML = newStr;
    ot.innerHTML = newStr;
}
