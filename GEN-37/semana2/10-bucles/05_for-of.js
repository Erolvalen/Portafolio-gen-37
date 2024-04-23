/*********************/
/* BUCLES ==> FOR-OF */
/*********************/

/*
for (item of iterable) {
	// cuerpo del bucle
}
*/

const fruits = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈'];

for (const fruit of fruits) {
	console.log(fruit);
}

// Ejemplo práctico
const pets = [
	{
		name: 'Oogie',
		age: 1,
	},
	{
		name: 'Peluche',
		age: 5,
	},
	{
		name: 'Gatubela',
		age: 10,
	},
	{
		name: 'Pelusa',
		age: 3,
	},
];

function getPetNames(arr) {
	const namePets = [];

	for (const pet of arr) {
		console.log(pet);
		// namePets.push(pet['name'])
		namePets.push(pet.name);
	}

	return namePets;
}

console.log(getPetNames(pets));

const text = 'Aprendiendo JS con la GEN37';
for (const letter of text) {
	console.log(letter);
}
