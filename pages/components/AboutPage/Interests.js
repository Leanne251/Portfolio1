import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

function Interests() {
	return (
		<div>
			<Heading bg="#049F71" color="#fff" size="md" p={2} letterSpacing="widest" borderBottom="2px dotter #003E1F">
				Interests
			</Heading>
			<Box p={5}>
				<Text>
					I enjoy learning about all different areas of tech that I have experienced so far, however, what I
					enjoy the most is working with the front end and developing with Javascript and React. I like the
					problem solving aspects and thinking about the relationships between components and deciding which
					methods are required to generate the correct information needed to build an application. In my
					latest project, I have also enjoyed building the back end and working on building the database using
					postgreSQL and thinking about the routes and functions required to link up with the front end. I
					also enjoy design but I feel I need more practise and guidance on design principles and how to use
					the design libraries.
				</Text>
			</Box>
		</div>
	);
}

export default Interests;
