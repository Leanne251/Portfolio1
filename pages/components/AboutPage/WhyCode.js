import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

function WhyCode() {
	return (
		<div>
			<Heading bg="#D90368" color="#fff" size="md" p={2} letterSpacing="widest" borderBottom="2px dotter #003E1F">
				Why Code?
			</Heading>
			<Box p={5}>
				<Text>
					I just love learning things! I like to have something I can devote my time to and feel like I am
					achieving something. In my old career in travel I was always learning about new destinations and
					creating exciting itineraries for my clients. I even started designing my own website! With more
					people booking online it is becoming increasingly difficult to find clients to provide a
					personalised travel service for. With the additon of the pandemic it has just felt like the right
					time to delve into a new career path. I love that there are so many different sides to this field
					from design and user experience to problem solving and analytical thnking. I really feel like it
					opens so many doors to different oppertunities and it is something that is forever growing meaning
					it will never become obsolete in the future.
				</Text>
			</Box>
		</div>
	);
}

export default WhyCode;
