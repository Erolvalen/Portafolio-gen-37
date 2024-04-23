/******************************/
/* Ejercicios con funciones: */
/*****************************/

// EJERCICIO 1
/* Declara una función que reciba como parámetro name y profession y que imprima en consola: "Hi, my name is [name] and I am a [profession]". */
function myProfile(name, profession) {
  console.log(`Hi, my name is ${name} and I am a ${profession}`)
}

myProfile('Freud', 'programmer')

// EJERCICIO 2
/*
  1 - Declara una variable global llamada greeting y colócale como valor "Hello I love to:"
  2 - Declara una función sin parámetros, dentro crea una variable local llamada hobbie y colócale como valor la actividad que más te gusta hacer.
  3 - Tu función debe mostrar por consola: "Hello I love to: [hobbie]"
*/
const greeting = "Hello I love to:"

function myHobbie() {
  const hobbie = 'programming'
  console.log(`${greeting} ${hobbie}`)
}

myHobbie()

// EJERCICIO 3
// Declara una función que reciba como parámetro number1 y number2 y que retorne el resultado de la suma de ambos.

function sum(number1, number2) {
  return number1 + number2
}

console.log(sum(5, 5))
console.log(sum(2, 5))
console.log(sum(4, 5))

// EJERCICIO 4
// Almacena en una variable el valor retornado de la función anterior y realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.

const result = sum(5, 5)

console.log(result)

function double(res) {
  return result * 2
}

console.log(double(result))

// EJERCICIO 5
/*
La siguiente función no funciona correctamente. Porque el test de abajo debe dar como resultado true ¿Puedes arreglarla?
*/
function obtenerElPrimerCaracter (texto) {
  // - Arréglalo aquí - //
  return texto[0]
}

// Los test no deben modificarse
const valorRetornado = obtenerElPrimerCaracter('JavaScript')
console.log(valorRetornado === 'J')

// EJERCICIO 6
/*
La siguiente función no funciona correctamente ¿Puedes arreglarla?
*/

function esUnNumeroPar (numero) {
  // - Arréglalo aquí - //
  return numero % 2 === 0
}

const resultado = esUnNumeroPar(24)
console.log(resultado)

// EJERCICIO 7
/*
La siguiente función recibe como parámetro una cadena de texto, tu labor es devolver el último carácter de la cadena sin importar cuál sea su longitud. Asegurate que todos los test pasen.
*/

function ultimoCaracter (texto) {
  // - Aquí va tu código - //
  return texto[texto.length - 1]
}

// Los test no deben modificarse
const test = ultimoCaracter('JavaScript')
console.log(test === 't')

const test2 = ultimoCaracter('Academlo')
console.log(test2 === 'o')

const test3 = ultimoCaracter('Generación24')
console.log(test3 === '4')

// EJERCICIO 8
// Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".

function welcome(name = 'Anónimo') {
  return `Bienvenid@ ${name}`
}

console.log(welcome())

// function personAnonimo(name){
//   if(name !== null){
//     console.log(name)
//     return name
//   }else
//   return "Bienvenido Anónimo"
// }
// personAnonimo()
// console.log(personAnonimo())

// EJERCICIO 9
// Completa la función para que agregue más elementos al final del array, sin utilizar métodos para arrays. Tip: observa cuántos argumentos recibe cuando la llamamos, por ende, cuántos parametros deberá tener?
const array = ["a", "b", "c"];
// console.log(array[3])

function addIndex(arr, index) {
  console.log(arr.length)
  return arr[arr.length] =  index
}

console.log(addIndex(array, 'd'))
console.log(array)
console.log(addIndex(array, 'e'))
console.log(array)

// EJERCICIO 10
// Define una función pura que compruebe si existe una propiedad en el objeto dado, si es así, debe retornar true y si no, false
const obj = {
  name: "Pilar",
  age: 25,
  country: "MX",
};
const obj1 = {
  name: "Pilar",
  age: 25,
  country: "MX",
};

function propIn(prop, object) {
  return prop in object
}

console.log(propIn('name', obj))
console.log(propIn('country', obj))
console.log(propIn('email', obj1))

// EJERCICIO 11
// Define una función pura que reciba como parámetro un objeto con las propiedades nombre, edad y país y un string con el nombre de la propiedad país. La función deberá retornar el valor de la propiedad país.
const user = {
  nombre: "Erika", 
  edad: 33,
  pais: "México"
}

function returnProp(object, str) {
  return object[str]
}

console.log(returnProp(user, 'pais'))
console.log(returnProp(user, 'edad'))
// EJERCICIO 12
const users = [
  {
    nombre: "Erik",
    edad: 29,
    correo: {
      principal: "erik@academlo.com",
      secundario: "erik@gmail.com"
    }
  },
  {
    nombre: "Georg",
    edad: 33,
    correo: {
      principal: "georg@academlo.com",
      secundario: "georg@gmail.com"
    }
  },
  {
    nombre: "Andrea",
    edad: 42,
    correo: {
      principal: "andrea@hotmail.com",
      secundario: "andrea@gmail.com"
    }
  },
  {
    nombre: "Oscar",
    edad: 31,
    correo: {
      principal: "oscar@academlo.com",
      secundario: "oscar@gmail.com"
    }
  },
  {
    nombre: "Daniela",
    edad: 22,
    correo: {
      principal: "daniela@academlo.mx",
      secundario: "daniela@uaq.mx"
    }
  },
];

//Del arreglo anterior queremos obtener un arreglo con los nombres de todos los usuarios. Realiza una función pura que devuelva el array con todos los nombres, no utilices métodos para arreglos.

function getNames(arr, key) {
  return [
    arr[0][key],
    arr[1][key],
    arr[2][key],
    arr[3][key],
    arr[4][key]
  ]
}

console.log(getNames(users, 'nombre'))

//Del arreglo anterior queremos obtener un arreglo con los correos principales de todos los usuarios. Realiza una función pura que devuelva el array con todos los correos principales, no utilices métodos para arreglos.

function getNames(arr, key, key2) {
  return [
    arr[0][key][key2],
    arr[1][key][key2],
    arr[2][key][key2],
    arr[3][key][key2],
    arr[4][key][key2]
  ]
}

console.log(getNames(users, 'correo', 'principal'))