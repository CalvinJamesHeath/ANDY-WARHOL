const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('nav-menu_visible');

	if (navMenu.classList.contains('nav-menu_visible')) {
		navToggle.setAttribute('aria-label', 'Cerrar menú');
	} else {
		navToggle.setAttribute('aria-label', 'Abrir menú');
	}
});

function myFunction() {
	var dots = document.getElementById('dots');
	var moreText = document.getElementById('more');
	var btnText = document.getElementById('myBtn');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Leer más';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Leer menos';
		moreText.style.display = 'inline';
	}
}

function openAndysCollection(evt, obraAndy) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(obraAndy).style.display = 'block';
	evt.currentTarget.className += ' active';
}
