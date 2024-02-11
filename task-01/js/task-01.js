

const wordsArray = ["apple", "banana", "orange", "kiwi", "grape", "illustration", "example", "embarasment", "free", "most", "cool"];
const n = 5

function longWordsFilter (array, wordLength) {
    let filteredWords = []
    for(const word of array) {
        if(wordLength < word.length) {
            filteredWords.push(word)
        }
    }
    return filteredWords;
}

let result = longWordsFilter(wordsArray, n)

console.log(result);