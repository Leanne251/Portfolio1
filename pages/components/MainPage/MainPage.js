import React from 'react';
import { Heading, Text, Stack, VStack, Box, Center, Image, Flex, Spacer, Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link';

import BottomBtn from '../Buttons/BottomBtn';

function MainPage() {
	return (
		<Grid templateColumns="0.5fr 2fr 3fr" templateRows="1fr 2fr 2fr 1fr 2fr" p={15} h="100vh">
			<GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
				<Heading as="h1" size="4xl" bg="#ff8a5b" p={5} color="white" borderRadius="5">
					<Center>Leanne Smith</Center>
				</Heading>

				<Heading color="#003E1F" fontSize="3xl" letterSpacing={12} pt={5}>
					FULL STACK DEVELOPER
				</Heading>

				<Box
					color="#003E1F"
					fontSize="3xl"
					letterSpacing="widest"
					borderBottom=" 10px solid #ff8a5b"
					p={1}
					borderRadius="5"
				>
					<Text fontSize="lg" color="#003E1F">
						Creative, Innovative, Problem Solver, Team Player
					</Text>
				</Box>
			</GridItem>

			<GridItem colStart={2} colEnd={3} rowStart={4} rowEnd={5}>
				<Stack
					direction={[ 'column', 'row' ]}
					justify="center"
					align="center"
					bg="
#f6f6f8"
					p={5}
					borderRadius="10"
				>
					<Image
						src="/Images/Mainpage/HTM.png"
						boxSize={[ '75px', '100px' ]}
						objectFit="fill"
						_hover={{
							transform: 'translate(0, -15px)'
						}}
					/>

					<Image
						src="/Images/Mainpage/CSS2.png"
						boxSize={[ '75px', '100px' ]}
						objectFit="fill"
						_hover={{
							transform: 'translate(0, -15px)'
						}}
					/>
					<Image
						src="/Images/Mainpage/js2.png"
						boxSize={[ '75px', '100px' ]}
						objectFit="fill"
						_hover={{
							transform: 'translate(0, -15px)'
						}}
					/>
					<Image
						src="/Images/Mainpage/react1.png"
						boxSize={[ '75px', '100px' ]}
						objectFit="fill"
						_hover={{
							transform: 'translate(0, -15px)'
						}}
					/>
				</Stack>
				<Stack
					direction={[ 'column', 'row' ]}
					justify="center"
					align="center"
					bg="
#f6f6f8"
					p={5}
					borderRadius="10"
				>
					<Image
						src="/Images/Mainpage/node1.png"
						boxSize={[ '75px', '100px' ]}
						objectFit="fill"
						_hover={{
							transform: 'translate(0, -15px)'
						}}
					/>
					<Image
						src="/Images/Mainpage/postgres1.png"
						boxSize={[ '75px', '100px' ]}
						objectFit="fill"
						_hover={{
							transform: 'translate(0, -15px)'
						}}
					/>
					<Image
						src="/Images/Mainpage/chakra1.png"
						boxSize={[ '75px', '100px' ]}
						objectFit="fill"
						_hover={{
							transform: 'translate(0, -15px)'
						}}
					/>
					<Image
						src="/Images/Mainpage/figma1.png"
						boxSize={[ '75px', '100px' ]}
						objectFit="fill"
						_hover={{
							transform: 'translate(0, -15px)'
						}}
					/>
				</Stack>
				<Link href="/about">
					<a>
						<Center pt={4}>
							<BottomBtn text="About Me" />
						</Center>
					</a>
				</Link>
			</GridItem>
		</Grid>
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
/* <Flex h="90vh" wrap="wrap" direction="column" w={[ 300, 400, 500 ]}>
			<VStack align="flex-start" pt={20} ml={150}>
		 */
