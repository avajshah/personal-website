import { Box, Text } from '@chakra-ui/layout'
import {Image, VStack} from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactTypingEffect from 'react-typing-effect'

export default function Home() {
  return (
    <Box textAlign="center" padding="1rem">
      <VStack spacing="24px">
        <Box display="flex" justifyContent="center" width="full">
          <Image src="/ava.png" alt="Ava Shah" borderRadius="full" boxSize="150px"/>
        </Box>
        <Text fontSize="4xl">Hello I'm <Text backgroundColor="purple.600" borderRadius="lg" p="0.5rem" color="white" as="u">Ava Shah</Text></Text>
        <Text as="samp" fontSize="2xl">
          <ReactTypingEffect text={["developer.", "creator.", "student."]} speed={50} eraseSpeed={70} eraseDelay={1000}/>
        </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </VStack>
    </Box>
  )
}
