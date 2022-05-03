import ReactMarkdown from 'react-markdown';
import { Box } from '@chakra-ui/react';
import React from 'react';

function MarkDownWrapper({ content }) {
	console.log('content', content);

	let markdown = { content };
	return <Box>{content}</Box>;
}

export default MarkDownWrapper;
