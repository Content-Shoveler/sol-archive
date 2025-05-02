# Solar System Interactive Visualization

A converted version of the original PHP-based Solar System visualization, now running as a static HTML/JS application with Node.js build tools.

## About

This project is a visually appealing and accurate recreation of our solar system, built as a purely educational, fully responsive and ad-free resource loaded with facts about our local planetary system.

Originally built with PHP, this version has been refactored to use modern frontend development tools while preserving the original functionality and design.

## Technologies

- HTML5
- SCSS (converted from CSS)
- JavaScript with jQuery
- Webpack for bundling
- Node.js and Yarn for development

## Setup

### Prerequisites

- Node.js
- Yarn package manager

### Installation

Clone the repository, then run:

```bash
yarn install
```

### Development

To run the development server:

```bash
yarn start
```

This will start a development server at http://localhost:3000 with hot reloading enabled.

### Building for Production

To build the project for production:

```bash
yarn build
```

This will create optimized static files in the `dist` directory.

## Structure

- `src/` - Source files
  - `index.html` - Main HTML file (converted from PHP)
  - `scss/` - SCSS stylesheets
  - `js/` - JavaScript files
    - `index.js` - Entry point
    - `solar-data.js` - Data that was previously in PHP files
    - Other JS files and libraries
- `dist/` - Build output (not checked into Git)

## Credits

Originally created by Rowan Findlay at [oweb.nz](https://oweb.nz/).
