/**************************************************/
/* DESTRUCTURING ==> desestructuración de Objetos */
/**************************************************/

const user = {
	myName: 'Jorge',
	age: 30,
	email: 'jorg@gmasil.com',
};

const { myName, email, age } = user;

console.log(myName);
console.log(age);
console.log(email);

const pcs = {
	marca: 'Asus',
	precio: 7500,
	cantidad: 20,
};

const { precio, cantidad: disponibles, modelo = 'S/M', marca } = pcs;

console.log(precio);
console.log(disponibles);
console.log(modelo);
console.log(marca);

const { myName: nom, ...rest } = user;

console.log(nom);
console.log(rest);

const { marca: newPc } = pcs;
console.log(newPc);

// Esto genera un error
// {primero, segundo, tercero} = {primero: 1, segundo: 2, tercero: 3}

{
	const a = 1;

	console.log(a);
}
// console.log(a)

({ primero, segundo, tercero } = { primero: 1, segundo: 2, tercero: 3 });

console.log(primero);
console.log(segundo);
console.log(tercero);

// Desestructuración anidada
const animals = {
	perros: {
		labrador: {
			name: 'Terry',
			age: 2,
		},
	},
	gatos: {
		siames: {
			name: 'Peluso',
			age: 3,
		},
	},
};

const {
	perros: {
		labrador: { name: nameLabrador, age: ageLabrador },
	},
	gatos: {
		siames: { name: nameSiames, age: edadSiames },
	},
} = animals;

console.log(nameLabrador);
console.log(nameSiames);
console.log(edadSiames);
console.log(ageLabrador);

// Argumentos inteligentes
const dataForm = {
	email: 'mateo@gmail.com',
	pass: '123456',
	age: 20,
	country: 'Colombia',
	school: 'Academlo',
};

function auth({ email, pass }) {
	console.log(email);
	console.log(pass);
}

auth(dataForm);
