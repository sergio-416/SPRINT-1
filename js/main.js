'use strict';

import { initNavigation } from './navigation.js';
import { initFeatures } from './features.js';
import { initFAQ } from './faq.js';
import { initNewsletter } from './newsletter.js';

document.addEventListener('DOMContentLoaded', () => {
	initNavigation();
	initFeatures();
	initFAQ();
	initNewsletter();
	console.log('Main JS loaded - All modules initialized');
});
