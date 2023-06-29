// Nomes dos meses

const findTheMounth = (() => {
  const mounths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  return {
    name:  number => mounths[number],
    number: name => mounths.indexOf(name)
  };
})();


console.log(findTheMounth.name(2));

console.log(findTheMounth.number("Novembro"));