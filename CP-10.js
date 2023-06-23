// Nomes dos meses

const findTheMounth = function () {
  const mounths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  return {
    name: function (number) { return mounths[number]; },
    number: function (name) { return mounths.indexOf(name); }
  };
}();


console.log(findTheMounth.name(2));

console.log(findTheMounth.number("Novembro"));