import { style } from '@vanilla-extract/css'

export const footer = style({
  position: 'absolute',
  width: '100%',
  bottom: 0,
  left: 0,
})

export const footerInner = style({
  maxWidth: '730px',
  margin: 'auto',
  padding: '24px 0',
})
