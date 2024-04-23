/**********************************/
/* MÉTODOS ==> ARREGLOS (ARRAYS) */
/*********************************/


const food = ['pizza', 'hotdog', 'tacos', 'sup', 'chilaquiles', 'hotdog']

// .indexOf(searchElement, index) – busca el elemento comenzando desde el index, y devuelve el index donde fue encontrado, de otro modo devuelve -1.
console.log(food.indexOf('chilaquiles')) // 4
console.log(food.indexOf('hotdog')) // 1
console.log(food.indexOf('pizza')) // 0
console.log(food.indexOf('sup')) // 3
console.log(food.indexOf('sushi')) // -1
console.log(food.indexOf('hotdog', 2)) // 5

// .lastIndexOf(item, from) – igual que el anterior, pero busca de derecha a izquierda.
console.log(food.lastIndexOf('hotdog')) // 5
console.log(food.lastIndexOf('hotdog', 4)) // 1
console.log(food.lastIndexOf('salchipapas')) // -1

// .includes(searchElement, index) – busca comenzando desde el índice, devuelve true en caso de ser encontrado.
console.log(food.includes('pizza')) // true 
console.log(food.includes('hotdog', 2)) // true 
console.log(food.includes('pizza', 1)) // false
console.log(food.includes('potato')) // false

// .toString() - convierte un arreglo en una cadena de texto string (separado por comas).
console.log(food.toString())

// .join() - convierte un arreglo en una cadena de texto string (separado por el caracter que le indiquemos).
console.log(food.join()) // Si lo pasamos nada, hace lo mismo que toString
console.log(food.join('')) //
console.log(food.join(' ')) //
console.log(food.join(', ')) //
console.log(food.join('-')) //
console.log(food.join('/')) //
console.log(food.join('\n')) // Salto de línea

// .pop() - Extrae el último elemento del array y lo devuelve:
const lastIndex = food.pop()
console.log(lastIndex)
console.log(food)

// .push() - Agrega el elemento al final del array:
food.push('salchipapas', 'chips')
console.log(food)

// .shift() - Extrae el primer elemento del array y lo devuelve:
const firstIndex = food.shift()
console.log(firstIndex)
console.log(food)

// .unshift() - Agrega el elemento al principio del array:
food.unshift('fish', 'fajipapa')
console.log(food)

// .concat(...elementos) - devuelve un nuevo arreglo con todos los elementos actuales y agrega otros arreglos
const fruits = ['pear', 'apple', 'orange']
const fruits2 = ['banana', 'grape', 'melon']
const fruits3 = ['mango', 'pineaple', 'berries']
const totalFuits = fruits3.concat(fruits, 'blueberries', fruits2)
console.log(totalFuits)

// .slice(inidiceInicial - indiceFinal) - crea un nuevo array y copia elementos desde la posición desde / hasta en el nuevo array, no incluye el final.
const colors = ['Red', 'Blue', 'Yellow', 'Green']

const colrosCopy = colors.slice(1, 3)
console.log(colrosCopy)
console.log(colors)

console.log(colors.slice()) // Cuando no mando nada me copia todo el arr
console.log(colors.slice(1)) // 
console.log(colors.slice(-1)) // Sí acepta valores negativos Green
console.log(colors.slice(-2, -1)) // Sí acepta valores negativos Yellow 

// .splice(desde, cuantos, insertar) - modifica el array original desde la posición desde / cuantos / y los que desees insertar en el nuevo array.
// El primer parámetro define la posición desde donde se borrarán o agregarán los elementos los elementos.
// El segundo parámetro define cuántos elementos deben eliminarse.
// El tercer parámetro define cuántos elementos deben agregarse.

const students = ['Oscar', 'Gabriel', 'Jhon', 'Andres', 'Luis', 'Cris']

console.log(students.splice(2, 2))
console.log(students)
console.log(students.splice(0, 0, 'Juan', 'Mateo'))
console.log(students)
console.log(students.splice(-1, 1, 'Emma'))
console.log(students)

console.log(students.splice(1, 1).concat(students.splice(3, 1)))

// .reverse() - ordena el array de forma inversa y lo devuelve.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.reverse()) // [5, 4, 3, 2, 1]
console.log(numbers)

//Ejemplo
const str = 'Hola soy Jean y me gusta la programación'
console.log(str.split('').reverse().join(''))
console.log(str.split(' ').reverse().join(' '))

// .sort() - ordena el array y lo devuelve
const fiveElements = ['earth', 'water', 'fire', 'air', 'wind']
console.log(fiveElements.sort()) // 
console.log(fiveElements)

const numbersList = [34, 12, 24, 9, 5]
console.log(numbersList.sort()) // [12, 24, 34, 5, 9]

//Sort ordena de acuerdo al orden lexicograFICO, CONVIERTE CADA ELEMENTO A STRING Y LOS COMPARA CON BASE A SU SECUENCIA DE VALORES uNICODE. 
console.log(numbersList.sort((a, b) => a - b))

const strings = ['50', '21', '3', '12', '4']
console.log(strings.sort())
console.log(strings.sort((a, b) => a - b))
console.log(strings.sort((a, b) => b - a))

// https://static3.pisapapeles.net/uploads/2014/06/tabla-codigos-unicode1.png