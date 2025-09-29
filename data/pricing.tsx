import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing',
  description:
    'Speechly is FREE to use',
  plans: [
    {
      id: 'free',
      title: 'Free',
      description: 'Try full features for free',
      price: 'Free',
      features: [
        {
          title: '2 Free Text-to-Speech Files',
        },
        {
          title: 'Premium Human Voices',
        },
        {
          title: 'Normal Intelligence Models',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/speechly-text-to-voice/id6753100689',
      },
    },
    {
      id: 'monthly',
      title: 'Monthly',
      description: 'Popular',
      price: '$14.99 / month',
      isRecommended: true,
      features: [
        {
          title: 'Unlimited Text-to-Speech',
        },
        {
          title: 'Most Premium Human Voices',
        },
        {
          title: 'Most Powerful Intelligence Models',
        },
        {
          title: 'Documents, PDFs, Notes, Photos',
        },
        {
          title: 'Unlimited File Uploads',
        },
        {
          title: 'Unlimited File History',
        },
        {
          title: 'Priority Customer Support',
        },
        null,
        {
          title: 'Promotion: Get unlimited Speechly use for a limited time!',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/speechly-text-to-voice/id6753100689',
      },
    },
    {
      id: 'yearly',
      title: 'Yearly',
      description: 'Best Value',
      price: '$9.99 / month',
      features: [
        {
          title: 'Unlimited Text-to-Speech',
        },
        {
          title: 'Most Premium Human Voices',
        },
        {
          title: 'Most Powerful Intelligence Models',
        },
        {
          title: 'Documents, PDFs, Notes, Photos',
        },
        {
          title: 'Unlimited File Uploads',
        },
        {
          title: 'Unlimited File History',
        },
        {
          title: 'Priority Customer Support',
        },
        null,
        {
          title: 'Promotion: Get unlimited Speechly use for a limited time!',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/speechly-text-to-voice/id6753100689',
      },
    },
  ],
}
