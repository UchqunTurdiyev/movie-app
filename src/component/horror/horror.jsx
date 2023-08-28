import { Card, Flex, CardBody, Heading, Image, Stack, Text, Box, useColorModeValue } from '@chakra-ui/react';

import React from 'react';
import ReactStars from 'react-stars';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Horror({ isHorror }) {
	const heroBg = useColorModeValue('', 'linear-gradient(0deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.1))');
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 484 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 484, min: 0 },
			items: 1,
		},
	};
	return (
		<Box w={'full'} h={'400px'} px={{ base: 4, md: 10 }} my={10}>
			<Carousel responsive={responsive}>
				{/* <Flex w={'full'} h={'500px'} flexWrap={'wrap'} gap={4}> */}
				{isHorror.map(el => {
					return (
						el.backdrop_path && (
							<Card w={'full'} h={'400px'} key={el.id} maxW='sm'>
								<CardBody>
									<Image
										w={'full'}
										h={'full'}
										objectFit={'cover'}
										position={'relative'}
										src={`https://image.tmdb.org/t/p/original/${el?.backdrop_path}`}
										alt={el?.title}
									/>
									<Box position={'absolute'} w={'full'} h={'full'} left={0} top={0} bg={heroBg}></Box>

									<Stack position={'absolute'} bottom={5} p={3} spacing='1'>
										<Heading size='md'>{el.title}</Heading>
										<Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
											<Text textAlign={'right'} fontSize={'xl'}>
												Language: {el?.original_language}{' '}
											</Text>
											<Text color='blue.600' textAlign={'right'} fontSize='sm'>
												{el.release_date}
											</Text>
										</Flex>
										<ReactStars size={24} count={10} color2={'#ffd700'} value={el?.vote_average} edit={false} />
									</Stack>
								</CardBody>
							</Card>
						)
					);
				})}
				{/* </Flex> */}
			</Carousel>
		</Box>
	);
}
