'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let numPrimo = 2;
  let array = [1];

  while(num > 1){
    if(num % numPrimo === 0){
      array.push(numPrimo);
      num = num / numPrimo
    } else {
      numPrimo ++
    }
  }
  return array

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while(swap){ 
    swap = false;

  for(var i = 0;i < array.length - 1;i++){
    // for(var k = 0 ; k < (array.length - i);k++){
      if (array[i] > array[i + 1]){
        var aux = array[i];
        array[i]= array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }
    }
  }
    return array;
} 



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0;i < array.length;i++){
    let num = i - 1;
    let temp = array[i];
    while(num >= 0 && array[num] > temp){
      array[num + 1] = array[num];
      num --;
    }
    array [num+1] = temp;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   for (let i = 0;i < array.length;i++){
     let min = i
    for (let j = i + 1 ; j < array.length;j++){
      if(array[j] < array[min]){
        min = j;
      }
    }
     if (min != i){
       let aux = array[i];
       array[i]= array[min];
       array[min]= aux;
     }
  }
   return array; 
}
    /* let n = inputArr.length;            ==>>>>> inputArr seria array.
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr; */



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
