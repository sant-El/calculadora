const prompt = require("prompt-sync")();

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  return a / b;
}

function multiplicar(a, b) {
  return a * b;
}

function porcentagem(a, b) {
  let resultado = (a * b) / 100;
  return resultado;
}

let entradaUm = Number(prompt(`Primeiro número: `));

let entradaDois = Number(prompt(`Segundo número: `));

let operação = prompt(`Operação: `);

if (entradaUm / 1 === entradaUm && entradaDois / 1 === entradaDois) {
  if (operação === "+" || operação === "soma") {
    console.log(somar(entradaUm, entradaDois));
  } else if (operação === "-" || operação === "subtração") {
    console.log(subtrair(entradaUm, entradaDois));
  } else if (operação === "/" || operação === "divisão") {
    console.log(dividir(entradaUm, entradaDois));
  } else if (operação === "*" || operação === "multiplicação") {
    console.log(multiplicar(entradaUm, entradaDois));
  } else if (operação === "%" || operação === "porcentagem") {
    console.log(porcentagem(entradaUm, entradaDois));
  } else {
    console.log(`Operação Inválida`);
  }
} else {
  console.log(`Operação Inválida`);
}