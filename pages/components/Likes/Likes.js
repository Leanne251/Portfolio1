import { useState } from 'react';
import { Icon, HStack } from '@chakra-ui/react';
import { FcLike } from 'react-icons/fc';

function Likes({ id, setheartLikes, heartLikes }) {
	console.log(heartLikes.likes);

	let like;

	// if (heartLikes.likes === null) {
	// 	heartLikes.likes = 0;
	// }
	heartLikes.forEach((hl) => {
		if (id === hl.commentID) {
			like = hl.likes;
		}
	});

	return (
		<HStack>
			<Icon as={FcLike} />
			{heartLikes && <p>{like}</p>}
		</HStack>
	);
}

export default Likes;

// increase the likes of that paticular comment
// also, send that to the datebase and on load fetch the stored likes.
