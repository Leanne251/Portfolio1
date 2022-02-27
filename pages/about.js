import React from 'react';
import { Box, Grid, GridItem, Center, useMediaQuery, SimpleGrid } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import MyBackground from './components/AboutPage/MyBackground';
import Interests from './components/AboutPage/Interests';
import WhyCode from './components/AboutPage/WhyCode';
import AboutTyping from './components/AboutPage/AboutTyping';
import NavBarSmall from './components/NavBarSmall';

function About() {
	const [ isMobile ] = useMediaQuery('(max-width: 768px)');

	return (
		<SimpleGrid h="100vh" columns={[ 1, 2 ]} rows={3} gap={4}>
			<GridItem colSpan={[ 1, 2 ]} rowSpan={1} bg="#FF8A5B">
				<AboutTyping />
			</GridItem>
			<GridItem colSpan={2} rowSpan={1} bg="white">
				<MyBackground />
			</GridItem>
			<GridItem colSpan={2} rowSpan={1} bg="white">
				<Interests />
			</GridItem>
			<GridItem colSpan={2} rowSpan={1} bg="white">
				<WhyCode />
			</GridItem>
		</SimpleGrid>
	);
}

export default About;
