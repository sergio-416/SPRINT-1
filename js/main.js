'use strict';

import { initNavigation } from './navigation.js';
import { initFeatures } from './features.js';

document.addEventListener('DOMContentLoaded', () => {
	initNavigation();
	initFeatures();
	console.log('Main JS loaded - Navigation and Features initialized');
});
