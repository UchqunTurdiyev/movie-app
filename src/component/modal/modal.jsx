import React, { useEffect, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Box,
	Text,
	Heading,
} from '@chakra-ui/react';
import { api_key, bace_url } from '../../api';
import ReactPlayer from 'react-player';
import ReactStars from 'react-stars';

export default function ModalComponent({ isOpen, onClose, movies }) {
	const [trailer, setTrailer] = useState('');

	const api = `${bace_url}/${movies?.media_type === 'tv' ? 'tv' : 'movie'}/${
		movies?.id
	}/videos?api_key=${api_key}&language=en-US`;

	useEffect(() => {
		const fetchVideoData = async () => {
			const data = await fetch(api).then(res => res.json());
			if (data?.results) {
				const index = data.results.findIndex(item => item.type === 'Trailer');
				setTrailer(data?.results[index]?.key);
			}
		};
		fetchVideoData();
	}, [movies]);

	return (
		<Box w={'full'} h={{ base: '400px', md: '600px' }}>
			<Modal size={'5xl'} isOpen={isOpen} onClose={onClose} w={'full'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{movies?.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`} width={'100%'} height='500px' playing controls />
					</ModalBody>
					<ModalFooter flexDirection={'column'} alignItems={'left'}>
						<Heading py={4}>{movies?.original_title}</Heading>
						<Text>{movies?.overview}</Text>
						<Text>Popularity: {movies?.popularity}</Text>
						<Text>Language: {movies?.original_language}</Text>
						<ReactStars value={movies?.vote_average} size={24} count={10} color2={'#ffd700'} edit={false} />
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}
