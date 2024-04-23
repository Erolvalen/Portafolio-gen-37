/**** Guia de estilo de Javascript ****/
/*
Convenciones de codificación para Javascript:
Generalmente cubren:
  - Reglas de nomenclatura y declaración para variables y funciones.
  - Reglas para el uso de espacios en blanco, sangría y comentarios.
  - Prácticas y principios de programación.

Beneficios:
  - Mejorar la legibilidad del código.
  - Facilitar el mantenimiento del código.
  - Aumentar la productividad del programador.
  - Aumentar la calidad del código.
*/

/*** Comentarios ***/
// Comentario en línea
/*
Comentario
de
varias
líneas
*/

/*** Sentencias ***/
// Construcciones sit{ascticas que realizan acciones 
console.log('Hola mundo')

/*** Expresiones ***/
// Son una combinación de valores, variables y operadores en donde se producirá un valor 
console.log( 2 + 2 )

/*** Espaciado alrededor de los operadores ***/
let x = 2 + 5
let values = [ 1, 2, 3 ]

/*** Indentación ***/
// horizontal 
let i = 1

while (i < 10) {
  // horizontal 
  console.log(i)

  // vertical 
  i++
}
// vertical 
console.log(i)

/*** Tipos de valores ***/
// literales 
1, 'Hola', true
// dinámicos
let variable = 'a' 

/*** Reglas de nomenclatura para variables y funciones***/
// Las funcione sy las variables deben escribirse con camelCase y en inglés
// camelCase: la primer palabra min{uscula y la segunda mayüscula 
let myFirstVariable

function myFunction () {
  
}

/*** Reglas de la declaración ***/
let num = 1

let arr = [1, 2, 3]

/*** Punto y coma ***/
// eL PUNTO Y COMA EN JS puede omitirse, pero será necesario utilizarlo cuando la siguiente sentencia comienza con (, [, /, + o - 
console.log('Hola');
     
[1, 2, 3][0]

/*** Bloques de código ***/
{
  console.log('Bloque')
}

/***** EXTENCIONES *****/
// ES7+ React/Redux/React-Native snippets
// Image Preview 
// Live Preview o Live Server 
// Material Icon 
// Prettier 
// Quokka

