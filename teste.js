const prompt = require("prompt-sync")();
const areaCirculo = require (`./new`)


let entrada = Number(prompt(`Digite o raio: `))
let area = areaCirculo(entrada)
console.log(area)