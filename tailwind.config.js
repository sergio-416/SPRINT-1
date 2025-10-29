<<<<<<< HEAD
module.exports = {
	content: ['./*.html', './src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'soft-blue': 'hsl(231, 69%, 60%)',
				'soft-red': 'hsl(0, 94%, 66%)',
				'grayish-blue': 'hsl(229, 8%, 60%)',
				'very-dark-blue': 'hsl(229, 31%, 21%)',
				'light-gray': 'hsl(0, 0%, 97%)',
			},
			fontFamily: {
				sans: [
					'Montserrat',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'sans-serif',
				],
			},
			fontSize: {
				base: '16px',
			},
			lineHeight: {
				base: '1.6',
			},
			borderRadius: {
				sm: '5px',
				md: '10px',
				lg: '200px',
			},
			spacing: {
				xs: '10px',
				sm: '20px',
				md: '30px',
				lg: '40px',
				xl: '50px',
				'2xl': '60px',
				'3xl': '80px',
			},
			maxWidth: {
				container: '1110px',
				narrow: '540px',
			},
			transitionDuration: {
				base: '300ms',
			},
			screens: {
				tablet: '768px',
				desktop: '1024px',
			},
		},
	},
	plugins: [],
};
||||||| 7af417f
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			colors: {
				'soft-blue': 'hsl(231, 69%, 60%)',
				'soft-red': 'hsl(0, 94%, 66%)',
				'grayish-blue': 'hsl(229, 8%, 60%)',
				'very-dark-blue': 'hsl(229, 31%, 21%)',
				'light-gray': 'hsl(0, 0%, 97%)',
			},
			fontFamily: {
				primary: [
					'Montserrat',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'sans-serif',
				],
			},
			fontSize: {
				xs: '10px',
				sm: '13px',
				base: '14px',
				md: '16px',
				lg: '18px',
				xl: '28px',
				'2xl': '30px',
				'3xl': '40px',
				'4xl': '48px',
			},
			spacing: {
				xs: '5px',
				sm: '10px',
				md: '12px',
				15: '15px',
				25: '25px',
				32: '32px',
				35: '35px',
				50: '50px',
				60: '60px',
				80: '80px',
				100: '100px',
			},
			borderRadius: {
				sm: '2px',
				base: '5px',
				lg: '200px',
				xl: '300px',
			},
			boxShadow: {
				soft: '0 8px 8px -4px rgba(73, 93, 207, 0.2)',
				gray: '0 8px 8px -4px rgba(145, 148, 162, 0.2)',
			},
			transitionDuration: {
				fast: '300ms',
			},
		},
	},
	plugins: [],
};
>>>>>>> feature/tailwind-dev
