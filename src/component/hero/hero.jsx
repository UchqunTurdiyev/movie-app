import { Box, Button, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import hero from '../../img/hero.png';

export default function Hero() {
	const heroBg = useColorModeValue('', 'linear-gradient(140deg, rgba(0,0,0, 0.6), rgba(0,0,0, 0.2))');
	const heroText = useColorModeValue('black', 'white');
	return (
		<>
			<Box w='full' h='100vh'>
				<Image w={'full'} h={'full'} objectFit={'cover'} src={hero} alt='Hero' />
				<Box w={'full'} h={'full'} position={'absolute'} top={0} bg={heroBg}>
					<Box position={'absolute'} top={36} left={36}>
						<Text
							textAlign={'center'}
							w={'32'}
							px={2}
							py={1}
							fontSize={'sm'}
							color={'cyan.500'}
							borderRadius={'xl'}
							bg={'blackAlpha.300'}
						>
							Jangari Drama
						</Text>
						<Heading py={6} fontSize={'6xl'}>
							Godzilla vs Kong
						</Heading>
						<Text w={'50%'} lineHeight={'8'} color={heroText}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque voluptas, nemo perferendis amet error vel
							sunt molestias, officiis libero earum optio mollitia modi voluptatem ab consectetur, beatae impedit. Soluta voluptas
							vel, Velit, explicabo.
						</Text>

						<Button w={'40'} h={14} mt={10} borderRadius={'full'} variant={'outline'} color={'cyan.50'}>
							Watch now
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
}
