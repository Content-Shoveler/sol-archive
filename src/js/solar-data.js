// This module replaces the data that was previously served via PHP includes

// Function to initialize planet names
export function initializePlanets() {
    // Add inner planets names
    document.querySelector('.name-hold-inner').innerHTML = `
        <div id="names-inner">
            <div class="name zero"><p>Sun</p></div>
            <div class="name one"><p>Mercury</p></div>
            <div class="name two"><p>Venus</p></div>
            <div class="name three"><p>Earth</p></div>
            <div class="name four"><p>Mars</p></div>
            <div class="name five"><p>The Belt</p></div>
        </div>
        
        <div id="names-outer">
            <div class="name six"><p>Jupiter</p></div>
            <div class="name seven"><p>Saturn</p></div>
            <div class="name eight"><p>Uranus</p></div>
            <div class="name nine"><p>Neptune</p></div>
        </div>
    `;
    
    // Add moon names for each planet
    document.querySelector('.name-hold-moons').innerHTML = `
        <div id="names-planet-3">
            <div class="name m-one"><p>International Space Station</p></div>
            <div class="name m-two"><p>Humans Orbiting Stuff</p></div>
            <div class="name m-three"><p>The Moon!</p></div>
        </div>
        
        <div id="names-planet-4">
            <div class="name m-one"><p>Phobos</p></div>
            <div class="name m-two"><p>Deimos</p></div>
        </div>
        
        <div id="names-planet-5">
            <div class="name m-one"><p>Io</p></div>
            <div class="name m-two"><p>Europa</p></div>
            <div class="name m-three"><p>Ganymede</p></div>
            <div class="name m-four"><p>Callisto</p></div>
        </div>
        
        <div id="names-planet-6">
            <div class="name m-one"><p>Mimas</p></div>
            <div class="name m-two"><p>Enceladus</p></div>
            <div class="name m-three"><p>Tethys</p></div>
            <div class="name m-four"><p>Dione</p></div>
            <div class="name m-five"><p>Rhea</p></div>
            <div class="name m-six"><p>Titan</p></div>
            <div class="name m-seven"><p>Iapetus</p></div>
        </div>
        
        <div id="names-planet-7">
            <div class="name m-one"><p>Miranda</p></div>
            <div class="name m-two"><p>Ariel</p></div>
            <div class="name m-three"><p>Umbriel</p></div>
            <div class="name m-four"><p>Titania</p></div>
            <div class="name m-five"><p>Oberon</p></div>
        </div>
        
        <div id="names-planet-8">
            <div class="name m-one"><p>Triton</p></div>
        </div>
    `;
}

// Function to initialize moons
export function initializeMoons(planetId) {
    // If no planetId is provided, clear the moons
    if (!planetId) {
        document.querySelector('.moons').innerHTML = '';
        return;
    }
    
    // Only load the moons for the specified planet
    let moonsHTML = '';
    
    // Select the appropriate moon set based on the planetId
    switch(planetId) {
        case 3: // Earth
            moonsHTML = `
<!-- Planet 3 Moons (Earth) ++++++++++++++++++++++++++++++++++++++++++ -->
<div id="moons-planet-3">
    <div class="orbit sat_iss moon-one">
        <div class="center">
            <div class="elip">
                <div class="planet"></div>
            </div>
        </div>
    </div>

    <div class="orbit belt junk_cloud moon-two">
        <div class="cloud one"></div>
        <div class="cloud two"></div>
        <div class="cloud three"></div>
    </div>

    <div class="orbit moon-three">
        <div class="center">
            <div class="elip">
                <div class="planet"></div>
            </div>
        </div>
    </div>
</div>
`;
            break;
        case 4: // Mars
            moonsHTML = `
<!-- Planet 4 Moons (Mars) ++++++++++++++++++++++++++++++++++++++++++ -->
<div id="moons-planet-4">
            <div class="orbit moon-one">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-two">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>
</div>
`;
            break;
        case 6: // Jupiter (Planet 5 in UI numbering)
            moonsHTML = `
<!-- Planet 5 Moons (Jupiter) ++++++++++++++++++++++++++++++++++++++++++ -->
<div id="moons-planet-5">
            <div class="orbit moon-one">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-two">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-three">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-four">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>
</div>
`;
            break;
        case 7: // Saturn (Planet 6 in UI numbering)
            moonsHTML = `
<!-- Planet 6 Moons (Saturn) ++++++++++++++++++++++++++++++++++++++++++ -->
<div id="moons-planet-6">
            <div class="orbit moon-one">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-two">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-three">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-four">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-five">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-six">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-seven">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-eight">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>
</div>
`;
            break;
        case 8: // Uranus (Planet 7 in UI numbering)
            moonsHTML = `
<!-- Planet 7 Moons (Uranus) ++++++++++++++++++++++++++++++++++++++++++ -->
<div id="moons-planet-7">
            <div class="orbit moon-one">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-two">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-three">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-four">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>

            <div class="orbit moon-five">
                <div class="center">
                    <div class="elip">
                        <div class="planet"></div>
                    </div>
                </div>
            </div>
</div>
`;
            break;
        case 9: // Neptune (Planet 8 in UI numbering)
            moonsHTML = `
<!-- Planet 8 Moons (Neptune) ++++++++++++++++++++++++++++++++++++++++++ -->
<div id="moons-planet-8">
    <div class="orbit moon-one">
        <div class="center">
            <div class="elip">
                <div class="planet"></div>
            </div>
        </div>
    </div>
</div>
`;
            break;
        default:
            // No moons for other planets
            moonsHTML = '';
    }
    
    // Set the moons HTML
    document.querySelector('.moons').innerHTML = moonsHTML;
}

// Function to initialize information panels
export function initializeInfo(planetId) {
    // Initialize the planet info panels (always)
    // Inner planets info
    document.querySelector('.info-hold_inner-planets').innerHTML = `
        <div id="info-inner-planets">
            <div class="info one">
                <h1>Size</h1>
                <p>Earth Comparison | 36%</p>
                <p>Diameter | 4,879 km</p>
                <h1>Location</h1>
                <p>Distance from Sun | 57.91 million km</p>
                <h1>Year Length</h1>
                <p>88 Earth Days</p>
                <h1>Day Length</h1>
                <p>58.625 Earth Days</p>
                <h1>Moons</h1>
                <p>No Moons</p>
                <h1>Climate</h1>
                <p>Average temperature | 167 Celsius</p>
                <p>Atmosphere | None</p>
            </div>
            <div class="info two">
                <h1>Size</h1>
                <p>Earth Comparison | 95%</p>
                <p>Diameter | 12,104 km</p>
                <h1>Location</h1>
                <p>Distance from Sun | 108.2 million km</p>
                <h1>Year Length</h1>
                <p>225 Earth Days</p>
                <h1>Day Length</h1>
                <p>116.75 Earth Days</p>
                <h1>Moons</h1>
                <p>No Moons</p>
                <h1>Climate</h1>
                <p>Average temperature | 462 Celsius</p>
                <p>Atmosphere | Very Thick</p>
            </div>
            <div class="info three">
                <h1>Size</h1>
                <p>Diameter | 12,742 km</p>
                <h1>Location</h1>
                <p>Distance from Sun | 149.6 million km</p>
                <h1>Year Length</h1>
                <p>365 Days</p>
                <h1>Day Length</h1>
                <p>24 Hours</p>
                <h1>Moons</h1>
                <p>The Moon!</p>
                <h1>Climate</h1>
                <p>Average temperature | 15 Celsius</p>
                <p>Atmosphere | Perfect (for Humans)</p>
            </div>
            <div class="info four">
                <h1>Size</h1>
                <p>Earth Comparison | 53%</p>
                <p>Diameter | 6,779 km</p>
                <h1>Location</h1>
                <p>Distance from Sun | 227.9 million km</p>
                <h1>Year Length</h1>
                <p>687 Earth Days</p>
                <h1>Day Length</h1>
                <p>1 Earth Day</p>
                <h1>Moons</h1>
                <p>Phobos<br/>Deimos</p>
                <h1>Climate</h1>
                <p>Average temperature | -55 Celsius</p>
                <p>Atmosphere | Thin</p>
            </div>
            <div class="info five">
                <p>Add up all the stuff in the belt and you'd have 4% of Earth's moon.</p>
            </div>
        </div>
    `;

    // Outer planets info
    document.querySelector('.info-hold_outer-planets').innerHTML = `
        <div id="info-outer-planets">
            <div class="info six">
                <h1>Size</h1>
                <p>Earth Comparison | 1,097%</p>
                <p>Diameter | 139,822 km</p>
                <h1>Location</h1>
                <p>Distance from Sun | 778.5 million km</p>
                <h1>Year Length</h1>
                <p>12 Earth Years</p>
                <h1>Day Length</h1>
                <p>10 Earth Hours</p>
                <h1>Moons</h1>
                <p>Major | 4</p>
                <p>Minor | 49</p>
                <h1>Climate</h1>
                <p>Average temperature | -145 Celsius</p>
            </div>
            <div class="info seven">
                <h1>Size</h1>
                <p>Earth Comparison | 914%</p>
                <p>Diameter | 11,464 km</p>
                <h1>Location</h1>
                <p>Distance from Sun | 1.43 billion km</p>
                <h1>Year Length</h1>
                <p>29 Earth Years</p>
                <h1>Day Length</h1>
                <p>10.8 Earth Hours</p>
                <h1>Moons</h1>
                <p>Major | 8</p>
                <p>Minor | 45</p>
                <h1>Climate</h1>
                <p>Average temperature | -178 Celsius</p>
            </div>
            <div class="info eight">
                <h1>Size</h1>
                <p>Earth Comparison | 398%</p>
                <p>Diameter | 50,724 km</p>
                <h1>Location</h1>
                <p>Distance from Sun | 2.87 billion km</p>
                <h1>Year Length</h1>
                <p>84 Earth Years</p>
                <h1>Day Length</h1>
                <p>17.3 Earth Hours</p>
                <h1>Moons</h1>
                <p>Major | 5</p>
                <p>Minor | 22</p>
                <h1>Climate</h1>
                <p>Average temperature | -216 Celsius</p>
            </div>
            <div class="info nine">
                <h1>Size</h1>
                <p>Earth Comparison | 386%</p>
                <p>Diameter | 49,244 km</p>
                <h1>Location</h1>
                <p>Distance from Sun | 4.495 billion km</p>
                <h1>Year Length</h1>
                <p>165 Earth Years</p>
                <h1>Day Length</h1>
                <p>16 Earth Hours</p>
                <h1>Moons</h1>
                <p>Major | 1</p>
                <p>Minor | 23</p>
                <h1>Climate</h1>
                <p>Average temperature | -214 Celsius</p>
            </div>
        </div>
    `;

    // Clear the moon info container by default
    document.querySelector('.info-hold_moons').innerHTML = '';
    
    // If no planetId provided, return early (just initialize the basic planet info)
    if (!planetId) {
        return;
    }
    
    // Moons info - only load for the specific planet
    let moonsInfoHTML = '';
    
    switch(planetId) {
        case 3: // Earth
            moonsInfoHTML = `
            <!-- Planet 3 (Earth) Moons Info -->
            <div id="info-planet3-moons">
                <div class="info moon-1">
                    <h1>Size</h1>
                    <p>Width | 109 m</p>
                    <p>height | 73 m</p>
                    <p>Weight | 408,000 kg</p>
                    <h1>Distance from planet</h1>
                    <p>408 km</p>
                    <h1>Orbital Period</h1>
                    <p>1.5 hours</p>
                    <h1>Occupants</h1>
                    <p>3 - 6</p>
                </div>
                <div class="info moon-2">
                    <h1>Satellites launcheed into orbit</h1>
                    <p>About 8,650</p>
                    <h1>Number of these still functioning</h1>
                    <p>About 1,800</p>
                    <h1>Number of objects larger then 10cm</h1>
                    <p>29,000</p>
                    <h1>Total mass of all space objects in orbit</h1>
                    <p>over 8,100 tonnes</p>
                </div>
                <div class="info moon-3">
                    <h1>Size</h1>
                    <p>Diameter | 1,737 km</p>
                    <h1>Distance from planet</h1>
                    <p>Perigee | 363,104 km</p>
                    <p>Apogee  | 405,696 km</p>
                    <h1>Orbital Period</h1>
                    <p>24 Days</p>
                </div>
            </div>`;
            break;
        case 4: // Mars
            moonsInfoHTML = `
            <!-- Planet 4 (Mars) Moons Info -->
            <div id="info-planet4-moons">
                <div class="info moon-1">
                    <h1>Size</h1>
                    <p>Diameter | 11.267 km</p>
                    <h1>Distance from planet</h1>
                    <p>Perigee | 9234 km</p>
                    <p>Apogee  | 9517 km</p>
                    <h1>Orbital Period</h1>
                    <p>8 Hours</p>
                </div>
                <div class="info moon-2">
                    <h1>Size</h1>
                    <p>Diameter | 1,737 km</p>
                    <h1>Distance from planet</h1>
                    <p>Perigee | 23455 km</p>
                    <p>Apogee  | 23470 km</p>
                    <h1>Orbital Period</h1>
                    <p>30 Hours</p>
                </div>
            </div>`;
            break;
        case 6: // Jupiter (Planet 5 in UI numbering)
            moonsInfoHTML = `
            <!-- Planet 5 (Jupiter) Moons Info -->
            <div id="info-planet5-moons">
                <div class="info moon-1">
                    <h1>Size</h1>
                    <p>Diameter | 3,643 km</p>
                    <h1>Distance from planet</h1>
                    <p>Perigee | 420,000 km</p>
                    <p>Apogee  | 423,400 km</p>
                    <h1>Orbital Period</h1>
                    <p>42 Hours</p>
                </div>
                <div class="info moon-2">
                    <h1>Size</h1>
                    <p>Diameter | 3,121 km</p>
                    <h1>Distance from planet</h1>
                    <p>Perigee | 664,862 km</p>
                    <p>Apogee  | 676,938 km</p>
                    <h1>Orbital Period</h1>
                    <p>85 Hours</p>
                </div>
                <div class="info moon-3">
                    <h1>Size</h1>
                    <p>Diameter | 5,268 km</p>
                    <h1>Distance from planet</h1>
                    <p>Perigee | 1,069,200 km</p>
                    <p>Apogee  | 1,071,600 km</p>
                    <h1>Orbital Period</h1>
                    <p>172 Hours</p>
                </div>
                <div class="info moon-4">
                    <h1>Size</h1>
                    <p>Diameter | 4,820 km</p>
                    <h1>Distance from planet</h1>
                    <p>Perigee | 1,869,000 km</p>
                    <p>Apogee  | 1,897,000 km</p>
                    <h1>Orbital Period</h1>
                    <p>17 Days</p>
                </div>
            </div>`;
            break;
        case 7: // Saturn (Planet 6 in UI numbering)
            moonsInfoHTML = `
            <!-- Planet 6 (Saturn) Moons Info -->
            <div id="info-planet6-moons">
                <div class="info moon-1">
                    <h1>Size</h1>
                    <p>Mimas</p>
                </div>
                <div class="info moon-2">
                    <h1>Size</h1>
                    <p>Enceladus</p>
                </div>
                <div class="info moon-3">
                    <h1>Size</h1>
                    <p>Tethys</p>
                </div>
                <div class="info moon-4">
                    <h1>Size</h1>
                    <p>Dione</p>
                </div>
                <div class="info moon-5">
                    <h1>Size</h1>
                    <p>Rhea</p>
                </div>
                <div class="info moon-6">
                    <h1>Size</h1>
                    <p>Titan</p>
                </div>
                <div class="info moon-7">
                    <h1>Size</h1>
                    <p>Iapetus</p>
                </div>
            </div>`;
            break;
        case 8: // Uranus (Planet 7 in UI numbering)
            moonsInfoHTML = `
            <!-- Planet 7 (Uranus) Moons Info -->
            <div id="info-planet7-moons">
                <div class="info moon-1">
                    <h1>Size</h1>
                    <p>Miranda</p>
                </div>
                <div class="info moon-2">
                    <h1>Size</h1>
                    <p>Ariel</p>
                </div>
                <div class="info moon-3">
                    <h1>Size</h1>
                    <p>Umbriel</p>
                </div>
                <div class="info moon-4">
                    <h1>Size</h1>
                    <p>Titania</p>
                </div>
                <div class="info moon-5">
                    <h1>Size</h1>
                    <p>Oberon</p>
                </div>
            </div>`;
            break;
        case 9: // Neptune (Planet 8 in UI numbering)
            moonsInfoHTML = `
            <!-- Planet 8 (Neptune) Moons Info -->
            <div id="info-planet8-moons">
                <div class="info moon-1">
                    <h1>Size</h1>
                    <p>Triton</p>
                </div>
            </div>`;
            break;
        default:
            moonsInfoHTML = '';
    }
    
    // Set the moons info HTML
    document.querySelector('.info-hold_moons').innerHTML = moonsInfoHTML;
    
    // Also update the moon names based on the planet
    let moonNamesHTML = '';
    
    switch(planetId) {
        case 3: // Earth
            moonNamesHTML = `
            <div id="names-planet-3">
                <div class="name m-one"><p>International Space Station</p></div>
                <div class="name m-two"><p>Humans Orbiting Stuff</p></div>
                <div class="name m-three"><p>The Moon!</p></div>
            </div>`;
            break;
        case 4: // Mars
            moonNamesHTML = `
            <div id="names-planet-4">
                <div class="name m-one"><p>Phobos</p></div>
                <div class="name m-two"><p>Deimos</p></div>
            </div>`;
            break;
        case 6: // Jupiter (Planet 5 in UI numbering)
            moonNamesHTML = `
            <div id="names-planet-5">
                <div class="name m-one"><p>Io</p></div>
                <div class="name m-two"><p>Europa</p></div>
                <div class="name m-three"><p>Ganymede</p></div>
                <div class="name m-four"><p>Callisto</p></div>
            </div>`;
            break;
        case 7: // Saturn (Planet 6 in UI numbering)
            moonNamesHTML = `
            <div id="names-planet-6">
                <div class="name m-one"><p>Mimas</p></div>
                <div class="name m-two"><p>Enceladus</p></div>
                <div class="name m-three"><p>Tethys</p></div>
                <div class="name m-four"><p>Dione</p></div>
                <div class="name m-five"><p>Rhea</p></div>
                <div class="name m-six"><p>Titan</p></div>
                <div class="name m-seven"><p>Iapetus</p></div>
            </div>`;
            break;
        case 8: // Uranus (Planet 7 in UI numbering)
            moonNamesHTML = `
            <div id="names-planet-7">
                <div class="name m-one"><p>Miranda</p></div>
                <div class="name m-two"><p>Ariel</p></div>
                <div class="name m-three"><p>Umbriel</p></div>
                <div class="name m-four"><p>Titania</p></div>
                <div class="name m-five"><p>Oberon</p></div>
            </div>`;
            break;
        case 9: // Neptune (Planet 8 in UI numbering)
            moonNamesHTML = `
            <div id="names-planet-8">
                <div class="name m-one"><p>Triton</p></div>
            </div>`;
            break;
        default:
            moonNamesHTML = '';
    }
    
    // Set the moon names HTML
    document.querySelector('.name-hold-moons').innerHTML = moonNamesHTML;
}
