/**********************************/
/* VARIABLES ==> VAR, LET, CONST */
/*********************************/
/*
¿Ques es una variable?
Es un espacio en memoria donde se almacena una referencia o un valor.
*/

/* 
Reglas de nomenclatura para declarar variables:
- Usar solo let, var o const para declarar variables.
- No puede contener palabras reservadas de JavaScript.
- No puede comenzar con un número.
- No puede contener espacios.
- Solo pueden contener letras, números y guiones bajos y el signo de $.
- Nombre que contiene varias palabras se puede usar camelCase
- En inglés
*/

/**********************/
/* VARIABLES ==> VAR */
/*********************/
// Decalaración de var 
var myName

// Inicialización de var
myName = 'Gabriel'

// Declaración e inicializaci{on de var
var lastName = 'Perez'

// Declaración de múltiples variables
var age, email

var age,
    email

// var hola; let soy; const 

// Reasignación de var 
console.log(myName)
myName = 'Ricardo'
console.log(myName)

// Re declaración de var
var myName = 'Luis'
console.log(myName)

// Ambito, alcance y scope de var: global y a nivel de función 
{
    var b = 1
}

console.log(b)

function foo() {
    var e = 1
    console.log(e)
}

foo()
// console.log(e)

// Hoisting variables var 
console.log(d) // undefined
var d = 1
console.log(d) // 1

/**********************/
/* VARIABLES ==> LET */
/*********************/

// declaración de let 
let myName1 

console.log(myName1)

// inicialización de let 
myName1 = 'Freud'
console.log(myName1)

if (true) {
    myName1 = 'Jhon'
    console.log(myName1)
} else {
    myName1 = 'Luis'
    console.log(myName1) 
}

// Re declaración de variables 
// let myName1 = 

// declaración de múltiples variables con let 
let age1, email1

// Reasignación 
console.log(myName1)
myName1 = 'Adriana'
console.log(myName1)

/************************/
/* VARIABLES ==> CONST */
/***********************/

// declaración de const 
// const myName2 // No permite declararse sin inicializarse

// declaración y la inicializaci{on en lña mkisma línea 
const myName2 = 'Adriana'

// múltiples variables en línea 
const age2 = 15, email2 = 'correo@correo.com', lastName1 = 'Alvarez'

// múltiples variables por líne
const age3 = 20
const email3 = 'email@email.com'

// Reasignación de const
// age3 = 30
// console.log(age3)

// error común
const arr = [1, 2, 3]

console.log(arr)

arr[0] = 4
console.log(arr)

// arr = {}
// arr = 'Hola'
// arr = 1

// Ámbito, scope o alcance con let y const = global y local o de bloque
// bloque o local 
{
    let userName = 'Sergio'
    console.log(userName)

    const userAge = 25
    console.log(userAge)
}

// console.log(userName)
// console.log(userAge)

//global
let userName = 'Cristian'
const userAge = 30
console.log(userName)
console.log(userAge)

{
  console.log(userName)
  console.log(userAge)
}

// Hoisting con let y const 
// let y const sí se elevan, pero no se inicializan ni con undefined, ya que se elevan a la zona temporaL MUERTA TDZ 

// console.log(f) 
// console.log(g)

let f = 1
const g = 1



// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar 
