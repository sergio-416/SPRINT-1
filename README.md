# Bookmark Manager Landing Page

A modern, responsive landing page for a bookmark management browser extension. Built with semantic HTML5 and styled with Tailwind CSS following utility-first principles.

## Overview

This project showcases a complete browser extension landing page featuring:

- Responsive navigation with mobile menu
- Interactive feature tabs
- Browser extension download cards
- FAQ accordion section
- Newsletter subscription form with validation
- Full mobile-first responsive design

## Technology Stack

- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first styling framework
- **JavaScript (ES6+)** - Modular component architecture

## Project Evolution

This project was originally built with vanilla CSS and later migrated to **Tailwind CSS** to achieve maximum utility-first purism. The migration involved:

- Converting all custom CSS classes to Tailwind utilities
- Replacing pseudo-elements with real DOM elements
- Implementing utility-class manipulation via JavaScript
- Minimizing custom CSS to only essential browser hacks and accessibility utilities

The result is a highly maintainable, performant codebase that adheres to modern CSS architecture principles.

## Project Evolution

This project was originally built with vanilla CSS and later migrated to **Tailwind CSS** to achieve maximum utility-first purism. The migration involved:

- Converting all custom CSS classes to Tailwind utilities
- Replacing pseudo-elements with real DOM elements
- Implementing utility-class manipulation via JavaScript
- Minimizing custom CSS to only essential browser hacks and accessibility utilities

The result is a highly maintainable, performant codebase that adheres to modern CSS architecture principles.

### From Pure CSS to JavaScript-Enhanced

The original implementation relied heavily on CSS pseudo-selectors (`:checked`, `:target`) and pseudo-elements to achieve interactivity without JavaScript. While this approach minimized dependencies, it had limitations:

- **Limited state management** - CSS alone couldn't handle complex UI states
- **Accessibility challenges** - Proper ARIA attributes require dynamic updates
- **Maintainability issues** - CSS hacks became increasingly complex

The current implementation uses **modular JavaScript** to:

- Dynamically toggle Tailwind utility classes based on user interaction
- Update ARIA attributes for better screen reader support
- Manage component state explicitly and predictably
- Improve code readability and maintainability

This architectural shift aligns with modern web development best practices while maintaining the project's performance and user experience.

## Installation

```bash
# Install dependencies
npm install

# Build CSS
npm run build:css

# Watch CSS changes during development
npm run watch:css
```

## Project Structure

```
├── index.html           # Main HTML file
├── style.css            # Compiled Tailwind output
├── src/
│   └── input.css        # Tailwind input file
├── js/
│   ├── main.js          # Entry point
│   ├── navigation.js    # Mobile navigation
│   ├── features.js      # Feature tabs
│   ├── faq.js           # FAQ accordion
│   └── newsletter.js    # Form validation
├── images/              # Assets
└── tailwind.config.js   # Tailwind configuration
```

## Features Implementation

### Navigation

- Responsive hamburger menu for mobile
- Smooth transitions and animations
- Logo switching based on menu state

### Feature Tabs

- JavaScript-powered tab switching
- Utility-class state management
- Accessible ARIA attributes

### FAQ Section

- Native HTML5 `<details>` elements
- CSS-only accordion functionality
- Smooth transitions with Tailwind utilities

### Newsletter Form

- Real-time email validation
- Accessible error messaging
- Custom styled form inputs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Design Attribution

Design provided by Frontend Mentor. Implementation and Tailwind migration by Sergio Morey.

## License

ISC
