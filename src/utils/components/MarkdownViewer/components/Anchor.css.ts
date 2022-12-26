import { style } from '@vanilla-extract/css'
import { lineHeight } from '@/utils/style/text.css'
import { color } from '@/utils/style/variables'

export const anchor = style([
  lineHeight.per150,
  {
    color: color.blue,
    textDecoration: 'underline',
    selectors: {
      '&:visited': {
        color: color.purple,
      },
    },
  },
])
