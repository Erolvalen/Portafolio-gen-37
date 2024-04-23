/******************************************/
/* FUNCIONES ==> DECLARACIÓN DE FUNCIÓN */
/****************************************/
// Las funciones vienen a automatizar el código JS mediante una serie de instrucciones que realizan una tarea o calculan un valor

console.log("Welcome to my website, Edgar");
console.log("Welcome to my website, Jorge");
console.log("Welcome to my website, Erol");
console.log("Welcome to my website, Erol");
console.log("Welcome to my website, Yerson");

function showMessage(name) {
  return `Welcome to my website, ${name}`;
}

console.log(showMessage("Andres"));
/*
Sintaxis:

 function nombreDeLaFuncion(parametros,...) {
    instrucciones (código)
    return
 }

  - function: palabra reservada
  - nombreDeLaFuncion: es el nombre de la función
  - parametros: son los parámetros que recibe la función (opcional)
  - {} son los bloques de código que se ejecutarán cuando se llame a la función
*/

// Declaración de función declarada
function sayHi() {
  console.log("Hi");
}

// Llamada a la función, invocación, ejecución
sayHi();

// Las funciones pueden o no retornar algo

// Hoisting en funciones declaradas
imAlive();
function imAlive() {
  console.log("Estoy viva!");
}

// Funciones expresadas
// Las funciones expresada no tienen hoisting
const getText = function () {
  console.log("Soy una función expresada");
};
// getText()

/*********************************************************/
/* FUNCIONES ==> ÁMBITO, ALCANCE, SCOPE DE LAS VARIABLES */
/*********************************************************/
// variables locales o de bloque 
function localRange() {
  const localVariable = 'Hi'
  console.log(localVariable)
}

localRange()

// Variables globales 
let globalVariable = 'Hola'

function globalRange() {
  globalVariable = 'Adios'
}

console.log(globalVariable)
globalRange()
console.log(globalVariable)

// variables locales vs variables globales
let global = 100

function localVSglobal() {
  // console.log(global)
  let global = 200

  console.log(global)
  let local = 100
  console.log(local)
}

// console.log(local) // error
localVSglobal()

// Porqué sí usar una vasriable global 
let counter = 1

function increment() {
  return counter++
}

console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())

/*****************************/
/* FUNCIONES ==> PARÁMETROS */
/****************************/
// Parámetro es uno o varios valores listados separados por comas que se pasan a una función entre los paréntesis. Las funciones pueden o no tener parámetros, son totalmente opcionales. Puedes utilizart los parámetro necesarios.

function sumar(a, b) {
  // let a = 1
  // let b = 2
  return a + b
}

console.log(sumar(1, 2)) // Argumentos: Cuando un valor es pasado a la función
console.log(sumar(6, 9)) // Argumentos: Cuando un valor es pasado a la función

// Ese valor retornado lo podemos utilizar
const result = sumar(3, 2)
console.log(result)

function usingResult (res) {
  return res * 2
}

console.log(usingResult(result))
console.log(result)

/***************************************/
/* FUNCIONES ==> PARAMETROS IMPLÍCITOS */
/***************************************/

// Las funciones tienen dos parámetros implícitos

// El objeto arguments => Es un objeto similar a un array que contine todosd los argumentos pasados a la función
function withArguments() {
  console.log(arguments)
  console.log(arguments[2])
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments.length)
}

withArguments(1, 'string', false)


// this => es conocido como el contexto de la función
function withThis() {
  console.log(this)
}

withThis()

/******************************************************/
/* FUNCIONES ==> VALORES PREDETERMINADOS O POR DEFECTO*/
/******************************************************/

function withoutDefaultValue(num, num2) {
  console.log(num * num2)
  //           5 * undefined = NaN
}

withoutDefaultValue(5)

// Usando valores predeterminados 
function withDefaultValue(num = 2, num2 = 4) {
  console.log(num * num2) // 8 // 32 // 12
}

withDefaultValue()
withDefaultValue(8)
withDefaultValue(4, 3)

/*********************************************/
/* FUNCIONES ==> RETORNANDO UN VALOR, RETURN */
/*********************************************/
// Una función puede devolver un valor al código de llamada como resultado, utilizando la directiva return.
// OJO sólo existe un return por función, no puede haber dos

function sayingHi(user) {
  return `Hi ${user}`
}

console.log(sayingHi('Luis'))

// Funciones puras 
const arrNum = [1, 2, 3]
const arrNum2 = [3, 2, 3]
const arrNum3 = [4, 2, 3]
const arrNum4 = [5, 2, 3]

function pura(arr) {
  return arr[0]
}

console.log(pura(arrNum))
console.log(pura(arrNum2))
console.log(pura(arrNum3))
console.log(pura(arrNum4))