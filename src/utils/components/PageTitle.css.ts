import { style } from '@vanilla-extract/css'
import { fontSize, fontWeight, lineHeight } from '@/utils/style/text.css'
import { color } from '@/utils/style/variables'

export const pageTitle = style([
  fontSize.px24,
  lineHeight.per175,
  fontWeight.bold,
  {
    lineBreak: 'anywhere',
    textAlign: 'justify',
    padding: '0 8px',
  },
])

export const pageTitleUnderLine = style({
  width: '100%',
  height: '2px',
  background: color.primaryLight,
  borderRadius: '1px',
})

export const pageTitleOuter = style({
  maxWidth: '100%',
})
