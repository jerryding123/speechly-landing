import {
  VStack,
  Heading,
  Box,
  StackProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

export interface SectionTitleProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center' | { base: 'center'; md: 'left' }
  variant?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, description, align, variant, ...rest } = props
  const styles = useMultiStyleConfig('SectionTitle', { variant })

  // Handle responsive align values
  const getAlignItems = () => {
    if (typeof align === 'object') {
      return { base: 'center', md: 'flex-start' }
    }
    return align === 'left' ? 'flex-start' : 'center'
  }

  const getTextAlign = () => {
    if (typeof align === 'object') {
      return { base: 'center', md: 'left' } as const
    }
    return align
  }

  return (
    <VStack
      sx={styles.wrapper}
      alignItems={getAlignItems()}
      spacing={4}
      {...rest}
    >
      <Heading sx={styles.title} as="h2">
        {title}
      </Heading>
      {description && (
        <Box sx={styles.description} textAlign={getTextAlign()}>
          {description}
        </Box>
      )}
    </VStack>
  )
}
