/*** TIPOS DE DATOS ==> Cadenas de Texto ***/

// En JS manejamos tres tipos de comillas 

let str1 = "Cadena de texto con comillas dobles"
let str2 = 'Cadena de texto con comillas simples'
let str3 = `Cadena de texto con comillas invertidas o backticks`

// Uso de comillas dentro de comillas 
// let str4 = 'I'm in love with JS' // Error
let str4 = "I'm in love with JS"
let str5 = 'My favorite book is "Códigos con JS"'
console.log(str4)
console.log(str5)

// Anteriormente se hacía así 
// Caracter de escape
let str6 = "My best friends name is \"Pilar\""
console.log(str6)

// Salto de línea
// Error
// let str7 = 'Lista de compras:
// -Leche
// -Huevos
// '

// Anteriormente para lograr el salto de línea 
console.log('Shopping list: \n -Paper \n -Cereal \n -Soap')

// Múltiples líneas con backticks 
let fruistsList = `Fruits:
  -Apple,
  -Orange,
  -Banana
`

console.log(fruistsList)

// Concatenación de cadenas
// Con el operador de adición +
let str8 = 'Juan'
let str9 = 'Gachancipa'

console.log(str8 + ' ' + str9)

//Interpolación con backticks y con los marcadores ${}
console.log(`${str8} y ${str9}`)

// Los string son iterables, esto quiere decir que podemos recorrerlos
let cadenaDeTexto = 'Hola Gen 37'
console.log(`índice 0 = ${cadenaDeTexto[0]}`)
console.log(`índice 1 = ${cadenaDeTexto[1]}`)
console.log(`índice 2 = ${cadenaDeTexto[2]}`)
console.log(`índice 3 = ${cadenaDeTexto[3]}`)
console.log(`índice 4 = ${cadenaDeTexto[4]}`)
console.log(`índice 5 = ${cadenaDeTexto[5]}`)
console.log(`índice 6 = ${cadenaDeTexto[6]}`)
console.log(`índice 7 = ${cadenaDeTexto[7]}`)
console.log(`índice 8 = ${cadenaDeTexto[8]}`)
console.log(`índice 9 = ${cadenaDeTexto[9]}`)
console.log(`índice 10 = ${cadenaDeTexto[10]}`)
console.log(`índice 11 = ${cadenaDeTexto[11]}`)

// Todos los iterables tienen acceso a la propiedad length 
// La propiedad length nos devuelve el número de caracteres qu tiene la cadena de texto, empezando a contar desde el 1, no desde el 0
console.log(cadenaDeTexto.length) 

// Los strings son inmutables, no se pueden modificar 
const str10 = 'Hola GEN37'

str10[0] = '4'
console.log(str10)

const arrStr = ['Hola', 'GEN37']

arrStr[0] ='Adios'

console.log(arrStr)

console.log(typeof str10)