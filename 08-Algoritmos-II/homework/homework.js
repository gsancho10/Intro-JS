'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array // ---> caso de corte

  let pivot = array [0]
  let left = []
  let right = []
  for (let i = 1; i < array.length; i++) {
    if( array[i] <= pivot){
      left.push(array[i])
    }else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right))

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array
  // metodo SLICE para recortar el arreglo !== SPLICE (es destructivo)
  let medio = Math.floor(array.length / 2)
  let left = array.slice(0, medio)
  let right = array.slice(medio) 
 return union(mergeSort(left), mergeSort(right))
}



function union(left, right){                         //FUNCION QUE UNE LOS ARREGLOS
  let i = 0
  let j = 0
  let array = []
  while(i < left.length && j < right.length){
    if (left[i] < right[j]){
      array.push(left[i])
      i++
    }else{
      array.push(right[j])
      j++
    }
  }
  return array.concat(left.slice(i)).concat(right.slice(j))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
