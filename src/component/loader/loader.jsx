import { Heading, Image } from '@chakra-ui/react';
import React from 'react';

export default function Loader() {
	return (
		<Image
			w={'full'}
			h={'100vh'}
			src='https://i.pinimg.com/originals/e0/f5/a5/e0f5a5f8c2e378df4fddd75e26e9a5a3.gif'
			alt='Loading...'
		/>
	);
}
