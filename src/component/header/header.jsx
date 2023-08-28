import {
	Flex,
	HStack,
	Icon,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../img/logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import { PiTelevisionSimple, PiPopcorn } from 'react-icons/pi';
import { LuContact } from 'react-icons/lu';
import { AiOutlineStar } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';

export default function Header() {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<>
			<Flex
				pr={{ base: 5, md: 16 }}
				position={'absolute'}
				top={0}
				left={0}
				zIndex={10}
				w={'full'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<HStack
					pl={{ md: 6, lg: 16 }}
					w={'90%'}
					zIndex={10}
					py={1}
					alignItems={'center'}
					justifyContent={'space-between'}
					style={{ backdropFilter: 'blur(40px)' }}
				>
					<HStack alignItems={'center'} gap={8}>
						<Image src={logo} alt='Logo' mr={5} />
						<Flex gap={{ base: 5, md: 10 }} display={{ base: 'none', md: 'flex' }}>
							<Icon fontSize={'xl'} as={AiOutlineHome} />
							<Icon fontSize={'xl'} as={PiTelevisionSimple} />
							<Icon fontSize={'xl'} as={LuContact} />
							<Icon fontSize={'xl'} as={PiPopcorn} />
							<Icon fontSize={'xl'} as={AiOutlineStar} />
						</Flex>
					</HStack>
				</HStack>
				<HStack gap={4} alignItems={'center'}>
					<IconButton fontSize={'xl'} icon={<BiUserCircle />} colorScheme='gray.700' variant={'ghost'} />

					<IconButton
						aria-label='color-mode'
						onClick={toggleColorMode}
						icon={colorMode === 'light' ? <BsMoonStars /> : <BsSun />}
						colorScheme='gray.700'
						variant={'outline'}
					/>
					<Menu>
						<MenuButton>
							<IconButton aria-label='color-mode' icon={<HiMenuAlt3 />} colorScheme='gray.700' variant={'outline'} />
						</MenuButton>
						<MenuList zIndex={50} minW={'170px'}>
							<MenuItem as='a' href='/'>
								<Icon fontSize={'xl'} as={AiOutlineHome} /> <Text ml={5}>Home</Text>
							</MenuItem>
							<MenuItem as='a' href='#'>
								<Icon fontSize={'xl'} as={PiTelevisionSimple} /> <Text ml={5}>Television</Text>
							</MenuItem>
							<MenuItem as='a' href='#'>
								<Icon fontSize={'xl'} as={LuContact} />
								<Text ml={5}>Contact</Text>
							</MenuItem>
							<MenuItem as='a' href='#'>
								<Icon fontSize={'xl'} as={PiPopcorn} />
								<Text ml={5}>Relax</Text>
							</MenuItem>
							<MenuItem as='a' href='#'>
								<Icon fontSize={'xl'} as={AiOutlineStar} />
								<Text ml={5}>Save Move</Text>
							</MenuItem>
						</MenuList>
					</Menu>
				</HStack>
			</Flex>
		</>
	);
}
