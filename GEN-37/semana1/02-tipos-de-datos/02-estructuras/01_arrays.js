/*** TIPOS DE DATOS ==> ARRAY ***/

//==> Los arreglos son usados para almacenar colecciones de datos ordenadas, donde cada elemento tiene un índice númerico.

const array = []; // Para crear un array se hace con literales o corchetes

console.log(array);

const userNames = ["Luis", "Jhon", "Vicente"];
//                   0       1         2

// Acceder a un elemento del arreglo
console.log(userNames[1]);
console.log(userNames[0]);
console.log(userNames[2]);
console.log(userNames[3]);

// La propiedad length
console.log(userNames.length);

// Reemplazar un elemento de un arreglo sin métods
// Es posible mediante la Asignación directa
userNames[1] = "Kevin";
console.log(userNames);

// Agregar un nuevo elemento
userNames[3] = "Victor";
console.log(userNames);
console.log(userNames.length);
console.log(userNames[userNames.length]);
userNames[userNames.length] = "Jesus";
console.log(userNames);

// Obtener el último índice
console.log(userNames[userNames.length - 1]);

// Truncar un arreglo
userNames.length = 2;
console.log(userNames);

// Vaciar, limpiar un arreglo
userNames.length = 0;
console.log(userNames);

// userNames = [] // error

// Podemos almacenar cualquier tipo de dato en un arreglo
const myArray = [
  { a: 1 },
  "hola",
  true,
  39,
  [1, 2, 3],
  function sayHi() {
    return "hi";
  },
];

console.log(myArray[4]);
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[5]);
console.log(myArray[5]());

// Arreglo multidimensional
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);

// Accediendo a arrAYS MULtidimensionales
const deepArray = [
  [
    [
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ],
    ],
    [
      [
        [9, 10],
        [11, 12],
      ],
      [
        [13, 14],
        [15, 16],
      ],
    ],
  ],
  [
    [
      [
        [17, 18],
        [19, 20],
      ],
      [
        [21, 22],
        [23, 24],
      ],
    ],
    [
      [
        [25, 26],
        [27, 28],
      ],
      [
        [29, 30],
        [31, 32],
      ],
    ],
  ],
];


console.log(deepArray[0][0][0][0])
console.log(deepArray[1][1][1][0])
console.log(deepArray[1][0][0][1])

// Cómo saber que es un arreglo
console.log(typeof deepArray) // 'object'

console.log(Array.isArray(deepArray)) // true