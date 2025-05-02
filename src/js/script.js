import jQuery from 'jquery';

// Info Button
jQuery(document).ready(function($) {
  $('.buttons .fa-info').click(function(){$('body').addClass('about-open');});
});


// Zoom & Nav Controls
jQuery(document).ready(function($) {

  // Planet Hover & Click Functions
  $.fn.innerPlanets = function() {
    $(".orbit.one").hover(function () {$('body').addClass('planet-1-hover');},function () {$('body').removeClass('planet-1-hover');});
    $(".orbit.two").hover(function () {$('body').addClass('planet-2-hover');},function () {$('body').removeClass('planet-2-hover');});
    $(".orbit.three").hover(function () {$('body').addClass('planet-3-hover');},function () {$('body').removeClass('planet-3-hover');});
    $(".orbit.four").hover(function () {$('body').addClass('planet-4-hover');},function () {$('body').removeClass('planet-4-hover');});
    $(".orbit.belt").hover(function () {$('body').addClass('planet-5-hover');},function () {$('body').removeClass('planet-5-hover');});
    $('.orbit.one').click(function(){$('body').removeClass().addClass('planet-1-click planet-click zoom_inner');});
    $(".orbit.two").click(function (){$('body').removeClass().addClass('planet-2-click planet-click zoom_inner');});
    $(".orbit.three").click(function (){$('body').removeClass().addClass('planet-3-click planet-click zoom_inner');});
    $(".orbit.four").click(function (){$('body').removeClass().addClass('planet-4-click planet-click zoom_inner');});
    $(".orbit.belt").click(function (){$('body').removeClass().addClass('planet-5-click planet-click zoom_inner');});
    $(".nav_inspect").click(function (){$('.zoom_inner .outer_planets').empty();});
  }

  $.fn.outerPlanets = function() {
    $(".orbit.five").hover(function () {$('body').addClass('planet-6-hover');},function () {$('body').removeClass('planet-6-hover');});
    $(".orbit.six").hover(function () {$('body').addClass('planet-7-hover');},function () {$('body').removeClass('planet-7-hover');});
    $(".orbit.seven").hover(function () {$('body').addClass('planet-8-hover');},function () {$('body').removeClass('planet-8-hover');});
    $(".orbit.eight").hover(function () {$('body').addClass('planet-9-hover');},function () {$('body').removeClass('planet-9-hover');});
    $('.orbit.five').click(function(){$('body').removeClass().addClass('planet-6-click planet-click zoom_outer');});
    $(".orbit.six").click(function (){$('body').removeClass().addClass('planet-7-click planet-click zoom_outer');});
    $(".orbit.seven").click(function (){$('body').removeClass().addClass('planet-8-click planet-click zoom_outer');});
    $(".orbit.eight").click(function (){$('body').removeClass().addClass('planet-9-click planet-click zoom_outer');});
    $(".nav_inspect").click(function (){$('.zoom_outer .inner_planets').empty();});
  }

  // How We Start
  $('.inner_planets').load('/php/planets.php #inner_planets', function() {$(this).innerPlanets();});
  $('.outer_planets').load('/php/planets.php #outer_planets', function() {$(this).outerPlanets();});
  $('.info-hold_inner-planets').load('/php/info.php #info-inner-planets');
  $('.info-hold_outer-planets').load('/php/info.php #info-outer-planets');

  $('.name-hold-inner').load('/php/info.php #names-inner');
  $('.name-hold-outer').load('/php/info.php #names-outer');
  $('.name-hold-object').load('/php/info.php #names-object');

  $('.name-hold-moons').load('/php/info.php #names-planet-3');

  // Nav:: Farout -->> Outer Planets
  $('.nav_steps_3 .nav_in').click(function(){
    $('body').removeClass().addClass('zoom_outer');
  });

  // Nav:: Outer Planets -->> Farout
  $('.nav_steps_2 .nav_out').click(function(){
    $('body').removeClass().addClass('zoom_farout');
  });

  // Nav:: Outer Planets -->> Inner Planets
  $('.nav_steps_2 .nav_in').click(function(){
    $('body').removeClass().addClass('zoom_inner');
  });

  // Nav:: Inner Planets -->> Outer Planets
  $('.nav_steps_1 .nav_out').click(function(){
    $('body').removeClass().addClass('zoom_outer');
  });

  // Nav:: DIRECT -->> Inner Planets
  $('.nav_direct_inner').click(function(){
    $('body').removeClass().addClass('zoom_inner');
    if ( $( "#inner_planets" ).length < 1 ) { $('.inner_planets').load('/php/planets.php #inner_planets', function() {$(this).innerPlanets();}); }
    if ( $( "#outer_planets" ).length < 1 ) { $('.outer_planets').load('/php/planets.php #outer_planets', function() {$(this).outerPlanets();}); }
  });

  // Nav:: DIRECT -->> Outer Planets
  $('.nav_direct_outer').click(function(){
    $('body').removeClass().addClass('zoom_outer');
    if ( $( "#inner_planets" ).length < 1 ) { $('.inner_planets').load('/php/planets.php #inner_planets', function() {$(this).innerPlanets();}); }
    if ( $( "#outer_planets" ).length < 1 ) { $('.outer_planets').load('/php/planets.php #outer_planets', function() {$(this).outerPlanets();}); }
  });

  $('.nav_deselect').click(function(){
    $('body').removeClass('planet-1-click planet-2-click planet-3-click planet-4-click planet-5-click planet-6-click planet-7-click planet-8-click planet-9-click planet-click');
    if ( $( "#inner_planets" ).length < 1 ) { $('.inner_planets').load('/php/planets.php #inner_planets', function() {$(this).innerPlanets();}); }
    if ( $( "#outer_planets" ).length < 1 ) { $('.outer_planets').load('/php/planets.php #outer_planets', function() {$(this).outerPlanets();}); }
  });

});

