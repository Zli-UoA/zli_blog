import { style } from '@vanilla-extract/css'
import { fontWeight } from '@/utils/style/text.css'
import { color } from '@/utils/style/variables'

export const table = style({
  borderCollapse: 'collapse',
})

export const th = style([
  fontWeight.bold,
  {
    border: '1px solid',
    borderColor: color.white,
    padding: '8px 12px',
  },
])

export const td = style({
  border: '1px solid',
  borderColor: color.white,
  padding: '4px 12px',
})
