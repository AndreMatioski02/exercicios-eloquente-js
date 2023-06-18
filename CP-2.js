// Triângulo com Loop

// let hashtag = '';

// function triangleLoop(triangleWidth) {
//     for(let i = 0; i < triangleWidth; i++){
//         hashtag = hashtag + '#';
//         console.log(hashtag);
//     }
// }

// triangleLoop(70);

// FizzBuzz

const firstWhiteRow = "# # # #"
const secondWhiteRow = " # # # #"

function fizzBuzz(length) {
    for(let i = 0; i < length; i++) {
        console.log(firstWhiteRow);
        console.log(secondWhiteRow);
    }
}

fizzBuzz(8);