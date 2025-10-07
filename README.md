# Bookmark Manager Landing Page

A modern, fully responsive landing page for a bookmark management browser extension. Built with semantic HTML5, compiled with SASS, and featuring comprehensive accessibility support.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **SASS Architecture**: Organized using the 7-1 pattern with modular partials
- **Accessibility**: WCAG 2.1 compliant with ARIA labels and semantic HTML
- **Interactive Components**: Tab system, accordion FAQ, form validation
- **Mobile Navigation**: Accessible hamburger menu with keyboard support

## Tech Stack

- HTML5 (Semantic)
- SASS/SCSS
- CSS3 (Compiled)
- Vanilla JavaScript (form validation)

## Project Structure

```text
├── css/
│   └── style.css          # Compiled CSS
├── scss/
│   ├── abstracts/         # Variables
│   ├── base/              # Reset, typography
│   ├── components/        # Buttons, forms, cards
│   ├── layout/            # Header, footer, navigation
│   ├── pages/             # Page-specific styles
│   ├── utilities/         # Helper classes
│   └── main.scss          # Main import file
├── images/
└── index.html
```

## Getting Started

### Prerequisites

- Node.js v22.20.0
- SASS 1.93.2

### Installation

1. Clone the repository

```bash
git clone https://github.com/sergio-416/bookmark-manager.git
cd bookmark-manager
```

2. Install dependencies (if using npm)

```bash
npm install
```

### Development

Compile SASS with watch mode:

```bash
sass scss/main.scss css/style.css --watch
```

### Build for Production

Compile compressed CSS:

```bash
sass scss/main.scss css/style.css --style compressed
```

## Accessibility Features

- **ARIA Support**: Complete ARIA labels, roles, and states
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Reader Friendly**: Semantic HTML and visually-hidden text for context
- **Focus States**: Visible focus indicators for all interactive elements
- **Form Validation**: Accessible error messages with `aria-invalid` and `role="alert"`
- **WCAG 2.1 Level AA**: Color contrast and responsive text sizing

## Browser Support

- Chrome (62+)
- Firefox (55+)
- Opera (46+)
- Safari (latest)
- Edge (latest)

## Author

**Sergio Morey**
GitHub: [@sergio-416](https://github.com/sergio-416)

## License

This project is open source and available for educational purposes under the MIT License.
