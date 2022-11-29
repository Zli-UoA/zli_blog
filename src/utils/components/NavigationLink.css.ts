import { style } from '@vanilla-extract/css'
import { fontSize, fontWeight, lineHeight } from '../style/text.css'
import { color } from '../style/variables'

export const navigationLink = style([
  fontSize.px16,
  fontWeight.bold,
  lineHeight.per175,
  {
    lineBreak: 'anywhere',
    textAlign: 'justify',
    padding: '0 4px',
  },
])

export const navigationLinkUnderLine = style({
  width: '100%',
  height: '1.5px',
  background: color.primaryLight,
  borderRadius: '0.75px',
})
