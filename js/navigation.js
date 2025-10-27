'use strict';

export function initNavigation() {
	const menuToggle = document.getElementById('menu-toggle');
	const mobileMenu = document.getElementById('mobile-menu');
	const hamburgerIcon = document.getElementById('hamburger-icon');
	const closeIcon = document.getElementById('close-icon');
	const logoDefault = document.getElementById('logo-default');
	const logoMobileActive = document.getElementById('logo-mobile-active');

	if (!menuToggle || !mobileMenu) return;

	menuToggle.addEventListener('click', () => {
		const isHidden = mobileMenu.classList.contains('hidden');

		if (isHidden) {
			mobileMenu.classList.remove('hidden');
			hamburgerIcon.classList.add('hidden');
			closeIcon.classList.remove('hidden');
			logoDefault.classList.add('hidden');
			logoMobileActive.classList.remove('hidden');
			menuToggle.setAttribute('aria-expanded', 'true');
			document.body.style.overflow = 'hidden';
		} else {
			mobileMenu.classList.add('hidden');
			hamburgerIcon.classList.remove('hidden');
			closeIcon.classList.add('hidden');
			logoDefault.classList.remove('hidden');
			logoMobileActive.classList.add('hidden');
			menuToggle.setAttribute('aria-expanded', 'false');
			document.body.style.overflow = '';
		}
	});
}
