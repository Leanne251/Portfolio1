import { Box, Image, VStack, Square, Text, Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
function Card({ image, text, link }) {
	return (
		<Square
			boxSize="xs"
			bg="lightGreen"
			border=" 5px solid darkGreen"
			radii="2"
			_hover={{
				background: 'orange.300'
			}}
		>
			<a href={link} target="_blank" />

			<Heading isWrap fontSize="6xl" color="white" p={4}>
				{text}
			</Heading>
		</Square>
		// <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
	);
}

export default Card;

//If I have three designs with picture and text.
// Import Data const myWork = [{ image: "This is an Image", info: "This is the Info"}, { image: "This is an Image", info: "This is the Info"}]

// Array.map(element){
// 	return (
// 		<Card image={element.image} text={element.text} link={element.link}
// 	)
// }
