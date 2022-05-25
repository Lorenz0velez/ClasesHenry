'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let potenciaPos = numero.length - 1
  for (let i = 0; i < numero.length; i++) {
    resultado += numero[i] * Math.pow(2,potenciaPos);
    potenciaPos --
    console.log(resultado)
  }
  return resultado
}

function DecimalABinario(num) {
  // tu codigo aca
  let numero = num
  let resultado = ""
  while (numero > 0) {
    resultado = numero % 2 + resultado
    numero = Math.floor(numero/2)
  }
  return resultado
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}