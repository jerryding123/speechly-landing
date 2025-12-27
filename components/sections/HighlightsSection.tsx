'use client'

import {
  Box,
  Flex,
  IconButton,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { FiCheck, FiCopy } from 'react-icons/fi'

import {
  Highlights,
  HighlightsItem,
} from '#components/highlights'
import { Em } from '#components/typography'
import { sectionContentStyles, glassmorphicCardStyles } from '#theme/styles/section-styles'

const USE_CASE_TAGS = [
  'articles',
  'ebooks',
  'pdfs',
  'documents',
  'emails',
  'news',
  'research papers',
  'study materials',
  'web pages',
  'social media',
  'scripts',
  'presentations',
  'notes',
  'recipes',
  'audiobooks',
  'podcasts',
  'learning',
  'accessibility',
] as const

/**
 * Highlights section showcasing key features and benefits
 */
export function HighlightsSection() {
  const { onCopy, hasCopied } = useClipboard('#speechly')

  return (
    <Box sx={sectionContentStyles}>
      <Highlights>
        <HighlightsItem colSpan={[1, null, 2]} title="Natural. Fast. Versatile.">
          <VStack alignItems="flex-start" spacing="8" position="relative" zIndex={1}>
            <Text color="muted" fontSize="xl">
              Listen to any text with{' '}
              <Em>our most natural-sounding AI voices</Em>. Import articles, PDFs,
              documents and more for <Em>seamless text-to-speech conversion</Em>. Choose your
              preferred voice, speed, and save audio for offline listening.
            </Text>

            <Flex
              rounded="full"
              flexDirection="row"
              alignItems="center"
              py="1"
              ps="8"
              pe="2"
              _dark={{ bg: 'gray.900' }}
              sx={glassmorphicCardStyles}
            >
              <Box>
                <Text color="primary.400" display="inline">
                  shareyourstory
                </Text>{' '}
                <Text color="yellow.300" display="inline">
                  #speechly
                </Text>
              </Box>
              <IconButton
                icon={hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy hashtag"
                onClick={onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </Flex>
          </VStack>
        </HighlightsItem>

        <HighlightsItem title="AI Voice Technology">
          <Text color="muted" fontSize="lg" position="relative" zIndex={1}>
            Powered by cutting-edge neural text-to-speech technology for
            incredibly natural and expressive voices.
            <br />
            <br />
            Speechly supports multiple voice styles and emotions for any content.
          </Text>
        </HighlightsItem>

        <HighlightsItem title="Offline Mode">
          <Text color="muted" fontSize="lg" position="relative" zIndex={1}>
            Download your audio files and listen anywhere without internet
            connection.
            <br />
            <br />
            Perfect for commutes, workouts, or anywhere you need to go.
          </Text>
        </HighlightsItem>

        <HighlightsItem colSpan={[1, null, 2]} title="Turn Any Text Into Audio">
          <Text color="muted" fontSize="lg" position="relative" zIndex={1}>
            Whether you&apos;re studying, commuting, or multitasking, Speechly lets
            you consume content your way. Listen to what you need, when you need it.
          </Text>
          <Wrap mt="8" position="relative" zIndex={1}>
            {USE_CASE_TAGS.map((tag) => (
              <Tag
                key={tag}
                variant="subtle"
                colorScheme="yellow"
                rounded="full"
                px="3"
              >
                {tag}
              </Tag>
            ))}
          </Wrap>
        </HighlightsItem>
      </Highlights>
    </Box>
  )
}
