import {
	Square,
	Stack,
	Button,
	Heading,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Center
} from '@chakra-ui/react';

import Link from 'next/link';

function Card({ header, title, link, info }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Square
			boxSize="xs"
			bg="#FEEB72"
			border=" 8px solid #003E1F"
			radii="2"
			_hover={{
				background: '#ff8a5b'
			}}
		>
			<a href={link} target="_blank" />
			<Stack>
				<Heading textShadow="0 0 10px black" isWrap fontSize="6xl" color="white" p={4}>
					{title} <br />
				</Heading>

				<Center>
					{' '}
					<Button colorScheme="green" width="200px" onClick={onOpen}>
						Find Out More
					</Button>
				</Center>

				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{header}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>{info}</ModalBody>

						<ModalFooter>
							<Button colorScheme="green" mr={3} onClick={onClose}>
								Close
							</Button>
							<a href={link} target="_blank">
								<Button variant="ghost">Visit Site</Button>
							</a>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Stack>
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
