const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

function concatArraysAndFilterDuplicates (firstArray, secondArray) {
    let concatedArray = firstArray.concat(secondArray);
    let uniqueNumbers = [];
    for (let i = 0; i < concatedArray.length; i++) {
        let isUnique = true;
        for (let k = 0; k < i; k++) {
            if (concatedArray[i] === concatedArray[k]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueNumbers.push(concatedArray[i]);
        }
    }
    return uniqueNumbers;
}

let result = concatArraysAndFilterDuplicates(arrayA, arrayB);
console.log(result);

// в деяких випадках було важко, але просив підказку у чата гпт так як деякі моменти були трішки незрозумілими, а і ще був пропущений break що робило мій for фактично нескінченним
