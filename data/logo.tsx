import { chakra, HTMLChakraProps, Image, Flex, Text, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  const textColor = useColorModeValue('#231f20', '#fff')

  return (
    <chakra.div {...props}>
      <Flex align="center" h="40px">
        <Image
          src="/static/images/SpeechlyAppIcon.png"
          alt="Speechly Logo"
          h="32px"
          w="auto"
        />
        <Text
          ml={3}
          fontSize="2xl"
          fontWeight="black"
          color={textColor}
          fontFamily="var(--font-dm-sans)"
          letterSpacing="-0.01em"
          lineHeight="1"
        >
          Speechly
        </Text>
      </Flex>
    </chakra.div>
  )
}