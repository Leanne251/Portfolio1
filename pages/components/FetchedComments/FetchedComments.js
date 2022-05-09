import { useEffect, useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import Likes from '../Likes/Likes';
import React from 'react';

function FetchedComments({ id, blogpost }) {
	const [ fetchedComments, setFetchedComments ] = useState();
	console.log('fetch', fetchedComments);

	//likes should be an array of the values of likes

	// map over fetchedComments and push the values of likes up to the array, if likes=null, set the value to 0.

	useEffect(
		() => {
			async function fetchTheComments() {
				try {
					const response = await fetch(`https://blogmay2022.herokuapp.com/comments/${id}`, {
						headers: {
							'Access-Control-Allow-Origin': '*'
						}
					});
					console.log('response', response);
					const data = await response.json();
					setFetchedComments(data.payload);
				} catch (e) {
					console.log('err', e);
				}
			}
			fetchTheComments();
		},
		[ blogpost ]
	);

	function increaseByOne(id) {
		console.log('id', id);
		const index = fetchedComments.findIndex((comment) => comment.id === id);
		const newComment = (fetchedComments[index].likes = fetchedComments[index].likes + 1);
		const update = { ...fetchedComments[index], likes: newComment };
		setFetchedComments([ ...fetchedComments.slice(0, index), update, ...fetchedComments.slice(index + 1) ]);
		sendLikes(id);
	}

	// need to do a patch request to update likes in the database

	// using the comment ID I need to update the number of likes in the database
	//

	async function sendLikes(id) {
		console.log('id', id);
		try {
			const response = await fetch(`http://localhost:5000/comments/${id}`, {
				method: 'PATCH',
				body: JSON.stringify({}),
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				}
			});
			console.log('response', response);
			const data = await response.json();
			console.log('data', data);
		} catch (e) {
			console.log('err', e);
		}
	}

	// we have the id of the comment,
	// we just need to find that comment that matches that id and add one to the likes
	// then spliced fetched comments to update it

	return (
		<Box>
			<h5 m={4}>Previous Comments</h5>
			{fetchedComments &&
				fetchedComments.map((fetched) => {
					let date = new Date(fetched.creation_date).toDateString();

					return (
						<Box border="1px solid 
                        #edf2f7" borderRadius="0.375rem" p={5} m={5}>
							<p>
								<strong>Author: </strong>
								{fetched.user_name}
							</p>
							<p>
								<strong>Date: </strong>
								{date}
							</p>
							<p>
								<strong>Comments: </strong>
								{fetched.comment}
							</p>
							<Likes id={fetched.id} likes={fetched.likes} increaseByOne={increaseByOne} />
						</Box>
					);
				})}
		</Box>
	);
}

export default FetchedComments;

//fetch the comments for this blog post and map over them to show a list of comments.
//use useEffect so it just calls once on page load
