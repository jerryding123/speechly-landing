import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import { Logo } from './logo'
import {
  COMPANY_LINKS,
  INTERNAL_ROUTES,
  SOCIAL_LINKS,
  SUPPORT_EMAIL,
} from '#constants'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Speechly',
    description:
      'Speechly is the No.1 Text-to-Speech app to turn any text, file and more into natural-sounding audio. Listen anywhere, anytime.',
  } as NextSeoProps,
  termsUrl: INTERNAL_ROUTES.terms,
  privacyUrl: INTERNAL_ROUTES.privacy,
  header: {
    links: [
      {
        id: 'benefits',
        label: 'Features',
      },
      {
        id: 'features',
        label: 'How to Use',
      },
      {
        id: 'testimonials',
        label: 'Reviews',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'Help',
      },
      {
        label: 'Download',
        href: INTERNAL_ROUTES.downloadHero,
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by <Link href={COMPANY_LINKS.website}>Speechly</Link>{' '}
        © 2024-2025
      </>
    ),
    links: [
      {
        href: `mailto:${SUPPORT_EMAIL}`,
        label: 'Contact',
      },
      {
        href: INTERNAL_ROUTES.terms,
        label: 'Terms of Service',
      },
      {
        href: INTERNAL_ROUTES.privacy,
        label: 'Privacy Policy',
      },
      {
        href: SOCIAL_LINKS.linkedin,
        label: <FaLinkedinIn size="18" />,
      },
      {
        href: SOCIAL_LINKS.twitter,
        label: <FaTwitter size="18" />,
      },
    ],
  },
  signup: {
    title: 'Start listening with Speechly',
    features: [
      {
        icon: FiCheck,
        title: 'Natural Voices',
        description: 'AI-powered voices that sound human and expressive.',
      },
      {
        icon: FiCheck,
        title: 'Multiple Languages',
        description: 'Support for dozens of languages and accents.',
      },
      {
        icon: FiCheck,
        title: 'Offline Mode',
        description: 'Download voices and listen without internet.',
      },
      {
        icon: FiCheck,
        title: 'Speed Control',
        description: 'Adjust playback speed from 0.5x to 3x.',
      },
    ],
  },
}

export default siteConfig