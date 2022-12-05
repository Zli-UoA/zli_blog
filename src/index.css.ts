import { globalStyle } from '@vanilla-extract/css'
import { color } from './utils/style/variables'

globalStyle(':root', {
  background: color.black,
  color: color.white,
  minHeight: '100vh',
  fontFamily: 'sans-serif',
})
