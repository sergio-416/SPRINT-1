# Bookmark Landing Page

A modern, fully responsive landing page for a bookmark management browser extension. Built with semantic HTML5 and styled with Tailwind CSS, featuring comprehensive accessibility support and smooth user interactions.

## Overview

This project is a professional landing page designed to showcase a browser extension for bookmark management. The page includes multiple sections highlighting features, download options, FAQs, and a newsletter signup form with real-time validation.

### Key Features

- **Fully Responsive Design** - Seamless experience across mobile, tablet, and desktop devices
- **Semantic HTML5** - Properly structured markup for better SEO and accessibility
- **Tailwind CSS** - Utility-first styling with custom components and theme configuration
- **Accessible** - WCAG compliant with ARIA attributes, keyboard navigation, and screen reader support
- **Interactive Components**:
  - Mobile navigation menu with smooth transitions
  - Tab system for feature showcase
  - Collapsible FAQ section
  - Email validation with visual feedback
  - Hover and focus states for all interactive elements

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing
- **NPM** - Package management

## Project Structure

```
bookmark-landing-page/
│
├── images/                    # Image assets
│   ├── favicon-32x32.png
│   ├── logo-bookmark.svg
│   ├── icon-*.svg
│   └── illustration-*.svg
│
├── dist/                      # Compiled CSS output
│   └── output.css
│
├── src/                       # Source files
│   └── tailwind.css          # Tailwind source with custom styles
│
├── index.html                 # Main HTML file
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Project dependencies
├── .gitignore                 # Git ignore rules
└── README.md                  # Project documentation
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- NPM (v6 or higher)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/sergio-d16/bookmark-landing-page.git
cd bookmark-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Build the CSS:

```bash
npm run build
```

4. Open `index.html` in your browser to view the project.

## Development

### Available Scripts

- **Development mode** (watches for changes):

```bash
npm run dev
```

- **Production build** (minified output):

```bash
npm run build
```

### Customization

#### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'soft-blue': 'hsl(231, 69%, 60%)',
  'soft-red': 'hsl(0, 94%, 66%)',
  'grayish-blue': 'hsl(229, 8%, 60%)',
  'very-dark-blue': 'hsl(229, 31%, 21%)',
  // Add your custom colors here
}
```

#### Spacing

Modify spacing values in `tailwind.config.js`:

```javascript
spacing: {
  'xs': '10px',
  'sm': '20px',
  'md': '30px',
  // Add custom spacing
}
```

#### Custom Components

Add or modify custom components in `src/tailwind.css` within the `@layer components` section.

## Features Detail

### Navigation

- **Mobile**: Hamburger menu with full-screen overlay
- **Desktop**: Horizontal navigation bar
- Keyboard accessible with focus indicators
- ARIA attributes for screen readers

### Feature Tabs

- Three tabbed sections showcasing different features
- Smooth transitions between tabs
- Accessible with proper ARIA roles and attributes
- Visual indicator for active tab

### Browser Cards

- Downloadable extension cards for Chrome, Firefox, and Opera
- Staggered layout on desktop for visual interest
- Consistent styling with shadow effects

### FAQ Section

- Collapsible accordion using native HTML `<details>` elements
- Animated arrow indicators
- Accessible without JavaScript

### Newsletter Form

- Real-time email validation
- Error state with icon and message
- ARIA attributes for screen reader feedback
- Responsive layout (stacked on mobile, inline on desktop)

## Accessibility Features

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels and attributes throughout
- Keyboard navigation support
- Focus indicators on all interactive elements
- Descriptive alt text for images
- Screen reader only text for context
- Color contrast meeting WCAG AA standards

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance

- Minified CSS in production build
- Optimized images (SVG format)
- No external dependencies (all assets local)
- Efficient Tailwind purging of unused styles

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

**Sergio Morey**

- GitHub: [@sergio-d16](https://github.com/sergio-d16)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from Frontend Mentor
- Icons and illustrations included in the project
- Tailwind CSS team for the excellent framework

---

**Note**: This project was originally built with SASS and later migrated to Tailwind CSS for better maintainability and development speed.
