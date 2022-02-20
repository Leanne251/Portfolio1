import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

function MyBackground() {
	return (
		<div>
			<Heading bg="#D90368" color="#fff" size="md" p={2} letterSpacing="widest" borderBottom="2px dotter #003E1F">
				My Background
			</Heading>
			<Box m={5}>
				<Text color="#003E1F">
					At 18 I went to live and work in Australia for a year. I followed this with 3 years of study in
					Medical Biochemistry at Manchester University. I decided this wasn't the right field for me and fell
					in a career in travel which I have more interest in. Sadly, this was affected when the pandemic hit
					however it has enabled me to persure a career in tech!{' '}
				</Text>
			</Box>
		</div>
	);
}

export default MyBackground;
