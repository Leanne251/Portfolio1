import { Button, HStack, Center } from '@chakra-ui/react';

import React from 'react';

function BottomBtn({ text }) {
	return (
		<Button p={6} width="200px" colorScheme="green" size="md" mb={2} _focus="none">
			{text}
		</Button>
	);
}

export default BottomBtn;
