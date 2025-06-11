import { Box, Flex, IconButton, useColorMode, useColorModeValue, Spacer } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box bg={bg} px={4} position="fixed" width="100%" zIndex={999}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box fontWeight="bold" fontSize="xl">My Portfolio</Box>
        <Spacer />
        <Flex alignItems={'center'}>
          <Link href="#about" className="px-3">About</Link>
          <Link href="#projects" className="px-3">Projects</Link>
          <Link href="#Skills" className="px-3">Skills</Link>
          <Link href="#contact" className="px-3">Contact</Link>
          <IconButton
            ml={4}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle dark mode"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
