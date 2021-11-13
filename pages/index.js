import { Box, Text } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactTypingEffect from 'react-typing-effect'

export default function Home() {
  return (
    <Box textAlign="center" padding="1rem">
      <Text fontSize="4xl">Hello I'm <Text backgroundColor="purple.600" borderRadius="lg" p="0.5rem" color="white" as="u">Ava Shah</Text></Text>
      <Text as="samp" fontSize="2xl">
        <ReactTypingEffect text={["developer.", "creator.", "student."]} speed={50} eraseSpeed={70} eraseDelay={1000}/>
      </Text>
    </Box>
  )
}
