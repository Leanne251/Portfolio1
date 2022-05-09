import Card from './components/SqaureCard/Card';
import { myWork } from '../data/project';
import { Button, Heading, Box, Center, VStack, SimpleGrid } from '@chakra-ui/react';

import GitHubCalendar from 'react-github-calendar';

function Projects() {
	return (
		<Box>
			<Center>
				<Heading fontSize="6xl" p={6} color="#003E1F" borderBottom=" 15px solid tomato">
					Project Examples
				</Heading>
			</Center>

			<Center>
				<VStack>
					<SimpleGrid columns={[ 1, 2, 3 ]} spacing="40px" p={8}>
						{myWork.map((element) => {
							return (
								<Card
									key={element.id}
									header={element.header}
									title={element.title}
									link={element.link}
									info={element.info}
								/>
							);
						})}
					</SimpleGrid>

					<a href="https://github.com/Leanne251" target="_blank">
						<div
							style={{
								backgroundColor: '#f6f6f8',
								border: '8px solid #003E1F',
								padding: '1em',
								marginTop: '1em',
								marginBottom: '1em'
							}}
						>
							<p style={{ fontFamily: 'Raleway', fontWeight: 800, color: 'black', padding: '10px' }}>
								My Github Contributions
							</p>
							<GitHubCalendar username="Leanne251" />
						</div>
					</a>
				</VStack>
			</Center>
		</Box>
	);
}

export default Projects;
