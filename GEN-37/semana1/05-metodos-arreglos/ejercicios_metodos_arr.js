// Ejercicios usando metodos de arreglos

// 1. ¿Cuál es el método para eliminar el último elemento de un arreglo?
// respuesta: pop()

// 2. ¿Cuál es el método para eliminar el primer elemento de un arreglo?
// respuesta: shift()

// 3. ¿Cuál es el método para eliminar un elemento en una posición específica de un arreglo?
// respuesta: splice()

// 4. ¿Cuál es el método para agregar un elemento al final de un arreglo?
// respuesta: push()

// 5. ¿Cuál es el método para agregar un elemento al inicio de un arreglo?
// respuesta: unshift()

// 6. ¿Cuál es el método para copiar un arreglo?
// respuesta: slice()

// 7. ¿Cuál es el método para ordenar un arreglo?
// respuesta: sort()

// 8. Utiliza los métodos de arreglos para invertir la siguiente frase
const str = 'Me gusta programar en JavaScript'

function invertStr(myStr) {
  return myStr.split('').reverse().join('')
}

console.log(invertStr(str))

// 9. Utiliza los métodos de arreglos para ordenar el siguiente arreglo de usuarios por edad de menor a mayor
const users = [
  { name: 'Luis', age: 25 },
  { name: 'Pedro', age: 30 },
  { name: 'Juan', age: 20 },
  { name: 'Maria', age: 28 },
  { name: 'Ana', age: 32 },
  { name: 'Mariana', age: 27 },
  { name: 'Jorge', age: 22 },
]

console.log(users[0].age)

function sortNames(arr) {
  // return arr.sort((a, b) => b.age - a.age)
  return arr.sort((a, b) => a.age - b.age)
}

console.log(sortNames(users))

// 10. Supongamos que tenemos un arreglo de cadenas. Nos gustaría tener una copia ordenada del mismo, pero mantener el original sin modificar. Crea una función que reciba un arreglo de cadenas y devuelva un nuevo arreglo con las cadenas ordenadas sin modificar el original.
const vocales = ["i", "e", "o", "u", "a"];

function ordernarVocales(arr) {
  // tu código aquí
  // const ordererCopy = arr.slice()
  // console.log(ordererCopy)
  // ordererCopy.sort();
  // return ordererCopy;

  // const arrayvocales2 = arr.slice()
  // return arrayvocales2.sort((a,b) => a - b)

  return arr.slice().sort()
}

console.log(ordernarVocales(vocales));
console.log(vocales);


