/*******************************/
/* OPERADORES ==> ARITMÉTICOS */
/******************************/

/*
+  Adición(suma)
-  Substracción(resta)
*  Multiplicación
** Exponenciación
/  División
%  Resto
++ Incremento
-- Decremento
*/

// suma o adición + 
console.log(3 + 4) // 7

// resta o substracción -
console.log(2 - 2) // 0

// multiplicación *
console.log(2 * 3) // 6

// división / 
console.log(2 / 2) // 1

// módulo o residuo % 
const num = 16
const num2 = 5

const result = Math.floor(num / num2)
console.log(result)
const result2 = result * num2
console.log(result2)
console.log(num - result2) // 1 este es el residuo

console.log(16 % 5) // 1

// ayuda mucho para sacar múltiplos 
console.log(1 % 2) // 1 Si hay resto, NO es múltiplo
console.log(2 % 2) // 0 Si no hay resto, ES múltiplo
console.log(3 % 2)
console.log(4 % 2)
console.log(5 % 2)
console.log(6 % 2)

function isEven(num) {
    return num % 2 === 0
}

console.log(isEven(1))
console.log(isEven(25))
console.log(isEven(30))
console.log(isEven(46))

// exponenciación ** 
console.log(2 * 2) // 4
console.log(2 * 2 * 2) // 8
console.log(2 * 2 * 2 * 2) // 16
console.log(2 * 2 * 2 * 2 * 2) // 32

console.log(2 ** 2) // 4
console.log(2 ** 3) // 8
console.log(2 ** 4) // 16
console.log(2 ** 5) // 32

// Más de un operador en una misma línea
console.log(2 + 2 * 2) // 6
console.log(3 + 3 * 3) // 12

console.log((2 + 2) * 2) // 8
console.log((3 + 3) * 3) // 18

// Si la precedencia es la misma, el orden de ejecución es de izquierda a derecha
console.log(2 - 2 + 1) // 1
console.log(8 / 2 * 2) // 8

// Precedencia de operadores: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence