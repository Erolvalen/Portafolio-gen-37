/***************************/
/* OPERADORES ==> LÓGICOS */
/**************************/

/*
Operadores lógicos estándar:
|| OR => Busca el primer valor verdadero o el último si no lo encuentra, el cero lo toma como falso
&& AND => Busca el primer valor falso o el último si no lo encuentra
! NOT => Convierte el valor a booleano y un segundo NOT invierte el valor de nuevo
Operador nullish, se introdujo en la versión ES2020:
?? ES NULO (Nullish)=> busca igual que OR pero busca el primer valor definido (que no sea null o undefined), el cero no lo toma como falso, el cero sí cuenta
*/

/******************************/
/* OPERADORES ==> LÓGICOS OR */
/*****************************/

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(0 || 1); // 1
console.log(0 || ' ' || ''); // ' '
console.log(null || undefined); // undefined
console.log(null || undefined || false || 0 || '' || NaN); // NaN
console.log(1 || 2 || 3 || 4); // 1

// eJEMPLO PRÁCTICO
const name = null;
const lastname = null;
const userName = null;

console.log('Bienvenid@ ', name || lastname || userName || 'Anónim@'); // 'Bienvenid@ Anónim@

/******************************/
/* OPERADORES ==> LÓGICOS AND */
/*****************************/

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

console.log(0 && 1); // 0
console.log(0 && ' ' && ''); // 0
console.log(null && undefined); // null
console.log(null && undefined && false && 0 && '' && NaN); // null
console.log(1 && 2 && 3 && 4); // 4

//Ejemplo práctico
const myName = 'Jean';
const myLastName = 'Florez';
const email = 'florez@gmail.com';
const pass = '1234567';

if (myName && myLastName && email && pass) {
	console.log('Registro completado existosamente');
} else {
	console.log('Por favor, completa todos los campos para registrarte');
}

// **Importante** La precedencia del operador AND es mayor que la de OR
console.log((true && false) || true); // true
// Por pasos
// 1-
console.log(true && false); // false
// 2-
console.log(false || true); // true

/*******************************/
/* OPERADORES ==> LÓGICOS NOT */
/******************************/
/*
El operador acepta un solo argumento y realiza lo siguiente:
- Convierte el operando al tipo booleano: true/false.
- Retorna el valor contrario.
*/
console.log(true); // true
console.log(!true); // false
console.log(false); // false
console.log(!false); // true

console.log(1); // 1
console.log(!1); // false
console.log(0); // 0
console.log(!0); // true
console.log('Soy un texto'); // 'Soy un texto
console.log(!'Soy un texto'); // false
console.log(null); // null
console.log(!null); // true
console.log(''); // ''
console.log(!''); // true

// Un doble NOT
console.log(!!1); // true
console.log(!!0); // false
console.log(!!'Soy un texto'); // true
console.log(!!null); // false

// Ejemplo práctico
const num = 2;

if (!(num % 2)) {
	console.log(`${num} es un número par`);
} else {
	console.log(`${num} es un número impar`);
}

// La precedencia de NOT es la mayor de todos los operadores lógicos, antes de AND y OR.
console.log((true && false) || !true); // false

/**********************************************/
/* OPERADORES ==> LÓGICOS ?? NULLISH COALESCING */
/*********************************************/

const num3 = 0;
const num4 = 1;

console.log(num3 ?? num4); // 0
console.log(num3 || num4); // 1

/*
La gran diferencia es que:
  || devuelve el primer valor verdadero.
  ?? devuelve el primer valor "definido".
*/

// Ejemplo práctico
const height = 0;

console.log(height || 'No se conoce la altura');
console.log(height ?? 'pUEDO ACCEDER A LA ALTURA');

// La precedencia del operador ?? es la misma de ||.
console.log((null || 'hola') ?? 123);
