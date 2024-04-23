/*******************************************/
/* MÉTODOS ==> CADENAS DE TEXTO (STRINGS) */
/******************************************/

//Iteración de cadenas

const cadenaDeTexto = 'Hola soy una cadena de texto'

console.log(cadenaDeTexto.length) // 28
console.log(cadenaDeTexto[cadenaDeTexto.length - 1])
console.log(cadenaDeTexto[3])

// charAt(índice) Devuelve el carácter en la pisición especificada, si no existe devuelve una cadena vacia.
console.log(cadenaDeTexto.charAt()) // Si no mando nada, lo toma como 0 y por eso me devuelve 'H'
console.log(cadenaDeTexto.charAt(1)) // 'o' 
console.log(cadenaDeTexto.charAt(28)) // '' 
console.log(cadenaDeTexto.charAt(-1)) // '' Su desventaja es que no puedo utilizar valores negativos

// at(indíce) - Devuelve el carácter en la posición especificada, si no existe devuelve undefined. Este método permite enteros positivos y negativos. Los enteros negativos cuentan de nuevo desde el último carácter de cadena. REPLIT NO LO PERMITE.
console.log(cadenaDeTexto.at()) // Si no mando nada, lo toma como 0 y por eso me devuelve 'H'
console.log(cadenaDeTexto.at(1)) // 'o'
console.log(cadenaDeTexto.at(28)) // undefined Desventaja devuelve undefined
console.log(cadenaDeTexto.at(-1)) // 'o' Ventaja, permite negativos
console.log(cadenaDeTexto.at(-2)) // 't'

// indexOf(valor, indíce) - Devuelve la posición del primer carácter de la cadena especificada, si no existe devuelve -1.
console.log(cadenaDeTexto.indexOf()) // Si no se le pasa valor, devuelve -1
console.log(cadenaDeTexto.indexOf('c')) // 13 
console.log(cadenaDeTexto.indexOf('s')) // 5 
console.log(cadenaDeTexto.indexOf('d')) //  15
console.log(cadenaDeTexto.indexOf('a')) //  3
console.log(cadenaDeTexto.indexOf('d', 16)) //  20
console.log(cadenaDeTexto.indexOf(' ')) //  4
console.log(cadenaDeTexto.indexOf('z')) //  -1

// lastIndexOf(valor, indíce) - Devuelve la posición del último carácter de la cadena especificada, si no existe devuelve -1.
console.log(cadenaDeTexto.lastIndexOf()) // Si no se le pasa valor, devuelve -1
console.log(cadenaDeTexto.lastIndexOf('c')) // 13 
console.log(cadenaDeTexto.lastIndexOf('s')) // 5 
console.log(cadenaDeTexto.lastIndexOf('d')) //  20
console.log(cadenaDeTexto.lastIndexOf('a')) //  18
console.log(cadenaDeTexto.lastIndexOf('d', 16)) //  15
console.log(cadenaDeTexto.lastIndexOf(' ')) //  22
console.log(cadenaDeTexto.lastIndexOf('z')) //  -1

// includes(valor, indíce) - Devuelve true si la cadena especificada está contenida en la cadena, o false si no está. Es para comprobar.
console.log(cadenaDeTexto.includes()) // Si no pasamos nada al me´todo, te devuelve, false
console.log(cadenaDeTexto.includes('hola')) // false El valor lo busca exacto, la coincidencia exacta
console.log(cadenaDeTexto.includes('Hola')) // true
console.log(cadenaDeTexto.includes('de')) // true
console.log(cadenaDeTexto.includes('de', 22)) // false

// startsWith(valor, indíce) - Devuelve true si la cadena especificada está al inicio de la cadena, o false si no está.
console.log(cadenaDeTexto.startsWith()) // Si no mando nada, devuelve false
console.log(cadenaDeTexto.startsWith('hola')) // false
console.log(cadenaDeTexto.startsWith('Hola')) // true
console.log(cadenaDeTexto.startsWith('soy')) // false
console.log(cadenaDeTexto.startsWith('soy', 5)) // true

// endsWith(valor, indíce) - Devuelve true si la cadena especificada está al final de la cadena, o false si no está.
console.log(cadenaDeTexto.endsWith('texto')) // true
console.log(cadenaDeTexto.endsWith('Texto')) // false
console.log(cadenaDeTexto.endsWith('o')) // true
console.log(cadenaDeTexto.endsWith('de')) // false
console.log(cadenaDeTexto.endsWith('de', 22)) // true

/* Mayúsculas y minúsculas */
// toUpperCase() - Devuelve la cadena en mayúsculas.
console.log(cadenaDeTexto.toUpperCase()) // 'HOLA SOY UNA.....'
console.log(cadenaDeTexto[1].toUpperCase()) // 'O'

// toLowerCase() - Devuelve la cadena en minúsculas.
console.log(cadenaDeTexto.toLowerCase()) // 'hola soy una cadena...'
console.log(cadenaDeTexto[0].toLowerCase()) // 'h'

