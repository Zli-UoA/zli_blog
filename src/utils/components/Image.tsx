import { RecipeVariants } from '@vanilla-extract/recipes'
import { image } from './Image.css'

export const Image: React.FC<{
  alt: string
  src: string
  style: RecipeVariants<typeof image>
}> = ({ alt, src, style }) => {
  return <img src={src} alt={alt} className={image(style)} />
}
