import React from 'react';
import Link from 'next/link';
import { Center, HStack, Flex, Spacer, Box } from '@chakra-ui/react';

function NavBar() {
	return (
		<Flex justify="flex-end" bg="white">
			<HStack spacing="50px" h="50px" fontWeight="bold" mr={30}>
				<Center
					_hover={{
						borderBottom: '4px #ff8a5b solid',
						color: 'darkGreen'
					}}
				>
					<Link href="/">
						<a>Home</a>
					</Link>
				</Center>

				<Center
					_hover={{
						borderBottom: '4px #ff8a5b solid',
						color: 'darkGreen'
					}}
				>
					<Link href="/about">
						<a>About</a>
					</Link>
				</Center>
				<Center
					_hover={{
						borderBottom: '4px #ff8a5b solid',
						color: 'darkGreen'
					}}
				>
					<Link href="/projects">
						<a>Projects</a>
					</Link>
				</Center>
			</HStack>
		</Flex>
	);
}

export default NavBar;
