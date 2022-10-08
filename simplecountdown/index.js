//simple countdown

var count = 10;

function countDown() {
    if (count > 0) {
        count--;
        console.log(count);
    } else {
        console.log("Blast off!");
    }
}
    
setInterval(countDown, 1000);

// Language: javascript
// Path: simplecountdown\index.js
