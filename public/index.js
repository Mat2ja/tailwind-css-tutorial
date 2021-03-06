const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const themeToggle = document.querySelector('#toggle');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

burger.addEventListener('click', () => {
	if (menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
	} else {
		menu.classList.add('hidden');
	}
});

themeToggle.addEventListener('click', () => {
	if (sun.classList.contains('hidden')) {
		sun.classList.remove('hidden');
		moon.classList.add('hidden');
		document.documentElement.classList.add('dark');
	} else {
		sun.classList.add('hidden');
		moon.classList.remove('hidden');
		document.documentElement.classList.remove('dark');
	}
});
