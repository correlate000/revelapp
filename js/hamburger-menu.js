"use strict";
{
	const button = document.querySelector('.hamburger');
	const nav = document.querySelector('.hamburger-menu .nav');
	const navLinks = document.querySelectorAll('.hamburger-menu .nav ul li a');

	button.addEventListener('click', function() {
		button.classList.toggle('open');
		nav.classList.toggle('open');

 	});
	 navLinks.forEach(navLink => {
		navLink.addEventListener('click', function() {
		  button.classList.toggle('open');
		  nav.classList.toggle('open');
		  console.log('押されたで！')  
	   });
	});
}


