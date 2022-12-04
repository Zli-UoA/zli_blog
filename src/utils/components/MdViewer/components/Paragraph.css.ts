import { style } from '@vanilla-extract/css'
import { fontSize, fontWeight, lineHeight } from '@/utils/style/text.css'

export const paragraph = style([
  fontSize.px16,
  fontWeight.normal,
  lineHeight.per150,
  {
    marginBottom: '16px',
    textAlign: 'justify',
  },
])
