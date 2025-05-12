import { style } from '@vanilla-extract/css'
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@/utils/style/text.css'
import { color } from '@/utils/style/variables'

export const inlineCode = style([
  fontSize.px14,
  fontFamily.monospace,
  fontWeight.normal,
  lineHeight.per150,
  {
    padding: '1px 8px',
    color: color.gray,
    borderRadius: '4px',
    background: color.elevation3,
    wordWrap: 'break-word',
  },
])
