/* ===== GET HTML ELEMENTS ===== */
const app = document.querySelector('.app');
const searchBar = document.querySelector('.app__search');
const appContainer = document.querySelector('.app__container');

/* ===== VARIABLES ===== */
const URL = 'https://rickandmortyapi.com/api/character';
let nextUrl = '';
let prevUrl = '';

/* ===== FUNCTIONS ===== */
async function getData(url) {
	// CON THEN
	// window
	// 	.fetch(URL)
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		// console.log(data);
	// 		nextUrl = data.info.next;
	// 		prevUrl = data.info.prev;
	// 		printCharacters(data.results);
	// 	});

	// CONASYNC AWAIT
	const res = await window.fetch(url);
	const { info, results } = await res.json();
	nextUrl = info.next;
	prevUrl = info.prev;
	printCharacters(results);
}

getData(URL);

const btnPrev = () =>
	prevUrl ? getData(prevUrl) : window.alert('Nothing to show');

const btnNext = () =>
	nextUrl ? getData(nextUrl) : window.alert('Nothing to show');

async function printCharacters(data) {
	let html = '';

	for (const { url } of data) {
		const res = await window.fetch(url);
		const { name, image } = await res.json();
		html += `
    <div class="app__item">
        <img class="app__item--img" src="${image}" alt="${name}">
        <h2 class="app__item--name">${name}</h2>
      </div>
    `;
	}

	appContainer.innerHTML = html;
}

async function printCharacter({ value }) {
	let html = '';

	const res = await window.fetch(URL + `/${value}`);
	const { name, image } = await res.json();
	html += `
    <div class="app__item">
        <img class="app__item--img" src="${image}" alt="${name}">
        <h2 class="app__item--name">${name}</h2>
      </div>
    `;

	return html;
}

/* ===== LISTENERS ===== */
app.addEventListener('click', ({ target }) => {
	if (target.classList.contains('button--prev')) {
		btnPrev();
	}
	if (target.classList.contains('button--next')) {
		btnNext();
	}
	if (target.classList.contains('button--initial')) {
		getData(URL);
	}
});

searchBar.addEventListener('change', async ({ target }) => {
	if (target.value) {
		const html = await printCharacter(target);
		appContainer.innerHTML = html;
	} else {
		getData(URL);
	}
});
