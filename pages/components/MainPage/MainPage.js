import React from 'react';
import { Heading, Text, HStack, VStack, Box, Center, Image, Span } from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar';
import BottomBtn from '../Buttons/BottomBtn';

function MainPage() {
	return (
		<Box h="100vh">
			<NavBar className="NavBar" />

			<VStack h="100vh" align="flex-start" pt={12} ml={150}>
				<Box bg="tomato" w="50%" p={4} color="white" borderRadius="5">
					<Heading as="h1" size="4xl">
						<Center>Leanne Smith</Center>
					</Heading>
				</Box>
				<Center>
					<Heading color="#003E1F" fontSize="3xl" letterSpacing="widest" pt={5}>
						F U L L - S T A C K - D E V E L O P E R
					</Heading>
				</Center>

				<Box>
					<Box
						color="#003E1F"
						fontSize="3xl"
						letterSpacing="widest"
						borderBottom=" 5px solid tomato"
						p={1}
						borderRadius="5"
					>
						<Text fontSize="lg" color="#003E1F">
							Creative, Innovative, Problem Solver, Team Player
						</Text>
					</Box>
				</Box>

				<Box pt={20}>
					<Box bg="white" w="100%" p={4} mt={4} borderRadius="10">
						<HStack justify="space-evenly">
							<Image
								src="/Images/Mainpage/HTM.png"
								boxSize="100px"
								objectFit="fill"
								_hover={{
									transform: 'translate(0, -15px)'
								}}
							/>

							<Image
								src="/Images/Mainpage/CSS2.png"
								boxSize="100px"
								objectFit="fill"
								_hover={{
									transform: 'translate(0, -15px)'
								}}
							/>
							<Image
								src="/Images/Mainpage/js2.png"
								boxSize="100px"
								objectFit="fill"
								_hover={{
									transform: 'translate(0, -15px)'
								}}
							/>
							<Image
								src="/Images/Mainpage/react.png"
								boxSize="100px"
								objectFit="fill"
								_hover={{
									transform: 'translate(0, -15px)'
								}}
							/>
							<Image
								src="/Images/Mainpage/node1.png"
								boxSize="100px"
								objectFit="fill"
								_hover={{
									transform: 'translate(0, -15px)'
								}}
							/>
							<Image
								src="/Images/Mainpage/postgres1.png"
								boxSize="100px"
								objectFit="fill"
								_hover={{
									transform: 'translate(0, -15px)'
								}}
							/>
							<Image
								src="/Images/Mainpage/chakra.png"
								boxSize="100px"
								objectFit="fill"
								_hover={{
									transform: 'translate(0, -15px)'
								}}
							/>
							<Image
								src="/Images/Mainpage/figma1.png"
								boxSize="100px"
								objectFit="fill"
								_hover={{
									transform: 'translate(0, -15px)'
								}}
							/>
						</HStack>
					</Box>
				</Box>

				<BottomBtn text="Find Out More" />
			</VStack>
		</Box>
	);
}

export default MainPage;

{
	/* <GridItem colStart={2} colEnd={5} rwoStart={2} rowEnd={3} border="1px solid black;">
				<Center>Leanne Smith</Center>
			</GridItem>
			<GridItem colStart={2} colEnd={5} rwoStart={3} rowEnd={4} border="1px solid black;">
				<Center>Tag Line Here</Center>
			</GridItem>
			<GridItem colStart={2} colEnd={4} rwoStart={2} rowEnd={5} border="1px solid black;">
				<HStack justify="space-between">
					<p>ONE</p>
					<p>ONE</p>
					<p>ONE</p>
					<p>ONE</p>
					<p>ONE</p>
				</HStack>
			</GridItem>
		</Grid> */
}
