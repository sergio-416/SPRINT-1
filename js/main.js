'use strict';

import { initNavigation } from './navigation.js';
import { initFeatures } from './features.js';
import { initFAQ } from './faq.js';

document.addEventListener('DOMContentLoaded', () => {
	initNavigation();
	initFeatures();
	initFAQ();
	console.log('Main JS loaded - Navigation, Features, and FAQ initialized');
});
