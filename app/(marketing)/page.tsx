//app/(marketing)/page.tsx

'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiMic,
  FiBriefcase,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiZap,
  FiGlobe,
  FiShield,
  FiHeadphones,
  FiVolume2,
  FiUser,
  FiPlay,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
// Removed logo components import as we'll use Image directly
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

// export const metadata: Metadata = {
//  title: 'Speechly - Natural Text to Speech',
//  description: 'Convert any text to natural-sounding speech with AI voices',
// }

// Add this function to handle Download button clicks
const handleDownloadClick = () => {
  // This will show up as a page view in Vercel Analytics
  window.location.href = '/download/hero';
};

const SystemStatus = () => {
  const [visible, setVisible] = React.useState(true);
  const [scrollPos, setScrollPos] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Make banner visible when scrolling up or at the top
      // Hide when scrolling down and not at the top
      const isVisible = (scrollPos > currentScrollPos) || currentScrollPos < 10;

      setScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
    <Box
      position="fixed"
      top="80px"
      left="50%"
      transform={`translateX(-50%) ${visible ? 'translateY(0)' : 'translateY(-150%)'}`}
      opacity={visible ? 1 : 0}
      transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
      zIndex="1000"
      px="3"
      py="2"
      borderRadius="full"
      bg="rgba(255, 255, 255, 0.15)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.2)"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="2"
    >
      <Box
        w="8px"
        h="8px"
        borderRadius="full"
        bg="teal.400"
        animation="statusPulse 2s infinite"
        alignSelf="center"
        sx={{
          '@keyframes statusPulse': {
            '0%': {
              transform: 'scale(0.95)',
              boxShadow: '0 0 0 0 rgba(72, 187, 120, 0.7)',
            },
            '70%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 10px rgba(72, 187, 120, 0)',
            },
            '100%': {
              transform: 'scale(0.95)',
              boxShadow: '0 0 0 0 rgba(72, 187, 120, 0)',
            },
          },
        }}
      />
      <Text
        fontWeight="medium"
        color="white"
        fontSize="sm"
        lineHeight="1"
        alignSelf="center"
      >
        All Systems Online
      </Text>
    </Box>
  );
};

