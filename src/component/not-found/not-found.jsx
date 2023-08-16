import { Image } from '@chakra-ui/react';
import React from 'react';
import { Link, useRoutes } from 'react-router-dom';

export default function NotFound() {
	return (
		<Link to='/'>
			<Image
				w={'full'}
				h={'100vh'}
				objectFit={'cover'}
				src='https://assets.materialup.com/uploads/dfb5bc3c-89b3-46c9-a97d-f0102a5c2e19/preview.gif'
				alt='404 not found'
			/>
		</Link>
	);
}
