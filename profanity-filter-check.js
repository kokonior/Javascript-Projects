const badWordsRegex = new RegExp('\\b(' +
        'c[a4]+t|'+
        'd[o0]+g' +
    ')\\b', 'ig');

const input = "bird snake cat fish c4t catfish birddog D00000000G";

const censored = input.replace(badWordsRegex,
    badWord => "*".repeat(badWord.length)
);

console.log(censored);
