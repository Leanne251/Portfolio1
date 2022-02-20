import React from 'react';
import Typewriter from 'typewriter-effect';

function AboutTyping() {
	return (
		<div
			style={{
				padding: '50px 10px',
				fontFamily: 'Anton',
				fontWeight: '800',
				fontSize: '40px',
				letterSpacing: '10px',
				color: '#003E1F'
			}}
		>
			<Typewriter
				onInit={(typewriter) => {
					typewriter.typeString(`Welcome! \n`).pauseFor(1000).typeString('Please get to know me... ').start();
				}}
			/>
		</div>
	);
}

export default AboutTyping;