// Planet Inspect and Moon Stuff
jQuery(document).ready(function($) {

  // Moon Hover & Click Functions
  $.fn.planetMoons = function() {
    $(".moons .orbit.moon-one").hover(function () {$('body').addClass('moon-1-hover moon-hover');},function () {$('body').removeClass('moon-1-hover moon-hover');});
    $(".moons .orbit.moon-two").hover(function () {$('body').addClass('moon-2-hover moon-hover');},function () {$('body').removeClass('moon-2-hover moon-hover');});
    $(".moons .orbit.moon-three").hover(function () {$('body').addClass('moon-3-hover moon-hover');},function () {$('body').removeClass('moon-3-hover moon-hover');});
    $(".moons .orbit.moon-four").hover(function () {$('body').addClass('moon-4-hover moon-hover');},function () {$('body').removeClass('moon-4-hover moon-hover');});
    $(".moons .orbit.moon-five").hover(function () {$('body').addClass('moon-5-hover moon-hover');},function () {$('body').removeClass('moon-5-hover moon-hover');});
    $(".moons .orbit.moon-six").hover(function () {$('body').addClass('moon-6-hover moon-hover');},function () {$('body').removeClass('moon-6-hover moon-hover');});
    $(".moons .orbit.moon-seven").hover(function () {$('body').addClass('moon-7-hover moon-hover');},function () {$('body').removeClass('moon-7-hover moon-hover');});
    $(".moons .orbit.moon-eight").hover(function () {$('body').addClass('moon-8-hover moon-hover');},function () {$('body').removeClass('moon-8-hover moon-hover');});
  }

  // Planet Inspect & Moon Creation
  $(".nav_inspect_planet-1").click(function (){$('body').addClass('planet-1-inspect planet-inspect').removeClass('planet-click');});
  $(".nav_inspect_planet-2").click(function (){$('body').addClass('planet-2-inspect planet-inspect').removeClass('planet-click');});

  $(".nav_inspect_planet-3").click(function (){
    $('body').addClass('planet-3-inspect planet-inspect').removeClass('planet-click');
    $('.moons').load('/php/moons.php #moons-planet-3', function() {$(this).planetMoons();});
    $('.info-hold_moons').load('/php/info.php #info-planet3-moons');
    $('.name-hold-moons').load('/php/info.php #names-planet-3');
  });

  $(".nav_inspect_planet-4").click(function (){
    $('body').addClass('planet-4-inspect planet-inspect').removeClass('planet-click');
    $('.moons').load('/php/moons.php #moons-planet-4', function() {$(this).planetMoons();});
    $('.info-hold_moons').load('/php/info.php #info-planet4-moons');
    $('.name-hold-moons').load('/php/info.php #names-planet-4');
  });

  $(".nav_inspect_planet-6").click(function (){
    $('body').addClass('planet-6-inspect planet-inspect').removeClass('planet-click');
    $('.moons').load('/php/moons.php #moons-planet-5', function() {$(this).planetMoons();});
    $('.info-hold_moons').load('/php/info.php #info-planet5-moons');
    $('.name-hold-moons').load('/php/info.php #names-planet-5');
  });

  $(".nav_inspect_planet-7").click(function (){
    $('body').addClass('planet-7-inspect planet-inspect').removeClass('planet-click');
    $('.moons').load('/php/moons.php #moons-planet-6', function() {$(this).planetMoons();});
    $('.info-hold_moons').load('/php/info.php #info-planet6-moons');
    $('.name-hold-moons').load('/php/info.php #names-planet-6');
  });

  $(".nav_inspect_planet-8").click(function (){
    $('body').addClass('planet-8-inspect planet-inspect').removeClass('planet-click');
    $('.moons').load('/php/moons.php #moons-planet-7', function() {$(this).planetMoons();});
    $('.info-hold_moons').load('/php/info.php #info-planet7-moons');
    $('.name-hold-moons').load('/php/info.php #names-planet-7');
  });

  $(".nav_inspect_planet-9").click(function (){
    $('body').addClass('planet-9-inspect planet-inspect').removeClass('planet-click');
    $('.moons').load('/php/moons.php #moons-planet-8', function() {$(this).planetMoons();});
    $('.info-hold_moons').load('/php/info.php #info-planet8-moons');
    $('.name-hold-moons').load('/php/info.php #names-planet-8');
  });

  // Global Deselect
  $('.nav_deselect').click(function(){
    $('body').removeClass('planet-1-inspect planet-2-inspect planet-3-inspect planet-4-inspect planet-5-inspect planet-6-inspect planet-7-inspect planet-8-inspect planet-9-inspect planet-inspect');
    $('.moons').empty();
    $('.info-hold_moons').empty();
    $('.name-hold-moons').empty();
  });
});