// substring(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena.
console.log(cadenaDeTexto.substring()) // Si no mandas nada, ter dfevuelve la cadena de texto completa
console.log(cadenaDeTexto.substring(0)) // 0 Devuelve la cadena completa
console.log(cadenaDeTexto.substring(0, 3)) // 'Hol'
console.log(cadenaDeTexto.substring(0, 4)) // 'Hola'
console.log(cadenaDeTexto.substring(5, 8)) // 'soy'
console.log(cadenaDeTexto.substring(5, 5)) // ''
console.log(cadenaDeTexto.substring(5)) // 'soy una cadena de....'
console.log(cadenaDeTexto.substring(0, 4)) //
console.log(cadenaDeTexto.substring(4, 0)) // nO DISTINGUE SI COLOCAS COMO ÍNDIce final el 0
console.log(cadenaDeTexto.substring(-5)) // No distingue negativos
console.log(cadenaDeTexto.substring(28)) // '' Si el indice no existe ter retorna una cadena vacia

// slice(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena.
console.log(cadenaDeTexto.slice()) // Si no mandas nada, ter dfevuelve la cadena de texto completa
console.log(cadenaDeTexto.slice(0)) // 0 Devuelve la cadena completa
console.log(cadenaDeTexto.slice(0, 3)) // 'Hol'
console.log(cadenaDeTexto.slice(0, 4)) // 'Hola'
console.log(cadenaDeTexto.slice(5, 8)) // 'soy'
console.log(cadenaDeTexto.slice(5, 5)) // ''
console.log(cadenaDeTexto.slice(5)) // 'soy una cadena de....'
console.log(cadenaDeTexto.slice(0, 4)) //
console.log(cadenaDeTexto.slice(4, 0)) // En este caso identifica los índice, por l que te devuelve una cadena vacía
console.log(cadenaDeTexto.slice(-5)) // Sí permite números negativos
console.log(cadenaDeTexto.slice(28)) //  Si el indice no existe ter retorna una cadena vacia

// split(separador, limite) - Devuelve un array con las partes de la cadena que se separan por el separador especificado.
console.log(cadenaDeTexto.split()) // Si no le paso nada me trae el texto en un array
console.log(cadenaDeTexto.split('')) // 
console.log(cadenaDeTexto.split(' ')) // ['Hola', 'soy, 'una'....]
console.log('Este-texto-tiene-guiones'.split('-'))
console.log('04/03/24'.split('/'))
console.log(cadenaDeTexto.split(' ', 2))
console.log(cadenaDeTexto.split(' ', -2)) // No reconoce números negativos

console.log(cadenaDeTexto.split(' ').at(0))
console.log(cadenaDeTexto.split(' ').at(-1))

// trim() - Devuelve una cadena con los espacios en blanco eliminados de la izquierda y derecha. Es decir, el del principio y el del final.
console.log('/*', '     Luis       ', '*/') // /*           Luis            */
console.log('/*', '     Luis       '.trim(), '*/') // /*Luis*/

// replace(valor, nuevoValor) - Devuelve una nueva cadena con una o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por el nuevo valor.
console.log(cadenaDeTexto.replace('Hola', 'Adiós')) // Adiós soy una cadena de texto
console.log(cadenaDeTexto.replace('Hola', 'Adiós').replace('soy', 'fui').replace('texto', 'oro')) // Adiós soy una cadena de texto

// La ventaja de replace es que se pueden pasar expresiones regulares:
// g - Reemplaza todas las apariciones del valor especificado.
// i - Ignora mayúsculas y minúsculas.

console.log('El ratón negro, asustó al ratón blanco junto al otro Ratón gris'.replace(/ratón/gi, 'elefante').replace('asustó', 'mordió'))

// repeat(n) - Devuelve una cadena repetida n veces.
console.log('Jean '.repeat(4))

//padStart(longitud, cadena) Rellena un string con otra string hasta que alcanza la longitud dada. El relleno se aplica desde el extremo izquierdo de la string
const hr = '5'
const min = '6'
const seg = '2'

console.log(`${hr.padStart(4, '0')}:${min.padStart(3, '0')}:${seg.padStart(2, '0')}`)

// padEnd(longitud, cadena) Rellena un string con otra string hasta que alcanza la longitud dada. El relleno se aplica desde el extremo derecho de la string.
console.log(''.padEnd(10, '*')) // '**********'
console.log('123'.padEnd(10, '*')) 

// El método toString() devuelve una cadena (Todos los objetos tienen un método toString).
const num = 120
console.log(num.toString()) // '120'
console.log(typeof num.toString()) // string
const boolean = false
console.log(boolean.toString()) // 'false'
console.log(typeof boolean.toString()) // string
const myArr = ['Luis', 'Kevin', 'Pablo']
console.log(myArr.toString()) // 'Luis,Kevin,Pablo'
console.log(typeof myArr.toString()) // string

// Casos especiales 
const myObj = {name: 'Gabriel', age: 20, email: 'myemail@email.com'}
console.log(myObj.toString()) // object object
console.log(typeof myObj.toString()) // string

console.log(JSON.stringify(myObj))
console.log(typeof JSON.stringify(myObj)) // string

const nullPrim = null
// console.log(typeof nullPrim.toString()) 
const undef = undefined
// console.log(typeof undef.toString()) 