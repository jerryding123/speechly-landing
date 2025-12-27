import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'
import components from './components'
import { fontSizes } from './foundations/typography'

const colors = {
  primary: {
    50: '#fff9db',
    100: '#ffefaf',
    200: '#ffe57f',
    300: '#ffda4e',
    400: '#ffd01e',
    500: '#e6b800',
    600: '#b38f00',
    700: '#806600',
    800: '#4d3d00',
    900: '#1a1400',
  },
}

const customComponents = {
  ...components,
  Button: {
    variants: {
      primary: {
        bg: 'primary.500',
        color: 'black',
        _hover: {
          bg: 'primary.600',
          color: 'black',
        },
        _active: {
          bg: 'primary.700',
          color: 'black',
        },
      },
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
    components: customComponents,
  },
  baseTheme,
)
