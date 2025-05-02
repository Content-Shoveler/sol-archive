// Import styles
import '../scss/main.scss';

// Import JavaScript dependencies
import jQuery from 'jquery';
window.jQuery = jQuery; // Expose jQuery globally for legacy script support
import './vanilla-tilt.min.js';

// Import solar system components
import { initializePlanets, initializeMoons, initializeInfo } from './solar-data.js';

// Import main script - must be imported after jQuery is set globally
import './script.js';

// The DOMContentLoaded initialization is redundant since script.js already 
// handles initialization with jQuery document.ready
