import { recipe } from '@vanilla-extract/recipes'

const stackPropBase = {
  variants: {
    justifyContent: {
      start: {
        justifyContent: 'start',
      },
      end: {
        justifyContent: 'end',
      },
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    alignItems: {
      start: {
        alignItems: 'start',
      },
      end: {
        alignItems: 'end',
      },
      center: {
        alignItems: 'center',
      },
    },
    gap: {
      0: {
        gap: '0px',
      },
      8: {
        gap: '8px',
      },
      12: {
        gap: '12px',
      },
      16: {
        gap: '16px',
      },
    },
  },
}

export const vStack = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  ...stackPropBase,
})

export const hStack = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
  },
  ...stackPropBase,
})
