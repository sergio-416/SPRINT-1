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
