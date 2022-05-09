import React, { useState } from 'react';
import { Box, Button, FormControl, Input, FormLabel, Textarea } from '@chakra-ui/react';
import FetchedComments from '../FetchedComments/FetchedComments';

function Comments({ id }) {
	const [ blogpost, setBlogpost ] = useState({
		blogID: id,
		date: new Date(),
		userName: '',
		comment: ''
	});

	function getInfo(e) {
		setBlogpost({ ...blogpost, [e.target.name]: e.target.value });
	}

	function submitComment(e) {
		e.preventDefault();
		sendTheComment(blogpost);
	}

	async function sendTheComment() {
		const response = await fetch('http://localhost:5000/comments', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(blogpost)
		});
		console.log(response);
		setBlogpost({
			...blogpost,
			blogID: id,
			date: new Date(),
			userName: '',
			comment: ''
		});
	}

	return (
		<Box bg="white" m="1rem 5rem 5rem 5rem" p="5rem">
			<h5>Leave a comment:</h5>
			<FormControl isRequired>
				<FormLabel htmlFor="first-name">Your Name: </FormLabel>
				<Input type="text" name="userName" onChange={getInfo} value={blogpost.userName} />
				<FormLabel htmlFor="first-name">Comment: </FormLabel>
				<Textarea type="text" name="comment" onChange={getInfo} resize="none" value={blogpost.comment} />
				<Button m={2} onClick={submitComment}>
					Submit
				</Button>
			</FormControl>

			<FetchedComments id={id} blogpost={blogpost} />
		</Box>
	);
}

export default Comments;

//submit the comment, and this should trigger the data being fetched again.
// so rather than just fetching comments on load, data should also be fetched when the comment is submitted
