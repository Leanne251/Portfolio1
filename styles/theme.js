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
			h1: {
				fontSize: '6xl',
				fontWeight: 'bold'
			},
			h2: {
				fontSize: '5xl',
				fontWeight: 'bold'
			},
			h3: {
				fontSize: '4xl'
			},
			h4: {
				fontSize: '3xl'
			},
			h5: {
				fontSize: '2xl'
			},
			h6: {
				fontSize: '1xl'
			}
		}
	},
	_focus: 'none'
});

export default theme;
