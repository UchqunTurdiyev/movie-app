import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function MainCard(props) {
	const { backdrop_path, original_language, title, overview, popularity, poster_path, release_date, vote_average, vote_count } =
		props;

	return (
		<Card maxW='sm'>
			<CardBody>
				<Image src={''} alt='Green double couch with wooden legs' borderRadius='lg' />
				<Stack mt='6' spacing='3'>
					<Heading size='md'>{title}</Heading>
					<Text></Text>
					<Text color='blue.600' fontSize='2xl'>
						{/* {popularity} */}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing='2'>
					<Button variant='solid' colorScheme='blue'>
						Buy now
					</Button>
					<Button variant='ghost' colorScheme='blue'>
						Add to cart
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
}
