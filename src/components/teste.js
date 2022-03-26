function sumCharacters(str) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        result += str.charCodeAt(i);
    }
    return result;
}

// criar uma funcao para gerar numeros aleatorios
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// sort a list of numbers
function sortNumbers(numbers) {
    return numbers.sort(function (a, b) {
        return a - b;
    });
}

// sort a list of strings
function sortStrings(strings) {
    return strings.sort(function (a, b) {
        return a.localeCompare(b);
    });
}
