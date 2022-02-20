import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

function Interests() {
	return (
		<div>
			<Heading bg="#049F71" color="#fff" size="md" p={2} letterSpacing="widest" borderBottom="2px dotter #003E1F">
				Interests
			</Heading>
			<Box p={5}>
				Although I enjoy learning about all different areas of tech what I enoy the most is working with
				Javascript and React. I like the problem solving aspects and thinking about the relationships between
				components and deciding which methods are required to generate the correct information needed to build
				an application. I also enjoy design but I feel I need more practise and guidance on design principles
				and how to use the software.
			</Box>
		</div>
	);
}

export default Interests;
