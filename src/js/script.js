import jQuery from 'jquery';
import { initializePlanets, initializeMoons, initializeInfo } from './solar-data.js';

// Single document ready function that contains all initialization
jQuery(document).ready(function($) {

  // Helper function to setup planet hover and click events
  function setupPlanetEvents(selector, hoverClass, clickClass, zoomClass) {
    $(selector).hover(
      function() { $('body').addClass(hoverClass); },
      function() { $('body').removeClass(hoverClass); }
    );
    
    $(selector).click(function() {
      $('body').removeClass().addClass(clickClass + ' planet-click ' + zoomClass);
    });
  }

  // Helper function to setup moon hover events
  function setupMoonEvents(index) {
    $(`.moons .orbit.moon-${index}`).hover(
      function() { $('body').addClass(`moon-${index}-hover moon-hover`); },
      function() { $('body').removeClass(`moon-${index}-hover moon-hover`); }
    );
  }
  
  // Planet Hover & Click Functions - consolidated into plugin methods
  $.fn.innerPlanets = function() {
    setupPlanetEvents('.orbit.one', 'planet-1-hover', 'planet-1-click', 'zoom_inner');
    setupPlanetEvents('.orbit.two', 'planet-2-hover', 'planet-2-click', 'zoom_inner');
    setupPlanetEvents('.orbit.three', 'planet-3-hover', 'planet-3-click', 'zoom_inner');
    setupPlanetEvents('.orbit.four', 'planet-4-hover', 'planet-4-click', 'zoom_inner');
    setupPlanetEvents('.orbit.belt', 'planet-5-hover', 'planet-5-click', 'zoom_inner');
    
    // No longer emptying outer planets when inspecting in inner zoom
    $(".nav_inspect").click(function() {
      // Empty call removed to prevent planets from unloading
    });
    
    return this;
  };

  $.fn.outerPlanets = function() {
    setupPlanetEvents('.orbit.five', 'planet-6-hover', 'planet-6-click', 'zoom_outer');
    setupPlanetEvents('.orbit.six', 'planet-7-hover', 'planet-7-click', 'zoom_outer');
    setupPlanetEvents('.orbit.seven', 'planet-8-hover', 'planet-8-click', 'zoom_outer');
    setupPlanetEvents('.orbit.eight', 'planet-9-hover', 'planet-9-click', 'zoom_outer');
    
    // No longer emptying inner planets when inspecting in outer zoom
    $(".nav_inspect").click(function() {
      // Empty call removed to prevent planets from unloading
    });
    
    return this;
  };

  // Moon Hover & Click Functions
  $.fn.planetMoons = function() {
    for (let i = 1; i <= 8; i++) {
      setupMoonEvents(i);
    }
    return this;
  };

  // Initialize planets on load
  initializePlanets(); // Initialize planet names
  initializeInfo(); // Initialize information panels
  
  // Setup planet interactions
  $('.inner_planets').innerPlanets();
  $('.outer_planets').outerPlanets();

  // Helper for initializing/reinitiallizing planet systems
  function ensurePlanetsInitialized() {
    if ($('#inner_planets').length < 1) {
      initializePlanets();
      $('.inner_planets').innerPlanets();
    }
    
    if ($('#outer_planets').length < 1) {
      initializePlanets();
      $('.outer_planets').outerPlanets();
    }
  }

  // Navigation events
  // Navigation zone changes
  $('.nav_steps_3 .nav_in').click(function() {
    $('body').removeClass().addClass('zoom_outer');
  });
  
  $('.nav_steps_2 .nav_out').click(function() {
    $('body').removeClass().addClass('zoom_farout');
  });
  
  $('.nav_steps_2 .nav_in').click(function() {
    $('body').removeClass().addClass('zoom_inner');
  });
  
  $('.nav_steps_1 .nav_out').click(function() {
    $('body').removeClass().addClass('zoom_outer');
  });

  // Direct navigation links
  $('.nav_direct_inner').click(function() {
    $('body').removeClass().addClass('zoom_inner');
    ensurePlanetsInitialized();
  });
  
  $('.nav_direct_outer').click(function() {
    $('body').removeClass().addClass('zoom_outer');
    ensurePlanetsInitialized();
  });

  // Planet inspection functions
  function setupPlanetInspection(planetId) {
    $(`.nav_inspect_planet-${planetId}`).click(function() {
      $('body').addClass(`planet-${planetId}-inspect planet-inspect`).removeClass('planet-click');
      
      // Only load moons for planets that have them
      if ([3, 4, 6, 7, 8, 9].includes(planetId)) {
        initializeMoons(planetId);
        $('.moons').planetMoons();
        initializeInfo(planetId);
      }
    });
  }
  
  // Setup inspection for all planets
  for (let i = 1; i <= 9; i++) {
    setupPlanetInspection(i);
  }

  // Global deselection
  $('.nav_deselect').click(function() {
    // Remove planet selection classes
    $('body').removeClass('planet-1-click planet-2-click planet-3-click planet-4-click planet-5-click planet-6-click planet-7-click planet-8-click planet-9-click planet-click');
    $('body').removeClass('planet-1-inspect planet-2-inspect planet-3-inspect planet-4-inspect planet-5-inspect planet-6-inspect planet-7-inspect planet-8-inspect planet-9-inspect planet-inspect');
    
    // Clear moon-related elements
    initializeMoons();
    $('.info-hold_moons').empty();
    $('.name-hold-moons').empty();
    
    ensurePlanetsInitialized();
  });

  // Next and Prev navigation
  // Helper function for navigation arrows
  function setupNavArrows(orbitNum, prevPlanet, nextPlanet, specialClass) {
    if (prevPlanet) {
      $(`.nav_arrow_orbit${orbitNum} .nav_arrow_prev`).click(function() {
        if (specialClass) {
          $('body').removeClass(`planet-${orbitNum}-click ${specialClass.from}`).addClass(`${specialClass.to} planet-${prevPlanet}-click`);
        } else {
          $('body').removeClass(`planet-${orbitNum}-click`).addClass(`planet-${prevPlanet}-click`);
        }
      });
    }
    
    if (nextPlanet) {
      $(`.nav_arrow_orbit${orbitNum} .nav_arrow_next`).click(function() {
        if (specialClass) {
          $('body').removeClass(`planet-${orbitNum}-click ${specialClass.from}`).addClass(`${specialClass.to} planet-${nextPlanet}-click`);
        } else {
          $('body').removeClass(`planet-${orbitNum}-click`).addClass(`planet-${nextPlanet}-click`);
        }
      });
    }
  }
  
  // Setup navigation arrows for each orbit
  setupNavArrows(1, null, 2);
  setupNavArrows(2, 1, 3);
  setupNavArrows(3, 2, 4);
  setupNavArrows(4, 3, 5);
  setupNavArrows(5, 4, 6, {from: 'zoom_inner', to: 'zoom_outer'});
  setupNavArrows(6, 5, 7, {from: 'zoom_outer', to: 'zoom_inner'});
  setupNavArrows(7, 6, 8);
  setupNavArrows(8, 7, 9);
  setupNavArrows(9, 8, null);

  // Sun hover effect
  $(".sun").hover(
    function() { $('body').addClass('planet-0-hover'); },
    function() { $('body').removeClass('planet-0-hover'); }
  );
});
