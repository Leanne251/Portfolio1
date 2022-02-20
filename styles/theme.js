import { extendTheme, theme as base } from '@chakra-ui/react';

// let random = Math.floor(Math.random() * 16777215).toString(16);

const theme = extendTheme({
	colors: {
		brand: {
			coral: '#ff8a5b',
			pink: '#d90368'
		},
		other: {
			white: '#fff',
			transparent: 'transparent',
			pink: '#d90368',
			yellow: '#feeb72',
			darkGreen: '#003e1f',
			lightGreen: '#049f71'
			// random: `#${random}`
		}
	},
	fonts: {
		body: 'Raleway, sans-serif',
		heading: 'Anton'
	},
	styles: {
		global: {
			body: {
				bg: 'gray.50',
				color: 'gray.900'
			},
			h2: {
				fontSize: '2xl',
				fontWeight: 'bold'
			},
			h3: {
				fontSize: 'lg'
			},
			h4: {
				fontSize: 'md'
			}
		}
	},
	_focus: 'none'
});

export default theme;
