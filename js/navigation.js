'use strict';

export function initNavigation() {
	const menuToggle = document.getElementById('menu-toggle');
	const mobileMenu = document.getElementById('mobile-menu');
	const hamburgerIcon = document.getElementById('hamburger-icon');
	const closeIcon = document.getElementById('close-icon');
	const logoDefault = document.getElementById('logo-default');
	const logoMobileActive = document.getElementById('logo-mobile-active');

	if (!menuToggle || !mobileMenu) return;

	function closeMenu() {
		mobileMenu.classList.add('hidden');
		mobileMenu.classList.remove('flex');
		hamburgerIcon.classList.remove('hidden');
		closeIcon.classList.add('hidden');
		logoDefault.classList.remove('hidden');
		logoMobileActive.classList.add('hidden');
		menuToggle.setAttribute('aria-expanded', 'false');
		document.body.style.overflow = '';
	}

	function openMenu() {
		mobileMenu.classList.remove('hidden');
		mobileMenu.classList.add('flex');
		hamburgerIcon.classList.add('hidden');
		closeIcon.classList.remove('hidden');
		logoDefault.classList.add('hidden');
		logoMobileActive.classList.remove('hidden');
		menuToggle.setAttribute('aria-expanded', 'true');
		document.body.style.overflow = 'hidden';
	}

	menuToggle.addEventListener('click', () => {
		const isHidden = mobileMenu.classList.contains('hidden');
		if (isHidden) {
			openMenu();
		} else {
			closeMenu();
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth >= 1024) {
			closeMenu();
		}
	});
}
