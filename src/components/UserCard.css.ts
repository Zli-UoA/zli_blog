import { fontSize, fontWeight, lineHeight } from '@/utils/style/text.css'
import { style } from '@vanilla-extract/css'

export const name = style([fontSize.px20, fontWeight.bold, lineHeight.per150])

export const introduction = style([
  fontSize.px14,
  fontWeight.normal,
  lineHeight.per175,
])
