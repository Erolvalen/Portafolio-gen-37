/**********************************/
/* MÉTODOS ==> OBJETOS (OBJECTS) */
/*********************************/

const user = {
    name: 'Mateo',
    lastname: 'Alvarez',
    age: 50
}

// .entries() Devuelve un array que contiene todos los pares [key, value] de las propiedades enumerables en formato cadena de texto que le pertenece a un objeto dado.
console.log(Object.entries(user))

// .keys() Devuelve un array que contiene todas las claves de las propiedades enumerables de un objeto dado.
console.log(Object.keys(user))

// .values() Devuelve un array que contiene todos los valores de las propiedads enumerables de un objeto dado.
console.log(Object.values(user))

// .fromEntries() Devuelve un objeto que contiene todos los pares [key, value] de las propiedades enumerables en formato cadena de texto que le pertenece a un array dado.
const user1 = [['name', 'Gabriel'], ['lastname', 'Gabrielli'], ['age', 60]]
console.log(Object.fromEntries(user1))

// .assign() Asigna una o más propiedades de un objeto a un objeto destino.
const obj = {}
console.log(Object.assign(obj, user))
console.log(obj)
const newObj = {}
console.log(Object.assign(newObj, obj, {name: 'Alberth'}))
console.log(newObj) // Si existe la propiedad, reasigna
console.log(Object.assign(newObj, obj, {student: true}))
console.log(newObj) // Si no existe la propiedad, la agrega

// .freeze() Congela un objeto. Otro código no puede borrar ni cambiar sus propiedades.
Object.freeze(obj)
obj.name = 'Emmanuel'
console.log(obj)

// .isFrozen() Devuelve un booleano que indica si un objeto está congelado.
console.log(Object.isFrozen(obj))
console.log(Object.isFrozen(newObj))

// .seal() Te permite modificar los valores de las propiedades existentes, pero no agregar ni eliminar
console.log(Object.seal(newObj))
newObj.age = 45
newObj.address = 'San José'
delete newObj.name
console.log(newObj)

// .isSealed() Te permite validar si el objeto tiene el método seal
console.log(Object.isSealed(newObj))