import { useState } from 'react';
import { Icon, HStack } from '@chakra-ui/react';
import { FcLike } from 'react-icons/fc';

function Likes({ id, likes, increaseByOne }) {
	console.log('likes', likes);

	return (
		<HStack>
			<Icon as={FcLike} onClick={() => increaseByOne(id, likes)} />
			<p>{likes}</p>
		</HStack>
	);
}

export default Likes;

// increase the likes of that paticular comment
// also, send that to the datebase and on load fetch the stored likes.
