//app/(marketing)/layout.tsx

import { MarketingLayout } from '#components/layout'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

const baseUrl = 'https://speechly.app'

// FAQPage structured data for rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Speechly free to try?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Speechly is free for you to try with full access to all text-to-speech features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Speechly private and safe to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Privacy and security are our highest priorities. All processing happens securely, and your content is never stored or shared.',
      },
    },
    {
      '@type': 'Question',
      name: 'What devices can I use Speechly on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Speechly is designed for iOS devices, supporting most iPhones from 2018 and later and iPads from 2020 and later. Speechly requires iOS 17 and above.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Speechly work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Speechly uses the most advanced AI voices to transform your text, documents, and web pages into natural-sounding audio. You can listen on the go, while commuting, or whenever your hands and eyes are busy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Speechly across all my devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! With iCloud enabled, your saved files and preferences can sync across your iPhone and iPad so you can pick up where you left off.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I request new features?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Definitely! We welcome feedback and feature requests. Our team is always working on improvements to make Speechly the best TTS experience for everyone.',
      },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Speechly - Text to Speech Reader',
    template: '%s | Speechly',
  },
  description: 'Speechly is the No.1 Text-to-Speech app to turn any text, file and more into natural-sounding audio. Listen anywhere, anytime.',
  keywords: ['text to speech', 'TTS', 'audio', 'reader', 'accessibility', 'audiobooks', 'AI voices', 'natural speech', 'text reader', 'document reader'],
  authors: [{ name: 'Speechly' }],
  creator: 'Speechly',
  publisher: 'Speechly',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Speechly - Text to Speech Reader',
    description: 'Speechly is the No.1 Text-to-Speech app to turn any text, file and more into natural-sounding audio. Listen anywhere, anytime.',
    url: baseUrl,
    siteName: 'Speechly',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/static/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Speechly - Text to Speech Reader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speechly - Text to Speech Reader',
    description: 'Speechly is the No.1 Text-to-Speech app to turn any text, file and more into natural-sounding audio. Listen anywhere, anytime.',
    site: '@speechly_app',
    creator: '@speechly_app',
    images: ['/static/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <MarketingLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {props.children}
      <Analytics />
    </MarketingLayout>
  )
}
