import {
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

import React from 'react'

import {
  ButtonLink,
  ButtonLinkProps,
} from '#components/button-link/button-link'
import { Section, SectionProps, SectionTitle } from '#components/section'
import { APP_STORE_LINKS } from '#constants'

export interface PricingPlan {
  id: string
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
  features: Array<PricingFeatureProps | null>
  action: ButtonLinkProps & { label?: string }
  isRecommended?: boolean
}

export interface PricingProps extends SectionProps {
  description: React.ReactNode
  plans: Array<PricingPlan>
  align?: 'left' | 'center' | { base: 'center'; md: 'left' }
}

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, align, ...rest } = props

  // Platform detection
  const [platform, setPlatform] = React.useState<'ios' | 'android' | 'desktop'>('desktop')

  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream
    const isAndroid = /android/i.test(userAgent)

    if (isIOS) {
      setPlatform('ios')
    } else if (isAndroid) {
      setPlatform('android')
    } else {
      setPlatform('desktop')
    }
  }, [])

  // Get platform-specific href
  const getPlatformHref = (originalHref?: string | object) => {
    if (platform === 'android') {
      return APP_STORE_LINKS.android
    }
    if (typeof originalHref === 'string') {
      return originalHref
    }
    return APP_STORE_LINKS.ios
  }

  return (
    <Section id="pricing" {...rest}>
      <SectionTitle
        title={title}
        description={description}
        mb={8}
        pos="relative"
        zIndex={1}
      />
      <SimpleGrid columns={[1, null, 3]} spacing={4}>
        {plans?.map((plan) => (
          <PricingBox
            key={plan.id}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            sx={
              plan.isRecommended
                ? {
                    borderColor: 'primary.500',
                    boxShadow: '0 6px 30px rgba(0, 0, 0, 0.2)',
                    _dark: {
                      borderColor: 'primary.500',
                      bg: 'rgba(255, 255, 255, 0.08)',
                    },
                  }
                : {}
            }
          >
            <PricingFeatures>
              {plan.features.map((feature, i) =>
                feature ? (
                  <PricingFeature
                    key={`${plan.id}-feature-${i}`}
                    {...feature}
                  />
                ) : (
                  <br key={`${plan.id}-spacer-${i}`} />
                ),
              )}
            </PricingFeatures>
            <ButtonLink
              colorScheme="primary"
              color="black"
              borderRadius="full"
              {...plan.action}
              href={getPlatformHref(plan.action.href)}
            >
              {plan.action.label || 'Continue'}
            </ButtonLink>
          </PricingBox>
        ))}
      </SimpleGrid>
      {children}
    </Section>
  )
}

const PricingFeatures: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="4"
      mb="8"
      flex="1"
    >
      {children}
    </VStack>
  )
}

export interface PricingFeatureProps {
  title: React.ReactNode
  iconColor?: string
}

const PricingFeature: React.FC<PricingFeatureProps> = (props) => {
  const { title, iconColor = 'primary.500' } = props
  return (
    <HStack>
      <Icon as={FiCheck} color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  )
}

export interface PricingBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { title, description, price, children, ...rest } = props
  return (
    <VStack
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      borderRadius="xl"
      p="8"
      flex="1 0"
      alignItems="stretch"
      borderWidth="1px"
      borderColor="rgba(255, 255, 255, 0.1)"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
      _hover={{
        bg: "rgba(255, 255, 255, 0.08)",
        transform: "translateY(-2px)",
        boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)"
      }}
      transition="all 0.3s ease"
      _dark={{
        bg: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
      {...rest}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
        {title}
      </Heading>
      <Box color="muted">{description}</Box>
      <Box fontSize="2xl" fontWeight="bold" py="4">
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  )
}
