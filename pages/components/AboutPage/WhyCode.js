import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

function WhyCode() {
	return (
		<div>
			<Heading bg="#D90368" color="#fff" size="md" p={2} letterSpacing="widest" borderBottom="2px dotter #003E1F">
				Why Code?
			</Heading>
			<Box p={5}>
				<Text color="#003E1F">
					I really enjoy learning about all aspects of tech. There are so many different sides to this career
					path from design and user experience to problem solving and analytical thnking. I really feel like
					it opens so many doors to different oppertunities and it is something that is forever growing
					meaning it will never become obsolete in the future.
				</Text>
			</Box>
		</div>
	);
}

export default WhyCode;
