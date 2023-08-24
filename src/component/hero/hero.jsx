import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';
import axios from 'axios';
import { API_REQUEST } from '../../services/movei';
import ReactStars from 'react-stars';

export default function Hero() {
	const heroBg = useColorModeValue('', 'linear-gradient(30deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.6))');
	const heroText = useColorModeValue('black', 'white');
	const [ispopular, setIsPopular] = useState([]);

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
				<Box position={'absolute'} top={36} left={36}>
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
					<Heading py={6} fontSize={'6xl'}>
						{movies?.title}
					</Heading>
					<Text fontSize={'2xl'} color={'cyan.600'}>
						{movies?.original_title}
					</Text>
					<Text w={'60%'} lineHeight={'6'} color={heroText}>
						{movies?.overview}
					</Text>

					<Flex my={4} className='items-center gap-5'>
						<Text fontSize={'xl'}>Language: {movies?.original_language} </Text>
						<Text>watch: {movies?.vote_count}</Text>
						<ReactStars size={24} count={10} color2={'#ffd700'} value={movies?.vote_average} edit={false} />
					</Flex>

					<Button w={'40'} h={14} mt={10} borderRadius={'full'} variant={'outline'} color={'cyan.50'}>
						Watch now
					</Button>
				</Box>
			</Box>
			<Box px={16} py={6}></Box>
		</>
	);
}
