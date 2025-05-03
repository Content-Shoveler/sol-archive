// Import styles
import '../scss/main.scss';

// Import JavaScript dependencies
import jQuery from 'jquery';
window.jQuery = jQuery; // Expose jQuery globally for legacy script support
import './vanilla-tilt.min.js';

// Import solar system components
import { initializePlanets, initializeMoons, initializeInfo } from './solar-data.js';

// Fix for mobile viewport height issues
function setTrueViewportHeight() {
  // Get the actual viewport height
  const vh = window.innerHeight * 0.01;
  // Set it as a CSS variable
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set the height on initial load
setTrueViewportHeight();

// Update the height on resize and orientation change
window.addEventListener('resize', setTrueViewportHeight);
window.addEventListener('orientationchange', setTrueViewportHeight);

// Import main script - must be imported after jQuery is set globally
import './script.js';

// The DOMContentLoaded initialization is redundant since script.js already 
// handles initialization with jQuery document.ready
