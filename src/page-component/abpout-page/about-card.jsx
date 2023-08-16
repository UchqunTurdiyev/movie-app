import React from 'react';
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	GridItem,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';

export default function AboutCard(props) {
	const { title, description, image, price } = props;
	return (
		<GridItem>
			<Card maxW='sm'>
				<CardBody>
					<Image h={'200px'} src={image} alt='Green double couch with wooden legs' borderRadius='lg' />
					<Stack mt='6' spacing='3'>
						<Heading size='md'>{title.slice(0, 20)}</Heading>
						<Text>{description}</Text>
						<Text color='blue.600' fontSize='2xl'>
							${price}
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
		</GridItem>
	);
}
