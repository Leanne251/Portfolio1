import React from 'react';
import {
	Box,
	Grid,
	GridItem,
	Heading,
	Spacer,
	VStack,
	Text,
	SlideFade,
	Button,
	useDisclosure,
	Center,
	useMediaQuery
} from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import MyBackground from './components/AboutPage/MyBackground';
import Interests from './components/AboutPage/Interests';
import WhyCode from './components/AboutPage/WhyCode';
import AboutTyping from './components/AboutPage/AboutTyping';
import NavBarSmall from './components/NavBarSmall';

function About() {
	const [ isMobile ] = useMediaQuery('(max-width: 768px)');

	return !isMobile ? (
		<Box h="100vh">
			<NavBar />
			<NavBarSmall />

			<Grid h="85vh" templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr" gap={4}>
				<GridItem colSpan={5} rowSpan={1} bg="#FF8A5B">
					<AboutTyping />
				</GridItem>
				<GridItem colSpan={3} rowSpan={1} bg="white">
					<MyBackground />
				</GridItem>
				<GridItem colSpan={3} rowSpan={1} bg="white">
					<Interests />
				</GridItem>
				<GridItem colSpan={3} rowSpan={1} bg="white">
					<WhyCode />
				</GridItem>
			</Grid>
		</Box>
	) : (
		<Box h="100vh">
			<Center>
				<NavBarSmall />
			</Center>
			<Grid h="85vh" templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
				<GridItem colSpan={5} rowSpan={1} bg="#FF8A5B">
					<AboutTyping />
				</GridItem>
				<GridItem colSpan={5} rowSpan={3} bg="white">
					<MyBackground />
				</GridItem>
				<GridItem colSpan={5} rowSpan={3} bg="white">
					<Interests />
				</GridItem>
				<GridItem colSpan={5} rowSpan={4} bg="white">
					<WhyCode />
				</GridItem>
			</Grid>
		</Box>
	);
}

export default About;
