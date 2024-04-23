/**********************/
/* MÉTODOS ==> NUMBER */
/**********************/

// Funciones globales 
// Parseint: convierte una cadena a un numero entero 
console.log(parseInt('56.19 mxn')) // 56 
console.log(parseInt(56.19)) // 56 

// Parsefloat,convierte una cade a un número flotante
console.log(parseFloat('56.19 mxn')) // 56.19

// Métodos
// toFixed() Redondea un Número a una cantidad de decimales especificada.
console.log(95.3456789.toFixed()) // 95
console.log(95.3456789.toFixed(1)) // 95.3
console.log(95.3456789.toFixed(2)) // 95.35
console.log(95.3456789.toFixed(3)) // 95.346
console.log(95.3456789.toFixed(4)) // 95.3457
console.log(95.3456789.toFixed(5)) // 95.34568

// métodos el objeto constructor number
// isNaN 
console.log(Number.isNaN('abc' * 5)) // true
console.log(Number.isNaN('abc' + 5)) // false

// inFinite 
console.log(Number.isFinite(1 / 0)) // false
console.log(Number.isFinite(123)) // true

// inInteger 
console.log(Number.isInteger(5.68)) // false
console.log(Number.isInteger(5)) // true

// El objeto Math
Math

// Propiedad PI del objeto math
console.log(Math.PI) // 3.1415....

// Métodos del objeto math 
// round 
console.log(Math.round(2.6)) // 3
console.log(Math.round(2.5)) // 3 A partir de .5 redondea hjacía arriba
console.log(Math.round(2.4)) // 2

// ceil, siempre redondea hacia arriba
console.log(Math.ceil(2.6)) // 3
console.log(Math.ceil(2.5)) // 3 
console.log(Math.ceil(2.4)) // 3

// floor, siempre redondea hacia abajo
console.log(Math.floor(2.6)) // 2
console.log(Math.floor(2.5)) // 2 
console.log(Math.floor(2.4)) // 2

// max() Devuelve el valor más alto de una lista de números
console.log(Math.max(10, 2, 3, 4, 5 ))

// min() Devuelve el valor menor de una lista de números
console.log(Math.min(10, 2, 3, 4, 5 ))

// random() Devuelve un número aleatorio entre 0 y 1
console.log(Math.random())
console.log(Math.floor(Math.random() * 11))

// trunc() Remueve los decimales de un número
console.log(Math.trunc(95.34))
console.log(Math.trunc('95.34'))
console.log(Math.trunc('95.34 mxn')) //s NaN