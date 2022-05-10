import React from 'react';
import Link from 'next/link';
import { Center, VStack, Image, Heading, Box } from '@chakra-ui/react';

function BlogPost({ title, author, category, date, bannerImage, tags, slug, frontmatter }) {
	return (
		<Box
			boxSize={[ 'xsm', 'sm' ]}
			bg="#FEEB72"
			border="8px solid #049f71"
			radii="2"
			_hover={{
				background: '#d90368'
			}}
			align="center"
		>
			<Center>
				<VStack>
					<Image src={bannerImage} alt={title} mt={3} />

					<Link href={`/posts/${slug}`}>
						<Heading textShadow="0 0 10px black" fontSize="2xl" color="white" p={1} cursor="pointer">
							{title} <br />
						</Heading>
					</Link>
					<p>
						By: {author} || written: {date}
					</p>
					<p>Cateogry: {category}</p>
				</VStack>
			</Center>
		</Box>
	);
}

export default BlogPost;
