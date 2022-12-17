import { style } from '@vanilla-extract/css'

export const page = style({
  padding: '0 16px',
  minHeight: '100vh',
})

export const pageInner = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  maxWidth: '730px',
  margin: 'auto',
})
