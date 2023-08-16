import { Flex, HStack, Icon, IconButton, Image, useColorMode } from '@chakra-ui/react';
import React from 'react';
import logo from '../../img/logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import { PiTelevisionSimple, PiPopcorn } from 'react-icons/pi';
import { LuContact } from 'react-icons/lu';
import { AiOutlineStar } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export default function Header() {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<>
			<Flex
				pr={16}
				position={'absolute'}
				top={0}
				left={0}
				zIndex={10}
				w={'full'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<HStack
					pl={16}
					w={'90%'}
					zIndex={10}
					py={1}
					alignItems={'center'}
					justifyContent={'space-between'}
					style={{ backdropFilter: 'blur(40px)' }}
				>
					<HStack alignItems={'center'} gap={8}>
						<Image src={logo} alt='Logo' mr={5} />
						<Icon fontSize={'xl'} as={AiOutlineHome} />
						<Icon fontSize={'xl'} as={PiTelevisionSimple} />
						<Icon fontSize={'xl'} as={LuContact} />
						<Icon fontSize={'xl'} as={PiPopcorn} />
						<Icon fontSize={'xl'} as={AiOutlineStar} />
					</HStack>
				</HStack>
				<HStack gap={6} alignItems={'center'}>
					<IconButton fontSize={'xl'} icon={<BiUserCircle />} colorScheme='gray.700' variant={'ghost'} />

					<IconButton
						aria-label='color-mode'
						onClick={toggleColorMode}
						icon={colorMode === 'light' ? <BsMoonStars /> : <BsSun />}
						colorScheme='gray.700'
						variant={'outline'}
					/>
				</HStack>
			</Flex>
		</>
	);
}
