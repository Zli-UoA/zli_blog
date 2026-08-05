import { style } from '@vanilla-extract/css'

export const ul = style({
  listStyleType: 'disc',
  margin: '20px 0px',
  selectors: {
    'li &': {
      margin: '0px',
      marginLeft: '2rem',
    },
  },
})

export const li = style({})
