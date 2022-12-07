import { style } from '@vanilla-extract/css'
import { fontSize, fontWeight, lineHeight } from '@/utils/style/text.css'
import { color } from '@/utils/style/variables'

export const h1 = style([
  fontWeight.bold,
  fontSize.px24,
  lineHeight.per200,
  {
    borderBottom: '1px solid',
    borderColor: color.gray,
    marginBottom: '36px',
    selectors: {
      '* + &': {
        marginTop: '48px',
      },
    },
  },
])

export const h2 = style([
  fontWeight.bold,
  fontSize.px20,
  lineHeight.per200,
  {
    borderBottom: '1px solid',
    borderColor: color.gray,
    marginBottom: '32px',
    selectors: {
      '* + &': {
        marginTop: '44px',
      },
    },
  },
])

export const h3 = style([
  fontWeight.bold,
  fontSize.px20,
  lineHeight.per200,
  {
    marginBottom: '16px',
    selectors: {
      '* + &': {
        marginTop: '28px',
      },
    },
  },
])

export const h4 = style([
  fontWeight.bold,
  fontSize.px16,
  lineHeight.per200,
  {
    marginBottom: '12px',
    selectors: {
      '* + &': {
        marginTop: '24px',
      },
    },
  },
])

export const h5 = style([
  fontWeight.bold,
  fontSize.px14,
  lineHeight.per200,
  {
    marginBottom: '10px',
    selectors: {
      '* + &': {
        marginTop: '20px',
      },
    },
  },
])

export const h6 = style([
  fontWeight.bold,
  fontSize.px14,
  lineHeight.per200,
  {
    marginBottom: '8px',
    color: color.gray,
    selectors: {
      '* + &': {
        marginTop: '16px',
      },
    },
  },
])
