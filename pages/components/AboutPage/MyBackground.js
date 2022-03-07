import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';
import css from './about.module.css';

function MyBackground() {
	return (
		<div>
			<Heading bg="#D90368" color="#fff" size="md" p={2} letterSpacing="widest" borderBottom="2px dotter #003E1F">
				My Background
			</Heading>
			<Box m={5}>
				<Text>
					At 18 I went to live and work in Australia for a year. I followed this with 3 years of study in
					Medical Biochemistry at Manchester University. I decided this wasn't the right field for me and fell
					into a career in travel which I have more interest in. Of course, this was hugely affected when the
					pandemic hit but the silver lining is having the chance to get in to tech. I previously created a
					website using WordPress for my travel buisness which gave me a taste of design and development. I
					feel extremely fortunate to have been given the oppertunity to study with
					<a href="https://www.schoolofcode.co.uk/" className={css.link}>
						 School of Code
					</a>
					 and I look forward to where my career in tech will take me.
				</Text>
			</Box>
		</div>
	);
}

export default MyBackground;
