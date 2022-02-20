import Head from 'next/head';
import MainPage from './components/MainPage/MainPage';
import { Box } from '@chakra-ui/react';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainPage />
		</div>
	);
}
