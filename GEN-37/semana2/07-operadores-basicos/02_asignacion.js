/******************************/
/* OPERADORES ==> ASIGNACIÓN */
/*****************************/

/* 
Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.
*/
const result = 2 * 2 + 1
console.log( result) // 5

let a = 1
const b = 2
const c = 10 - (a = b + 1)

console.log(a) // 3
console.log(b) // 2
console.log(c) // 7

// acortadores “modifica y asigna”
let number = 20
number = number + 3
console.log(number) // 23

let number2 = 20
number2 += 3
console.log(number2) // 23
number2 *= 2
console.log(number2) // 46
number2 /= 3
console.log(number2)

/***************************************/
// OPERADORES de Incremento/decremento //
/***************************************/

let increase = 0
console.log(increase++)
console.log(increase)
console.log(increase++)
console.log(increase++)
console.log(increase)
console.log(++increase)
console.log(++increase)
console.log(++increase)

let decrement = 6
console.log(decrement--)
console.log(decrement)
console.log(decrement--)
console.log(decrement--)
console.log(decrement)
console.log(--decrement)
console.log(--decrement)
console.log(--decrement)

let prefijo = 1
console.log(++prefijo)

let sufijo = 1
console.log(sufijo++)

console.log(prefijo) // 2
console.log(sufijo) // 2
