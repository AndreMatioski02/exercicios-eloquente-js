// A soma de um intervalo

function range(start, end, increment) {
    let result = [];
    for(let i = start; i <= end; i += increment) {
        result.push(i)
    }
    console.log(result);
    let sum = 0;
    result.map(index => {
        sum += index
    })
    console.log(sum);
}

// range(0, 10, 2);

// Melhoria

function range(start = 0, end = 0, increment = 1) {
    const result = [];
    let sum = 0;
    
    for(let i = start; i <= end; i += increment) {
        result.push(i);
    }
    
    console.log(result);
    
    result.forEach(index => {
        sum += index;
    })
    
    console.log(sum);
}

range(0, 10, 2);

// Melhoria com reduce

function range(start = 0, end = 0, increment = 1) {
    const resultList = [];
    let sum = 0;
    
    for(let i = start; i <= end; i += increment) {
        resultList.push(i);
    }
    
    console.log(resultList);
    
    sum = resultList.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
    
    console.log(sum);
}

range(0, 10, 2);

// Invertendo um array

// function reverse(array) {
//     let reversedArray = []
//     for(let i = array.length; i > 0; i--) {
//         reversedArray.push(array[i - 1])
//     }
//     console.log(reversedArray);
// }

// reverse(['A', 'B', 'C']);

// function reverse(array) {
//     for(let i = array.length; i > 0; i--) {
//         array.push(array[i - 1])
//     }

//     for(let i = 0; i <= array.length / 2; i++) {
//         array.shift();
//     }
//     console.log(array);
// }

// reverse(['A', 'B', 'C']);