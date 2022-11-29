import { createContainer, style } from '@vanilla-extract/css'

const listContainer = createContainer()

export const itemList = style({
  width: '100%',
  containerName: listContainer,
  containerType: 'inline-size',
})

export const itemListInner = style({
  display: 'grid',
  gap: '16px',
  gridTemplateColumns: '100%',
  '@container': {
    [`${listContainer} (min-width: 600px)`]: {
      gridTemplateColumns: 'repeat(2, calc(calc(100% - 16px) / 2))',
    },
  },
})
