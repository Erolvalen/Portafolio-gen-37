/***********************/
/* COERCIÓN DE TIPOS */
/*********************/

// Dos tipos de coerción 
// Coerción implícita
// Coerción explícita 

/************************************/
/* COERCIÓN DE TIPOS ==> Implícita */
/***********************************/

// Operador de adición
console.log('1' + 2) // '12'
console.log(1 + '2') // '12'
console.log('1' + '2') // '12'
console.log('2' + '2') // '22'
console.log(4 + 1 + '2' + 3 + 3) // '5233'
console.log('Hola' + 'mundo') // 'Holamundo'
console.log('Yo soy: ' + true) // 'Yo soy true'
console.log(false + false + '2') // '02'
console.log(true + true + '2') // '22'
console.log(null + '2') // 'null2'
console.log(null + null + '2') // '02'
console.log('2' + null + null ) // '2nullnull'
console.log(NaN + '2') // 'NaN2'
console.log(undefined + '2') // 'undefined2'
console.log('2' + undefined) // '2undefined'
console.log(NaN + NaN + undefined) // NaN

// Operadores que no son de adición
console.log('24' / '2') // 12
console.log('14' - '4') // 10
console.log('14' * '2') // 28
console.log('14' * 2) // 28
console.log('2' * 10) // 20
console.log('abc' * 10) // NaN
console.log('abc' / 10) // NaN
console.log('abc' - 10) // NaN

// cOERCIÓN IMPLÍCITA CON NULL Y UNDEFINED 
// null = 0 
console.log(null + 2) // 2
console.log(1 / null) // Infinity
console.log(1 * null) // 0
console.log(null - 5) // -5
console.log(5 - null) // -5

//undefined = NaN
console.log(undefined + 2) // NaN
console.log(1 / undefined) // NaN
console.log(1 * undefined) // NaN
console.log(undefined - 5) // NaN
console.log(5 - undefined) // NaN

// Coerción implícita con booleanos
// true = 1 y false = 0
console.log(true + 3) // 4
console.log(true * 3) // 3
console.log(true * '3') // 3
console.log(true ** '3') // 1
console.log(true / false) // Infinity
console.log(true / true) // 1

// Coerción implícita con array vacío
// [] = 0
console.log([] + '1') // '1'
console.log([] + 1) // '1'
console.log(1 / []) // Infinity
console.log([] - 2) // -2
// +[] o Number([])
const arr = []
console.log(+arr) // 0
const arr1 = [1, 2, 3]
console.log(+arr1) // NaN

/************************************/
/* COERCIÓN DE TIPOS ==> Explícita */
/***********************************/
console.log(typeof Number())
console.log(typeof String())
console.log(typeof Boolean())

// Coerción explícita con objeto constructor String
console.log(String(1) + String(2)) // '12'
console.log(String(null) + String(true)) // 'nulltrue'
console.log(String(false) + String(true)) // 'falsetrue'
console.log(String(NaN) + String(NaN)) // 'NaNNaN'

// Coerción explícita con objeto constructor Number
console.log(Number('1') + Number('2')) // 3
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(NaN)) // NaN
console.log(Number('true')) // NaN
console.log(Number('false')) // NaN
console.log(Number([])) // 0
console.log(Number({})) // NaN
console.log(Number([1, 2, 3])) // NaN

// Coerción explícita con operador de adición
console.log(+'1' + +'2') // 3
console.log(+true) // 1
console.log(+false) // 0
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+NaN) // NaN
console.log(+'true') // NaN
console.log(+'false')// NaN
console.log(+[]) // 0
console.log(+{}) // NaN
console.log(+[1, 2, 3]) // NaN

// Coerción explícita con booleanos
// valores truthy 
console.log(Boolean(true)) // true
console.log(Boolean(1)) // true
console.log(Boolean(-1)) // true
console.log(Boolean('Hola')) // true
console.log(Boolean('0')) // true
console.log(Boolean(Infinity)) // true
console.log(Boolean(-Infinity)) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true

// valores falsy 
console.log(Boolean(false)) // false
console.log(Boolean(null)) // false
console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('')) // false

// Coerción explícita usando funciones globales
console.log(parseInt('15px')) // 15
console.log(parseFloat('15.5px')) // 15.5
