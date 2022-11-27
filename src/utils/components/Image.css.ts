import { recipe } from '@vanilla-extract/recipes'
import { color } from '../style/variables'

export const image = recipe({
  base: {
    objectFit: 'cover',
    borderColor: color.white,
    borderWidth: '1px',
    borderStyle: 'solid',
  },

  variants: {
    ratio: {
      square: {
        aspectRatio: '1 / 1',
      },
      screen: {
        aspectRatio: '16 / 9',
      },
    },
    height: {
      20: {
        height: '20px',
      },
      40: {
        height: '40px',
      },
      92: {
        height: '92px',
      },
      270: {
        height: '270px',
      },
    },
    radius: {
      8: {
        borderRadius: '8px',
      },
      rounded: {
        borderRadius: '9999px',
      },
    },
  },

  defaultVariants: {
    ratio: 'square',
    height: 20,
    radius: 'rounded',
  },
})
