/**********************************/
/* TIPOS DE DATOS ==> Ejercicios */
/*********************************/
// 1. ¿Cuál es el resultado de la siguiente expresión?
// [1, 2, 3, 4, 8, 9, 5][4]
// Respuesta: 8

// 2. ¿Cuál es el resultado de la siguiente expresión?
// let array = [8, 9, 1, 4]
// array[0]
// Respuesta: 8

// 3. ¿Cuál es el resultado de la siguiente expresión?
// let array = [1, 2, 3]
// array[2] = 'cuatro'
// array
// Respuesta: [1,2,'cuatro']

// 4. ¿Cuál es el resultado de la siguiente expresión?
// let array = [1, 2, 3]
// array.length
// Respuesta: 3

// 5. ¿Cuál es el resultado de la siguiente expresión?
// let array = [1, 2, 3]
// array[array.length - 1] = array[2]
// Respuesta: 3

// 6. ¿Cuál es el resultado de la siguiente expresión?
// let index = 2
// let array = [1, 2, 3]
// array[index] = array[2]
// Respuesta: 3

// 7. Define un objeto con 3 propiedades: 'myName', 'my lastname' y 'age', asígnales un valor y muestra el apellido y la edad.
const user = {
  myName: 'juan',
  'my lastname': 'serna',
  age: 20
}

console.log(user['my lastname'])
console.log(user.age)
console.log(user['age'])

// 8. Agrega una nueva propiedad al objeto anterior llamada 'my email' y muestra el valor de la propiedad.
user['my email'] = 'object@adding-anew.property.com';
console.log(user['my email']);

// 9. Modifica el valor de la propiedad 'age' y muestra el valor de la propiedad.
user.age = 1000000000000000000000000000000;
  console.log(user.age);

// 10. Agrega un nuevo método al objeto anterior llamado completeName que retorne el nombre y el apellido y muestra el valor de la propiedad. Puedes usar las backticks para concatenar las cadenas.
user.completeName = function (){
  return `${user.myName} ${user['my lastname']}`
}
console.log(user.completeName())

// 11. Accede a los valores "first element" y "sixth element" del siguiente objeto:
let obj = {
  elements: {
    "first elements": [1, 2, ["first element", "second element", "third element"], 4, 5],
    "second elements": { 
      "first block": {
        "second block": {
          "third block": [1, [["fourth element", 2],[3, "fifth element", 4],[5, 6, "sixth element", 7]], 2],
          "fourth block": [1, 2, 3]
        }
      }
    }
  },
  prop: true,
};
console.log(obj.elements["first elements"][2][0])
console.log(obj.elements["second elements"]["first block"]["second block"]["third block"][1][2][2])

// 12. Comprueba si el objeto anterior tiene la propiedad prop.
console.log("prop" in obj);

// 13. ¿Cuál es el resultado de la siguiente expresión?
// let obj = {}
// let obj2 = obj
// obj === obj2
// Resultado: true
