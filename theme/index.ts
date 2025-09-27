import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'
import components from './components'
import { fontSizes } from './foundations/typography'

// Define your custom colors
const colors = {
  primary: {
    50: '#e6fffa',
    100: '#b2f5ea',
    200: '#81e6d9',
    300: '#4fd1c7',
    400: '#38b2ac',
    500: '#319795', // Main teal color
    600: '#2c7a7b',
    700: '#285e61',
    800: '#234e52',
    900: '#1d4044',
  },
  // You can keep or modify other colors as needed
}

// Customize the button component
const customComponents = {
  ...components,
  Button: {
    // Extend the current button styles
    variants: {
      primary: {
        bg: 'primary.500',
        color: 'white', // Changed to white for better contrast with teal
        _hover: {
          bg: 'primary.600',
          color: 'white', // Maintain white text on hover
        },
        _active: {
          bg: 'primary.700',
          color: 'white', // Maintain white text when active
        },
      },
      // You can also customize other button variants here if needed
    },
  },
}

export const theme = extendTheme(
  {
    colors,
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components: customComponents, // Use the extended components
  },
  baseTheme,
)