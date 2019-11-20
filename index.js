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


function objectSelect(obj, callback) {
    var matchingPairs = {}

    for (k in obj) {
        if (callback(obj[k], k)) {
            matchingPairs[obj[k]] = k
        }
    }
    return matchingPairs;
}

function divisibleByFivePairSum(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i += 1) {
        var num1 = array[i];
        for (var j = i + 1; j < array.length; j += 1) {
            var num2 = array[j];
            var sum = num1 + num2;
            if (sum % 5 === 0) {
                newArr.push([i, j])
            }
        }
    }

    return newArr;
}