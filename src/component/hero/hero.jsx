import { Box, Button, Flex, Heading, Image, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { API_REQUEST } from '../../services/movei';
import ReactStars from 'react-stars';
import ModalComponent from '../modal/modal';

export default function Hero() {
	const heroBg = useColorModeValue('', 'linear-gradient(30deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.6))');
	const heroText = useColorModeValue('black', 'white');
	const [ispopular, setIsPopular] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const movies = ispopular[Math.floor(Math.random() * ispopular.length)];

	useEffect(() => {
		axios.get(API_REQUEST.popular).then(res => {
			setIsPopular(res.data.results);
		});
	}, []);

	return (
		<>
			<Box w='full' h='100vh'>
				<Image
					w={'full'}
					h={'full'}
					objectFit={'cover'}
					src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
					alt='Hero'
				/>
				<Box w={'full'} h={'100vh'} position={'absolute'} top={0} bg={heroBg}></Box>
				<Box position={'absolute'} top={36} left={{ base: 5, lg: 36 }}>
					<Text
						textAlign={'center'}
						w={'32'}
						px={2}
						py={1}
						fontSize={'sm'}
						color={'white'}
						borderRadius={'xl'}
						bg={'blackAlpha.600'}
					>
						{movies?.release_date}
					</Text>
					<Heading py={6} fontSize={{ base: '4xl', md: '6xl' }}>
						{movies?.title}
					</Heading>
					<Text fontSize={'2xl'} color={'cyan.600'}>
						{movies?.original_title}
					</Text>
					<Text w={{ base: '100%', md: '60%' }} lineHeight={'6'} color={heroText}>
						{movies?.overview.slice(0, 140)}...
					</Text>

					<Flex my={4} alignItems={{ base: 'left', md: 'center' }} gap={5} flexDirection={{ base: 'column', md: 'row' }}>
						<Text fontSize={'xl'}>Language: {movies?.original_language} </Text>
						<Text>watch: {movies?.vote_count}</Text>
						<ReactStars size={24} count={10} color2={'#ffd700'} value={movies?.vote_average} edit={false} />
					</Flex>

					<Button
						onClick={onOpen}
						w={'40'}
						h={14}
						mt={{ base: 3, md: 10 }}
						borderRadius={'full'}
						variant={'outline'}
						color={'cyan.50'}
					>
						Watch now
					</Button>
					<ModalComponent onOpen={onOpen} isOpen={isOpen} onClose={onClose} movies={movies} />
				</Box>
			</Box>
			<Box px={16} py={6}></Box>
		</>
	);
}
