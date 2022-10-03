'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //let decimal = parseInt(num, 2)
 // return decimal
  let value;
  let sumaTotal = 0;
   const nuevoArray = num.split("").reverse();
  for (let i = nuevoArray.length - 1; i >= 0; i--) {
  value = Math.pow(2, i) * nuevoArray[i];
  sumaTotal += value;
  }
  
  return sumaTotal;
} 

function DecimalABinario(num) {
  // tu codigo aca
// var binario = parseFloat(num)
// let resultado = binario.toString(2)

// return resultado
//o

var resultado = ""

while(num > 0) {
  resultado = (num % 2) + resultado;
num = Math.floor(num / 2)
}

return resultado;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}