'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
const array = [1]
let i = 2
while (num !== 1) {
  if (num % i === 0){
 array.push(i)
 num /= i
  } else {
    i++
  }
}

return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length - 1 - i; j++){
      if(array[j] > array[j + 1]){
let aux = array[j]
array[j] = array[j + 1]
array[j + 1] = aux
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i< array.length; i++){
    var x = i - 1
    var aux = array[i]
    while (x >= 0 && array[x] > aux ){
      array[x+1] = array [x]
      x = x-1
    } // encontré el lugar
     array [x+1] = aux
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 0; i < array.length; i++){
  var minimo = i // posicion del valor minimo en el array
  for ( let x = i+1; x < array.length; x++){
    if(array[x] < array[minimo]){
      minimo = x
    }
  }
  //salgo del for = encontre el valor minimo sin ordenar
  if (minimo !== i){
    let aux = array[i]
    array[i]=array[minimo]
    array[minimo] = aux
  }
}
return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
