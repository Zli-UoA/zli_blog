import { style } from '@vanilla-extract/css'
import { fontSize, fontWeight, lineHeight } from '../style/text.css'
import { color } from '../style/variables'

export const additionalInformation = style([
  fontSize.px10,
  fontWeight.normal,
  lineHeight.per150,
  {
    color: color.gray,
  },
])
