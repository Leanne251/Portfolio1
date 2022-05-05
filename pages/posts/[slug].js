import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { Box, Image, Center } from '@chakra-ui/react';
// The page for each post
export default function Post({ frontmatter, content }) {
	const { title, author, category, date, bannerImage, tags } = frontmatter;

	console.log('content', content);

	return (
		<Box height="100vh" overflow="auto">
			<Box
				hight="100vh"
				bg="white"
				m="10rem"
				p="5rem"
				dangerouslySetInnerHTML={{ __html: md().render(content) }}
			/>
		</Box>
	);
}

// Generating the paths for each post
export async function getStaticPaths() {
	// Get list of all files from our posts directory
	const files = fs.readdirSync('posts');
	// Generate a path for each one
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace('.md', '')
		}
	}));
	// return list of paths
	return {
		paths,
		fallback: false
	};
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
	const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
	const { data: frontmatter, content } = matter(fileName);
	return {
		props: {
			frontmatter,
			content
		}
	};
}

{
	/* <Center>
				<Image src={bannerImage} border="5px solid black" style={{ width: '85vW', height: 'auto' }} />
			</Center>

			<h5>
				{author} || {date}
			</h5>
			<h6>
				{category} || {tags.join(', ')}
			</h6> */
}
