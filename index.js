function removeVowels(word) {
    var vowels = 'aieou';
    var newWord = [];
    var vowelCount = 0;

    for (var i = word.length - 1; i >= 0; i -= 1) {
        var char = word[i];

        if (vowels.indexOf(char) > -1 && vowelCount === 0) {
            newWord.unshift(char);
            vowelCount += 1;
        } else if (vowels.indexOf(char) > -1) {
            continue;
        } else {
            newWord.unshift(char);
        }
    }

    return newWord.join('');
}

function reverseHipsterfy(sentence) {
    var words = sentence.split(' ');
    var hipWords = [];
    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];
        var hipWord = removeVowels(word);
        hipWords.push(hipWord);
    }

    return hipWords.join(' ');
}
