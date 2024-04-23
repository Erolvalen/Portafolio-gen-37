/********************************/
/* OPERADORES ==> COMPARACIÓN */
/******************************/

/* 
  En JavaScript se escriben así:
  //Operadores relacionales
  - mayor que >
  - menor que <
  - mayor o igual que >=
  - menor o igual que <=
  // Operadores de igualdad
  - igual a == (compara valores)
  - igualdad estricta === (compara valores y tipo de dato)
  - diferente de != (compara valores)
  - diferente estricto !== (compara valores y tipo de dato)
*/

// Los operadores de comparación retornan un valor booleano 
console.log(6 > 3) // true
console.log(6 < 3) // false
console.log(6 >= 3) // true
console.log(6 <= 3) // false
console.log(6 === 3) // false
console.log(6 !== 3) // true

// comparando cadenas : Lo hacemos mediante código unicode
console.log('a' < 'z') // true
console.log('a' > 'z') // false
console.log('a' > 'Z') // true
console.log('A' < 'Z') // true
console.log('a' > 'A') // true
console.log('z' > 'Z') // true

// comparación de diferentes tipos
console.log(5 < '50') // true
console.log('5' < '50') // true
console.log('2' < '12') // false
console.log(2 < '12') // true
console.log('aaaaaaaaaa' < 'z') // true
console.log('zzz' < 'zzzz') // true

const str1 = 'tierra' 
const str2 = 'tierna'

console.log(str1 < str2) // false
console.log('r' < 'n') // false

console.log(false == '0') // true

// Comparación con valores true y false
// true = 1, false = 0 
console.log(false == 0) // true
console.log(true == 1) // true
console.log(true / false) // Infinity

// valores falsy 0, '', null, undefined, NaN, false
console.log(0 == '')
console.log(0 == false)
console.log(0 == 0)
console.log(0 == NaN)
console.log(0 == undefined)
console.log(0 == null)

console.log(false == '')
console.log(false == false)
console.log(false == 0)
console.log(false == NaN)
console.log(false == undefined)
console.log(false == null)

console.log('' == '')
console.log('' == false)
console.log('' == 0)
console.log('' == NaN)
console.log('' == undefined)
console.log('' == null)

// Comparación de null y undefined ==> Existe una regla especial, son iguales entre sí, pero no a ningún otro valor.

//Iguales entre sí
console.log(undefined == null) // true
console.log(null == null) // true
console.log(undefined == undefined) // true

// Para otras comparaciones < > <= >= null/undefined
// Resultado extraño:
// se convierten en números: null se convierte en 0,
// mientras que undefined se convierte en NaN.
console.log(null < 1) // true
console.log(null >= 0) // true
console.log(undefined < 1) // false
console.log(undefined >= 0) // false

// Comparación NaN => En Javascript cualquier comparación entre NaN y cualquier otro valor (incluso NaN a sí mismo) siempre dará como resultado false.
console.log(NaN == NaN) // false
console.log(NaN == null) // false
console.log(NaN == undefined) // false

// Igualdad estricta 
console.log(5 == '5')
console.log(true == 1)
console.log(false == 0)
console.log(null == undefined)

console.log(5 === '5')
console.log(true === 1)
console.log(false === 0)
console.log(null === undefined)

// Diferente estricto
console.log(2 != '2') // false
console.log(1 != true) // false

console.log(2 !== '2') // false
console.log(1 !== true) // false
