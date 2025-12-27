/**
 * Centralized configuration for all external links and URLs
 * This ensures consistency across the application and makes updates easier
 */

export const APP_STORE_LINKS = {
  ios: 'https://apps.apple.com/app/speechly',
  android: 'https://play.google.com/store/apps/details?id=com.speechly.app',
} as const

export const SOCIAL_LINKS = {
  twitter: 'https://x.com/speechly_app',
  linkedin: 'https://linkedin.com/company/speechly',
} as const

export const SUPPORT_EMAIL = 'support@speechly.app'

export const COMPANY_LINKS = {
  website: 'https://www.speechly.app',
} as const

export const INTERNAL_ROUTES = {
  home: '/',
  terms: '/terms',
  privacy: '/privacy',
  downloadHero: '/download/hero',
  downloadMobile: '/download/mobile',
  downloadOptions: '/#download-options',
} as const

export const ASSETS = {
  images: {
    logo: '/static/images/SpeechlyAppIcon.png',
    appleAppStore: '/static/images/apple_appstore.png',
    googlePlayStore: '/static/images/google_playstore.png',
    appStoreBadge: '/static/images/appstore_badge.png',
    androidBadge: '/static/images/android_badge.png',
  },
  screenshots: {
    heroHand: '/static/screenshots/hand1.png',
  },
} as const
