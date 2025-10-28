'use strict';

export function initFAQ() {
	const faqItems = document.querySelectorAll('.faq-item');

	if (faqItems.length === 0) return;

	faqItems.forEach(item => {
		const summary = item.querySelector('summary');

		if (!summary) return;

		item.addEventListener('toggle', () => {
			const isOpen = item.hasAttribute('open');
			summary.setAttribute('aria-expanded', isOpen.toString());
		});

		summary.setAttribute('aria-expanded', item.hasAttribute('open').toString());
	});
}
