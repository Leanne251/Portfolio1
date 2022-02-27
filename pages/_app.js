import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import theme from '../styles/theme';
import '../styles/index.css';
import '@fontsource/anton/400.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import NavBar from './components/NavBar/NavBar';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />

			<Box bgImage="/PlantBG.jpg" backgroundPosition="center">
				<NavBar className="NavBar" />

				<Component {...pageProps} />
			</Box>
		</ChakraProvider>
	);
}
export default MyApp;
