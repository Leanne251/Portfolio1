import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import BlogPost from '../pages/components/BlogPost/BlogPost';

// The Blog Page Content
export default function Blog({ posts }) {
	return (
		<main>
			<div>
				<ReactMarkdown>### Hello, *world!* </ReactMarkdown>
			</div>
			{posts.map((post) => {
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
						</article> */}
					</div>
				);
			})}
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
