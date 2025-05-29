import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Box, Text, Heading, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Navbar />
      <Box pt="80px" textAlign="center">
        <Heading size="2xl" mb={4}>Hi, I'm [Your Name]</Heading>
        <Text fontSize="xl" mb={6}>A Passionate Web Developer</Text>
        <Button size="lg" colorScheme="teal">Explore My Work</Button>
      </Box>
    </>
  );
}
