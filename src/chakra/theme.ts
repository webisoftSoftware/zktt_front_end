import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-plus-jakarta-sans)',
    body: 'var(--font-plus-jakarta-sans)',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 700,
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 400,
      },
    },
  },
})

export default theme