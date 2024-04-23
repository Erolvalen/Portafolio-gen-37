// INTRODUCCIÓN

// Tenemos dos tipos de datos : primitivos y de estructura. 

/*** TIPOS DE DATOS ==> Números ***/
const numberInt = 10 // entero
const numberFloat = 10.5 // punto flotante
const numberNegative = -10 // negativo

//  Valores numéricos especiales: 
//Infinity
let numberInfinity = Infinity // resultado de una operación donde manejemos el 0

console.log(10 / 0) // Infinity
console.log(Math.log(0)) // -Ínfinity
console.log(-1/0) // -Ínfinity

//NaN : Not a number = ResultaDO DE UNA OPERACIÓN MATEMÁTICA INCORRECTA O NO DEFINIDA
let notNumber = NaN
console.log('abc' * 20) // NaN
console.log('tres' / 2) // NaN

// Operador typeof 
console.log(typeof 10)
console.log(typeof 10.5)
console.log(typeof -10)
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof NaN)