// Next and Prev Buttons
jQuery(document).ready(function($) {
  $(".nav_arrow_orbit1 .nav_arrow_next").click(function (){$('body').removeClass('planet-1-click').addClass('planet-2-click');});

  $(".nav_arrow_orbit2 .nav_arrow_prev").click(function (){$('body').removeClass('planet-2-click').addClass('planet-1-click');});
  $(".nav_arrow_orbit2 .nav_arrow_next").click(function (){$('body').removeClass('planet-2-click').addClass('planet-3-click');});

  $(".nav_arrow_orbit3 .nav_arrow_prev").click(function (){$('body').removeClass('planet-3-click').addClass('planet-2-click');});
  $(".nav_arrow_orbit3 .nav_arrow_next").click(function (){$('body').removeClass('planet-3-click').addClass('planet-4-click');});

  $(".nav_arrow_orbit4 .nav_arrow_prev").click(function (){$('body').removeClass('planet-4-click').addClass('planet-3-click');});
  $(".nav_arrow_orbit4 .nav_arrow_next").click(function (){$('body').removeClass('planet-4-click').addClass('planet-5-click');});

  $(".nav_arrow_orbit5 .nav_arrow_prev").click(function (){$('body').removeClass('planet-5-click').addClass('planet-4-click');});
  $(".nav_arrow_orbit5 .nav_arrow_next").click(function (){$('body').removeClass('planet-5-click zoom_inner').addClass('zoom_outer planet-6-click');});

  $(".nav_arrow_orbit6 .nav_arrow_prev").click(function (){$('body').removeClass('planet-6-click zoom_outer').addClass('zoom_inner planet-5-click');});
  $(".nav_arrow_orbit6 .nav_arrow_next").click(function (){$('body').removeClass('planet-6-click').addClass('planet-7-click');});

  $(".nav_arrow_orbit7 .nav_arrow_prev").click(function (){$('body').removeClass('planet-7-click').addClass('planet-6-click');});
  $(".nav_arrow_orbit7 .nav_arrow_next").click(function (){$('body').removeClass('planet-7-click').addClass('planet-8-click');});

  $(".nav_arrow_orbit8 .nav_arrow_prev").click(function (){$('body').removeClass('planet-8-click').addClass('planet-7-click');});
  $(".nav_arrow_orbit8 .nav_arrow_next").click(function (){$('body').removeClass('planet-8-click').addClass('planet-9-click');});

  $(".nav_arrow_orbit9 .nav_arrow_prev").click(function (){$('body').removeClass('planet-9-click').addClass('planet-8-click');});

});


// Orbit Hover Class Toggles
jQuery(document).ready(function($) {
  $(".sun").hover(function () {$('body').addClass('planet-0-hover');},function () {$('body').removeClass('planet-0-hover');});
});

// Lazy Load Tilt Stuff
jQuery(document).ready(function($) {
  $.getScript("/js/vanilla-tilt.min.js")
});
