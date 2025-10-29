'use strict';

export function initFeatures() {
	const tabButtons = document.querySelectorAll('[data-tab]');
	const tabPanels = document.querySelectorAll('[data-panel]');

	if (tabButtons.length === 0 || tabPanels.length === 0) return;

	function showTab(tabId) {
		tabPanels.forEach(panel => {
			if (panel.dataset.panel === tabId) {
				panel.classList.remove('hidden');
			} else {
				panel.classList.add('hidden');
			}
		});

		tabButtons.forEach(button => {
			const indicator = button.querySelector('span');

			if (button.dataset.tab === tabId) {
				button.setAttribute('aria-selected', 'true');
				button.classList.add('text-very-dark-blue');
				button.classList.remove('text-grayish-blue');
				if (indicator) indicator.classList.remove('opacity-0');
			} else {
				button.setAttribute('aria-selected', 'false');
				button.classList.remove('text-very-dark-blue');
				button.classList.add('text-grayish-blue');
				if (indicator) indicator.classList.add('opacity-0');
			}
		});
	}

	tabButtons.forEach(button => {
		button.addEventListener('click', () => {
			const tabId = button.dataset.tab;
			showTab(tabId);
		});
	});

	showTab('tab1');
}
