// Juntando

let arrays = [[1, 2, 3], [4, 5], [6]];

const reducedArray = arrays.reduce((accumulator, current) => {
  return accumulator.concat(current)
}, [])

console.log(reducedArray);

// O Histórico da expectativa de vida
