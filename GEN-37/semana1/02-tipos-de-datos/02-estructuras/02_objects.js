/*** TIPOS DE DATOS ==> Object ***/

// => Los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave y un valor.

const user = {
  // => Una propiedad es un par de "nombre clave: valor", donde nombre clave es un string y el valor puede ser cualquier cosa.
  name: "Yerson",
  lastName: "Patiño",
  age: 20,
  "is student": true,
  sayHi: function (name) {
    // Cuando pasas una func+on a una propiedad, se llama método
    return `Hi ${name}`;
  },
};

// Acceder a una propiedad con notaci+on de punto
console.log(user.name);
console.log(user.lastName);
console.log(user.age);
// console.log(user.'is student') // undefined

// Acceder a una propiedad con notación de corchetes
console.log(user["is student"]);
console.log(user["name"]);
console.log(user["age"]);

// Acceder al método
console.log(user.sayHi("Edgar"));
console.log(user["sayHi"]("Edgar"));

const game = {
  name: "Call of duty",
  type: "action",
  "is for xbox": true,
};

function getValues(obj, key) {
  return obj[key];
}

console.log(getValues(game, "type"));

// Agregar propiedades a un objeto
user.email = "jorge@email.com";
console.log(user);
user["is worker"] = false;
console.log(user);

// Agregar métodos
user.showAge = function () {
  return user.age;
};

console.log(user);
console.log(user.showAge());

user["show name"] = function () {
  return user.name;
};

console.log(user["show name"]());

// Modificar propiedades de un obj
user.age = 26;
console.log(user.age);

// Remover propiedades de un obj
delete user.lastName;
console.log(user);

delete user["is student"];
console.log(user);

// Comprobar si una propiedad existe dentro de un objeto
console.log(user.address); // undefined
console.log("address" in user); // false
console.log("name" in user); // true

// Los objetos son únicos, no se pueden repetir
const obj = {
  a: 1,
};

const newObj = {
  a: 1,
};

console.log(obj === newObj); // false
console.log((obj.a === newObj.a)) // true
//            1   ===    1        

const obj2 = obj;
console.log(obj === obj2); // true

// Accediendo a objetos profundos
const user1 = {
  name: "Ale",
  hobbies: {
    sports: {
      monday: [
        ["dance", "swim"],
        ["run", "box"],
      ],
      friday: {
        contact: "MMA",
        meditation: {
          early: "Yoga",
          afternon: "Massage",
        },
      },
    },
    activities: {
      tuesday: {
        school: "study",
        home: "homework",
      },
      wednesday: {
        school: "study",
        home: ["playing", ["read", "shower"], "sleep"],
      },
    },
  },
  group: "Gen25",
};

// box
console.log(user1.hobbies.sports.monday[1][1])
// sleep
console.log(user1.hobbies.activities.wednesday.home[2])
//Massage
// read
// homework
