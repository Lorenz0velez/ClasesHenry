'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  if (array.length <= 1) return array;

  // dividir el array en dos arrays y un pivote aleatorio
  //obtener el pivote
let pivote = array.shift();
let left = [];
let rigth = [];
  
  // recorrer el array y separar los menores y mayores o iguales
  for (let item of array){
    pivote > item ? left.push(item) : rigth.push(item);
     // if (pivot > item) left.push(item);
     // else (right.push(item))
  }
  // recursion 
  //unir
  //retornar el array ordenado.

  return [...quickSort(left), pivote , ...quickSort(rigth)];

}

function mergeSort(array /* [2,1,5,9] */) {  
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  // dividimos el array a la mitad
  const i = Math.floor(array.length / 2);
  let left = array.slice(0, i);
  let right = array.slice(i, array.length);

  // recursion
  // Cuando lleguen aca van a llegar ordenados porque el codigo de arriba nos los ordenan. --> LA RECURSION LA VA HACIENDO MIENTRAS LOS ARRAYS RESULTATES TENGAN MAS DE UN ELEMENTO.
  left = mergeSort(left);  // [1,2] --> [2] --> []
  right =mergeSort(right); // [5,9]

  const result = [];  // [1] --> [1 , 2]
  // con el resultado, recorro , comparo y lo agrego a un nuevo array.
  while (left.length && right.length) { 
    if (left[0] > right[0]) {  // --> Si left es mas chico que right, saco a rigth. .push
      result.push(right.shift())
    } else {                   // si NO, saco a left. .push
      result.push(left.shift())
    }
  }
   return [...result, ...left, ...right] // ...[1,2]...[]...[5,9]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
