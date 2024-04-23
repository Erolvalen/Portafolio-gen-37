/***************************************/
/* ASYNC ==> Asincronía con callbacks */
/**************************************/

// Callback: Una función que se pasa como argumento a otra función
function sum() {
	return 5 + 5;
}

function result(callback) {
	const result = callback();
	return result;
}

console.log(result(sum));

// Asincronia
function getData(callback) {
	console.log('Realizando la petición');
	window.setTimeout(() => {
		console.log('Llegaron los datos');
		callback();
	}, 5000);
}

function printData() {
	console.log('Pintando la data');
}

getData(printData);
// printData();

getData(function printData() {
	console.log('Pintando la data');
	getData(function printData() {
		console.log('Pintando la data');
		getData(function printData() {
			console.log('Pintando la data');
			getData(function printData() {
				console.log('Pintando la data');
				getData(function printData() {
					console.log('Pintando la data');
					getData(function printData() {
						console.log('Pintando la data');
						getData(function printData() {
							console.log('Pintando la data');
							getData(function printData() {
								console.log('Pintando la data');
								getData(function printData() {
									console.log('Pintando la data');
									getData(function printData() {
										console.log('Pintando la data');
										getData(function printData() {
											console.log('Pintando la data');
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});
