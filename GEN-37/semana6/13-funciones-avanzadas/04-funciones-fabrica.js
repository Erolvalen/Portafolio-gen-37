/**************************************/
/* FUNCTION ==> Funciones de Fábrica */
/*************************************/

// Son funciones que devuelven un objeto (presumiblemente nuevo), sin la necesidad de se una clase o un constructor.

// Ejemplifiquemos esto con un CRUD: cREATE, rEAD, Update, Delete
function crud() {
	let usuarios = [];

	return {
		create(usuario) {
			usuarios.push(usuario);
		},
		read(callback) {
			callback(usuarios);
		},
		update(usuario) {
			usuarios = usuarios.map((user) =>
				user.nombre === usuario.nombre ? usuario : user,
			);
		},
		delete(usuario) {
			usuarios = usuarios.filter((user) => user.nombre !== usuario.nombre);
		},
	};
}

const grupoGen37 = crud();
console.log(grupoGen37);

// create
grupoGen37.create({ nombre: 'Gabriel' });
grupoGen37.create({ nombre: 'Manuel' });
grupoGen37.create({ nombre: 'Ismael', direccion: 'Colombia' });

// read
grupoGen37.read((usuarios) => {
	console.log(usuarios);
});

// update
grupoGen37.update({ nombre: 'Gabriel', edad: 30 });
grupoGen37.read((usuarios) => {
	console.log(usuarios);
});

// delete
grupoGen37.delete({ nombre: 'Manuel' });
grupoGen37.read((usuarios) => {
	console.log(usuarios);
});

const grupoGen38 = crud();
grupoGen38.create({ nombre: 'Enma' });
grupoGen38.read((usuarios) => {
	console.log(usuarios);
});
