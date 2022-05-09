import fs from 'fs';
import matter from 'gray-matter';
import { Center, VStack, SimpleGrid, Input, Heading, Text, Box } from '@chakra-ui/react';
import BlogPost from '../pages/components/BlogPost/BlogPost';

// The Blog Page Content
export default function Blog({ posts }) {
	return (
		<main>
			<VStack justify="center">
				<Box p={5} m={5} bg="other.white" borderRadius="1rem">
					<h5 as="h4" fontWeight="italic">
						With so much to learn in the world of development it's easy to forget concepts you might learn
						when you start working on something new! Here is a place for reflection, to jot down ideas and
						make notes and give me a place to refer to when I need a memory job. I hope these posts might
						help others and I'd be really interested to find out your thoughts, feelings, hints and tips so
						please don't be afraid to leave a comment!
					</h5>
				</Box>
				{/* <Box alignSelf="flex-start" width="100vw" m={5}>
					<Text>Search Posts</Text>
					<Input type="text" width="30%" />
				</Box> */}

				<SimpleGrid columns={[ 1, 2, 3 ]} spacing="40px" p={8}>
					{posts.map((post) => {
						const { slug, frontmatter } = post;
						//extract frontmatter properties
						const { title, author, category, date, bannerImage, tags } = frontmatter;
						return (
							<BlogPost
								key={title}
								title={title}
								author={author}
								category={category}
								date={date}
								bannerImage={bannerImage}
								tags={tags}
								slug={slug}
								frontmatter={frontmatter}
							/>
						);
					})}
				</SimpleGrid>
			</VStack>
		</main>
	);
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
	// get list of files from the posts folder
	const files = fs.readdirSync('posts');

	// get frontmatter & slug from each post
	const posts = files.map((fileName) => {
		const slug = fileName.replace('.md', '');
		const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
		const { data: frontmatter } = matter(readFile);

		return {
			slug,
			frontmatter
		};
	});

	// Return the pages static props
	return {
		props: {
			posts
		}
	};
}

/* {posts.map((post) => {
				//extract slug and frontmatter
				const { slug, frontmatter } = post;
				//extract frontmatter properties
				const { title, author, category, date, bannerImage, tags } = frontmatter;

				//JSX for individual blog listing
				return (
					<div style={{ border: '1px solid black', margin: '20px' }}>
						<BlogPost
							key={title}
							title={title}
							author={author}
							category={category}
							date={date}
							bannerImage={bannerImage}
							tags={tags}
							slug={slug}
							frontmatter={frontmatter}
						/>
						{/* <article key={title}>
							<Link href={`/posts/${slug}`}>
								<h1>{title}</h1>
							</Link>
							<h3>{author}</h3>
							<h3>{date}</h3>
						</article> */
