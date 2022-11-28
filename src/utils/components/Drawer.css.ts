import { style } from '@vanilla-extract/css'
import { color } from '../style/variables'

export const drawer = style({
  padding: '0 16px',
  boxSizing: 'border-box',
  boxShadow: '',
  background: color.elevation3,
  width: '100%',
  height: '100vh',
})

export const underlay = style({
  background: color.black,
  boxSizing: 'border-box',
  maxWidth: '500px',
  height: '100vh',
})

export const outer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  paddingRight: '80px',
  background: '#000000aa',
  width: '100vw',
  height: '100vh',
})
