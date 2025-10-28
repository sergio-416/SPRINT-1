'use strict';

export function initNewsletter() {
	const form = document.getElementById('newsletter-form');
	const emailInput = document.getElementById('email-input');
	const errorMessage = document.getElementById('email-error');
	const errorIcon = document.getElementById('error-icon');

	if (!form || !emailInput) return;

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function validateEmail() {
		const email = emailInput.value.trim();
		const isValid = emailRegex.test(email);

		if (email === '') {
			hideError();
			return true;
		}

		if (!isValid) {
			showError();
			return false;
		}

		hideError();
		return true;
	}

	function showError() {
		emailInput.classList.add('border-soft-red');
		emailInput.setAttribute('aria-invalid', 'true');
		errorIcon.classList.remove('hidden');
		errorMessage.classList.remove('hidden');
	}

	function hideError() {
		emailInput.classList.remove('border-soft-red');
		emailInput.setAttribute('aria-invalid', 'false');
		errorIcon.classList.add('hidden');
		errorMessage.classList.add('hidden');
	}

	emailInput.addEventListener('blur', validateEmail);
	emailInput.addEventListener('input', () => {
		if (emailInput.value.trim() === '') {
			hideError();
		}
	});

	form.addEventListener('submit', e => {
		e.preventDefault();
		if (validateEmail()) {
			console.log('Form submitted with email:', emailInput.value);
			emailInput.value = '';
			hideError();
		}
	});
}
