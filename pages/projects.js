import React from 'react';
import Card from './components/SqaureCard/Card';

import { Heading, Box, Center, Stack } from '@chakra-ui/react';
import BottomBtn from './components/Buttons/BottomBtn';

function Projects() {
	const myWork = [
		{
			id: 1,
			text: 'Vanilla JavaScript',
			link: 'http://www.google.com'
		},
		{
			id: 2,
			text: 'Recipes With React',
			link: 'my link'
		},
		{
			id: 3,
			text: 'Full Stack App',
			link: 'my link'
		}
	];
	return (
		<Box>
			<Center>
				<Heading fontSize="6xl" p={8}>
					Project Examples
				</Heading>
			</Center>

			<Center>
				<Stack direction={[ 'column', 'row' ]} justify="space-evenly">
					{myWork.map((element) => {
						return <Card key={element.key} image={element.image} text={element.text} link={element.link} />;
					})}
				</Stack>
			</Center>

			<BottomBtn text="Contact" />
		</Box>
	);
}

export default Projects;
