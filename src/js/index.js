// Import styles
import '../scss/main.scss';

// Import JavaScript dependencies
import jQuery from 'jquery';
window.jQuery = jQuery;
import './vanilla-tilt.min.js';

// Import main script
import './script.js';

// Solar System Information - This would have been in the PHP files
import { initializePlanets, initializeMoons, initializeInfo } from './solar-data.js';

// Initialize the solar system data
document.addEventListener('DOMContentLoaded', function() {
    // Initialize planets
    initializePlanets();
    
    // Initialize moons
    initializeMoons();
    
    // Initialize information panels
    initializeInfo();
});
