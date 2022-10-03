"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order").
    Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/


function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.size = function (){
  // ir sumando uno por cada raiz
  // y si tiene hijos, tengo que sumarle su tamaño
  // (izq y der)
  //caso base, es cuando no tengamos hijos
  if (!this.left && !this.right){
    return 1
  } else if (this.left && this.right){
    return 1 + this.left.size() + this.right.size()
  } else if(this.left){
    return 1 + this.left.size()
  } else if (this.right){
    return 1 + this.right.size()
  }
  
  }

BinarySearchTree.prototype.insert = function(value) {
  let leaf = new BinarySearchTree(value) // raiz e hijos en null
//vamos a comparar valores con la raiz
//una vez que sepamos hacia donde ir (izq o der)
//vamos a preguntar si hay algo
//por que si no hau nada me voy a quedar ahi. y si hay algo,
//tratare de insertarlo en el arbol que está como hijo
if(value > this.value){
  if(!this.right){
    this.right = leaf
  } else {
    this.right.insert(value)
  }
}else { 
  //izquierda
  if (!this.left){
    this.left = leaf
  }else {
    this.left.insert(value)
  }
}
}

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value){
    return true
  }
  if (value > this.value){
    if(!this.right){
      return false
    } else {
      return this.right.contains(value)
      }
    }else {
      if (!this.left){
        return false;
      } else {
        return this.left.contains(value)
      }
    }
  }

BinarySearchTree.prototype.depthFirstForEach = function (callback, order){
if(order === "pre-order"){

  callback(this.value)

  if(this.left){
  this.left.depthFirstForEach(callback, order)
} 

if (this.right){
  this.right.depthFirstForEach(callback, order)
}

} else if (order === "post-order"){
  if(this.left){
    this.left.depthFirstForEach(callback, order)
}

if (this.right){
  this.right.depthFirstForEach(callback, order)
}

callback(this.value)

} else{
  if (!order || order === "in-order"){
    if(this.left){
      this.left.depthFirstForEach(callback, order)
  }

  callback(this.value)

  if (this.right){
    this.right.depthFirstForEach(callback, order)
  }
  }
}
}

BinarySearchTree.prototype.breadthFirstForEach = function (callback, array) {
if(array == null){
  var array = []
}
if (this.left){
  array.push(this.left)
}
if (this.right){
  array.push(this.right)
}
callback(this.value)
if(array.length > 0 ){
  array.shift().breadthFirstForEach(callback, array)
}
}


//pre order
//raiz, izq, der

//in order
//izq, raiz, der

// post order
// izq, der, raiz

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
