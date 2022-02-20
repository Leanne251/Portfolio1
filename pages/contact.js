import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import BottomBtn from './components/Buttons/BottomBtn';

function Contact() {
	return (
		<Box h="100vh">
			<NavBar />
			<BottomBtn text="See My Work" />
		</Box>
	);
}

export default Contact;
