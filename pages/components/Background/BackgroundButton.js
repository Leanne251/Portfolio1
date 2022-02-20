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
	Center
} from '@chakra-ui/react';

import React from 'react';

function BackgroundButton({ text, title }) {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box>
			<Center>
				<Button bg="#FEEB72" onClick={onToggle} _focus="none">
					{title}
				</Button>
			</Center>
			<SlideFade in={isOpen} offsetY="20px">
				<Box p={4} color="black" m={4} border=" 2px solid #FEEB72" _focus="none" rounded="md" shadow="md">
					{text}
				</Box>
			</SlideFade>
		</Box>
	);
}

export default BackgroundButton;
