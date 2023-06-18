// Mínimo
// function min(firstValue, secondValue) {
//     if(firstValue < secondValue) {
//         return firstValue
//     } else {
//         return secondValue
//     }
// }

// console.log(min(0, -10)); 

// Recursão

function isEven(value) {
    function find() {
        const result = value % 2;
        if(result === 0) {
            console.log(result)
            return console.log(true);
        } else if(result === 1){
            return console.log(false);
        } else {
            console.log(result)
            find(value - 1)
        }
    }
    return find()
}

isEven(-1)

// Contando feijões

// function countBs(word) {
//     let count = 0;
//     for(let i = 0; i < word.length ; i++) {
//         const letter = word.charAt(i);
//         if(letter === 'B') {
//             count += 1;
//         }
//     }

//     return count;
// }

// console.log(countBs('BBC'));

// function countChar(word, letter) {
//     let count = 0;
//     for(let i = 0; i < word.length ; i++) {
//         const stringLetter = word.charAt(i);
//         if(stringLetter === letter) {
//             count += 1;
//         }
//     }

//     return count;
// }

// console.log(countChar('kakkerlak', 'e'));