import React from 'react';
import Link from 'next/link';

function BlogPost({ title, author, category, date, bannerImage, tags, slug, frontmatter }) {
	return (
		<div style={{ border: '1px solid black' }}>
			<img src={bannerImage} alt={title} style={{ width: '200px', height: '200px' }} />
			<Link href={`/posts/${slug}`}>
				<strong>
					<h1>{title}</h1>
				</strong>
			</Link>
			<p>Author: {author}</p>
			<p>Cateogry: {category}</p>
			<p>date: {date}</p>
			<p>tags: {tags}</p>
		</div>
	);
}

export default BlogPost;