const AppStoreBanner = () => {
  const [visible, setVisible] = React.useState(true);
  const [scrollPos, setScrollPos] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Only update visibility if there's a significant change in scroll position
      if (Math.abs(scrollPos - currentScrollPos) > 10) {
        const isVisible = (scrollPos > currentScrollPos) || currentScrollPos < 10;
        setScrollPos(currentScrollPos);
        setVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  // Updated handler to use internal redirect route
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default navigation
    setVisible(true); // Keep banner visible

    // This will show up as a page view in Vercel Analytics
    window.location.href = '/download/mobile';
  };

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="rgba(0, 0, 0, 0.85)"
      backdropFilter="blur(10px)"
      py="3"
      px="4"
      display={{ base: 'flex', md: 'none' }} // Only visible on mobile
      alignItems="center"
      justifyContent="space-between"
      borderTop="1px solid rgba(255, 255, 255, 0.1)"
      zIndex="1000"
      boxShadow="0 -4px 10px rgba(0, 0, 0, 0.1)"
      transform={visible ? 'translateY(0)' : 'translateY(100%)'}
      transition="transform 0.3s ease-in-out"
    >
      {/* Banner content remains the same */}
      <Stack direction="row" spacing="3" align="center" flex="1">
        <Image
          src="/static/images/speechlylogo.png"
          width={32}
          height={32}
          alt="App Icon"
          style={{ borderRadius: '8px' }}
        />
        <VStack align="flex-start" spacing="0">
          <HStack spacing="2" align="center">
            <Text color="white" fontWeight="bold" fontSize="sm">
              Speechly
            </Text>
            <Text color="yellow.400" fontSize="xs" fontWeight="medium">
              4.9 / 5 ★
            </Text>
          </HStack>
          <Text color="gray.300" fontSize="xs">
            Download on the App Store
          </Text>
        </VStack>
      </Stack>

      <ButtonLink
        href="/download/mobile"
        colorScheme="primary"
        size="sm"
        color="black"
        fontWeight="bold"
      >
        Free
      </ButtonLink>

    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <Box>
      <SystemStatus />

      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />

      {/* Add the AppStoreBanner component here */}
      <AppStoreBanner />

      {/* Add padding at the bottom of the page to prevent content from being hidden behind the banner on mobile */}
      <Box pb={{ base: "16", md: "0" }}></Box>
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 36, lg: 48 }} pb="0">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          spacing={{ base: 24, sm: 20, md: 16, lg: 0 }}
        >
          {/* Text content - below video for mobile, left for desktop */}
          <Hero
            id="home"
            justifyContent="flex-start"
            px={{ base: "4", md: "20" }}
            order={{ base: 2, lg: 1 }}
            mt={{ base: 12, sm: 10, md: 8, lg: 0 }}
            width={{ base: "100%", lg: "50%" }}
            title={
              <FallInPlace>
                {/* Adjusted font size (smaller) and weight (heavier) */}
                <Box
                  fontSize={{ base: "36px", sm: "42px", md: "48px", lg: "54px" }}
                  fontWeight="extrabold"  /* Changed from bold to extrabold */
                  lineHeight="1.1"
                >
                  <Box as="span" position="relative" display="inline">
                    <Box
                      position="absolute"
                      display="inline-block"
                      right="-40px"
                      top="50%"
                      transform="translateY(-50%)"
                      w={4}
                      h={4}
                      borderRadius="full"
                      bg="teal.400"
                      animation="pulse 2s infinite"
                      sx={{
                        '@keyframes pulse': {
                          '0%': {
                            transform: 'translateY(-50%) scale(0.95)',
                            boxShadow: '0 0 0 0 rgba(72, 187, 120, 0.7)',
                          },
                          '70%': {
                            transform: 'translateY(-50%) scale(1.2)',
                            boxShadow: '0 0 0 18px rgba(72, 187, 120, 0)',
                          },
                          '100%': {
                            transform: 'translateY(-50%) scale(0.95)',
                            boxShadow: '0 0 0 0 rgba(72, 187, 120, 0)',
                          },
                        },
                      }}
                    />
                    #1 Text to
                  </Box>
                  <Br /> Speech Reader
                </Box>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Text fontSize={{ base: "2xl", md: "2xl" }}>  {/* Slightly reduced */}
                  Convert any text into audio with
                  <Br /><Em>natural-sounding voices</Em><Br />{' '}
                  <Br></Br>
                </Text>
              </FallInPlace>
            }
          >
            {/* Rest of the content remains the same */}
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <Image
                  src="/static/images/openailogo.png"
                  width={135}
                  height={20}
                  alt="OpenAI Logo"
                />
                <Image
                  src="/static/images/whisperlogo.png"
                  width={150}
                  height={20}
                  alt="Whisper Logo"
                />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink
                  colorScheme="primary"
                  color="black"
                  size="lg"
                  href="/download/hero"
                  fontWeight="bold"
                  onClick={handleDownloadClick}
                >
                  Download
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#features"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Learn More
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>


          {/* Image container - above for mobile, right for desktop */}
          <Box
            width={{ base: "100%", lg: "50%" }}
            height={{ base: "400px", md: "500px", lg: "600px" }}
            position={{ base: "relative", lg: "relative" }}  // Changed to relative for all views
            display="block"
            order={{ base: 1, lg: 2 }}
            mb={{ base: 16, sm: 16, md: 12, lg: 0 }}  // Increased bottom margin for mobile views
          >
            <FallInPlace delay={1}>
              <Box
                overflow="hidden"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src="/static/screenshots/phone1.png"
                  width={280}
                  height={578}
                  alt="Speechly App Screenshot"
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: 'auto',
                    aspectRatio: '280/578',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />

                {/* Commented out YouTube video and rounded container */}
                {/*
                <Box
                  borderRadius="48px"
                  overflow="hidden"
                >
                  <iframe
                    width="280"
                    height="578"
                    src="https://www.youtube.com/embed/BvSpz885TN4?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playlist=BvSpz885TN4&disablekb=1&fs=0"
                    title="Speechly Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      width: '100%',
                      maxWidth: '280px',
                      height: 'auto',
                      aspectRatio: '280/578', // Maintains your video proportions
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </Box>
                */}
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 3]}
        iconSize={4}
        innerWidth="container.lg"
        pt="40"
        sx={{
          ".chakra-heading": { fontSize: "2xl" },
          ".chakra-text": { fontSize: "lg" }
        }}
        features={[
          {
            title: 'Instant Speech',
            icon: FiZap,
            description: 'Generate natural-sounding speech from text in seconds with lightning-fast processing.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Natural Voices',
            icon: FiUser,
            description:
              'Choose from premium voices across different languages, accents, and speaking styles.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Upload & Listen',
            icon: FiGlobe,
            description:
              'Supports file types including text, doc, PDFs, images and many more.',
            iconPosition: 'left',
            delay: 1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('#speechlyapp')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Natural. Professional. Accessible.">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Transform any written content into <Em>professional-quality speech</Em> with our advanced AI technology.
            Perfect for <Em>audiobooks, presentations, accessibility</Em>, content creation, and learning.
            Customize speech speed, tone, and style to match your exact needs.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                listentolife
              </Text>{' '}
              <Text color="cyan.300" display="inline">
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
      <HighlightsItem title="Premium Quality">
        <Text color="muted" fontSize="lg">
          Industry-leading AI voices that sound completely natural, with proper pronunciation, emphasis, and emotional expression for professional results.
        </Text>
      </HighlightsItem>
      <HighlightsItem title="Privacy First">
        <Text color="muted" fontSize="lg">
          Your text and audio files are processed securely with end-to-end encryption. No data is stored on our servers after processing.
        </Text>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Perfect for Every Use Case"
      >
        <Text color="muted" fontSize="lg">
          Whether you&apos;re creating content, improving accessibility, or learning languages, Speechly adapts to your specific needs with customizable voices and settings.
        </Text>
        <Wrap mt="8">
          {[
            'audiobooks',
            'presentations',
            'e-learning',
            'podcasts',
            'accessibility',
            'language learning',
            'content creation',
            'voiceovers',
            'meditation',
            'news reading',
            'storytelling',
            'tutorials',
            'announcements',
            'marketing',
            'training materials',
            'documentation',
            'entertainment',
            'education',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="yellow"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
          className="main-title"
          sx={{
            fontSize: { base: '2xl', md: '3xl', lg: '4xl' }
          }}
        >
          How It Works
          <Br />
        </Heading>
      }
      description={
        <>
          3 simple steps to natural speech
          <Br />
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      spacing={14}
      sx={{
        ".chakra-simple-grid": {
          rowGap: "4rem" // Add extra space between rows
        }
      }}
      features={[
        {
          title: <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={3}>Type or Upload</Text>,
          icon: FiTerminal,
          description: (
            <>
              <Br />
              Enter text or upload documents, photos and more. Supports all major file formats.
            </>
          ),
          variant: 'inline',
        },
        {
          title: <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={3}>Choose Voice</Text>,
          icon: FiUser,
          description: (
            <>
              <Br />
              Select from premium human-like voices in different languages, accents, and speaking styles.
            </>
          ),
          variant: 'inline',
        },
        {
          title: <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={3}>Listen</Text>,
          icon: FiVolume2,
          description: (
            <>
              <Br />
              Generate natural-sounding audio in seconds. Save and playback anytime.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)
        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      id="testimonials"
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial
                key={i}
                {...t}
                height="100%"
                // These props ensure consistent heights within the grid
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        U.S. Dollars. Prices may differ slightly depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home