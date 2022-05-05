import { useEffect, useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import Likes from '../Likes/Likes';
import React from 'react';

function FetchedComments({ id }) {
	const [ fetchedComments, setFetchedComments ] = useState();
	const [ heartLikes, setheartLikes ] = useState([]);

	//likes should be an array of the values of likes

	// map over fetchedComments and push the values of likes up to the array, if likes=null, set the value to 0.

	useEffect(() => {
		async function fetchTheComments() {
			try {
				const response = await fetch(`http://localhost:5000/comments/${id}`, {
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
	}, []);

	useEffect(
		() => {
			if (fetchedComments) {
				setheartLikes(
					fetchedComments.map((comment) => ({
						commentID: comment.id,
						likes: comment.likes
					}))
				);
			}
		},
		[ fetchedComments ]
	);

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
							<Likes id={fetched.id} setheartLikes={setheartLikes} heartLikes={heartLikes} />
						</Box>
					);
				})}
		</Box>
	);
}

export default FetchedComments;

//fetch the comments for this blog post and map over them to show a list of comments.
//use useEffect so it just calls once on page load
