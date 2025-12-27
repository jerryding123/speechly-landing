'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import {
  FiBook,
  FiDownload,
  FiHeadphones,
  FiSliders,
  FiUpload,
} from 'react-icons/fi'

import { Features } from '#components/features'
import { sectionContentStyles } from '#theme/styles/section-styles'

const STEP_FEATURES = [
  {
    title: <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold" mb={3}>Step 1</Text>,
    icon: FiUpload,
    description: (
      <>
        <Br />
        Import your text, paste content, or upload a document.
      </>
    ),
    variant: 'inline' as const,
  },
  {
    title: <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold" mb={3}>Step 2</Text>,
    icon: FiSliders,
    description: (
      <>
        <Br />
        Choose your preferred voice and adjust the speed.
      </>
    ),
    variant: 'inline' as const,
  },
  {
    title: <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold" mb={3}>Step 3</Text>,
    icon: FiHeadphones,
    description: (
      <>
        <Br />
        Start listening with natural AI-powered narration.
      </>
    ),
    variant: 'inline' as const,
  },
  {
    title: <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold" mb={3}>Save</Text>,
    icon: FiDownload,
    description: (
      <>
        <Br />
        Download audio for offline listening anytime.
      </>
    ),
    variant: 'inline' as const,
    iconColor: 'yellow.400',
    iconBg: 'rgba(255, 208, 30, 0.2)',
  },
  {
    title: <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold" mb={3}>Library</Text>,
    icon: FiBook,
    description: (
      <>
        <Br />
        Organize and access all your audio content in one place.
      </>
    ),
    variant: 'inline' as const,
    iconColor: 'yellow.400',
    iconBg: 'rgba(255, 208, 30, 0.2)',
  },
]

/**
 * Features section showing how to use the app step by step
 */
export function FeaturesSection() {
  return (
    <Box sx={sectionContentStyles}>
      <Features
        id="features"
        title={
          <Heading
            lineHeight="short"
            fontSize={['4xl', null, '4xl']}
            textAlign="center"
            as="p"
            className="main-title"
            sx={{
              fontSize: { base: '4xl', md: '4xl', lg: '4xl' },
            }}
          >
            How to Use
          </Heading>
        }
        description="Simple and intuitive. Start listening in seconds."
        align="center"
        columns={[1, 2, 3]}
        iconSize={4}
        spacing={14}
        sx={{
          '.chakra-simple-grid': {
            rowGap: '4rem',
          },
          '.feature-item, .saas-feature, & > div, & svg, & .chakra-icon, & [role="img"]': {
            position: 'relative',
            zIndex: 1,
          },
        }}
        features={STEP_FEATURES}
      />
    </Box>
  )
}
