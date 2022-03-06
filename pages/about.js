import React from 'react';
import { Image, GridItem, Center, useMediaQuery, SimpleGrid } from '@chakra-ui/react';
import MyBackground from './components/AboutPage/MyBackground';
import Interests from './components/AboutPage/Interests';
import WhyCode from './components/AboutPage/WhyCode';
import AboutTyping from './components/AboutPage/AboutTyping';

function About() {
	const [ isMobile ] = useMediaQuery('(max-width: 768px)');

	return (
		<SimpleGrid h="100vh" columns={[ 1, 2, 3 ]} rows={2} gap={4}>
			<GridItem colSpan={[ 1, 2 ]} rowSpan={1} bg="#FF8A5B">
				<AboutTyping />
			</GridItem>
			<GridItem colSpan={[ 1, 1 ]} rowSpan={1} bg="#f6f6f8" border="8px solid #003E1F">
				<Center>
					<Image src="/Images/MeCircle.png" />
				</Center>
			</GridItem>
			<GridItem colSpan={[ 1 ]} rowSpan={1} bg="white">
				<MyBackground />
			</GridItem>
			<GridItem colSpan={[ 1 ]} rowSpan={1} bg="white">
				<Interests />
			</GridItem>
			<GridItem colSpan={[ 1 ]} rowSpan={1} bg="white">
				<WhyCode />
			</GridItem>
		</SimpleGrid>
	);
}

export default About;
