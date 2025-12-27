const Section = {
  baseStyle: {
    pt: 16,
    pb: 16,
    px: [4, null],
  },
  variants: {
    subtle: {},
    solid: {
      bg: 'primary.400',
    },
    alternate: ({ colorMode }: any) => ({
      bg: colorMode === 'dark' ? 'gray.800' : 'gray.50',
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default Section
