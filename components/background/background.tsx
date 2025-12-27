import React from 'react'
import { Box } from '@chakra-ui/react'

const Background: React.FC = () => {
  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={0}
      bg="#000000"
    />
  )
}

export default Background
