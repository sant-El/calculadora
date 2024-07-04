const prompt = require("prompt-sync")();
const areaCirculo = require (`./new.js`)


let entrada = Number(prompt(`Digite o raio: `))
let area = areaCirculo(entrada)
console.log(area)