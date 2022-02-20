import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import theme from '../styles/theme';
import '../styles/index.css';
import '@fontsource/Anton/400.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Box bgImage="/PlantBG.jpg" backgroundPosition="center" maxH="100vh">
				<Component h="100vh" {...pageProps} />
			</Box>
		</ChakraProvider>
	);
}
export default MyApp;
