import { recipe } from '@vanilla-extract/recipes'

export type SpacingSize = 16 | 24 | 32 | 40 | 56 | 64 | 80 | 'grow'

const createSpacingStyle = (
  size: SpacingSize
): {
  width: string
  height: string
} => ({
  width: `${size}px`,
  height: `${size}px`,
})

export const spacer = recipe({
  variants: {
    size: {
      16: createSpacingStyle(16),
      24: createSpacingStyle(24),
      32: createSpacingStyle(32),
      40: createSpacingStyle(40),
      56: createSpacingStyle(56),
      64: createSpacingStyle(64),
      80: createSpacingStyle(80),
      grow: {
        flexGrow: 1,
      },
    },
  },
})
