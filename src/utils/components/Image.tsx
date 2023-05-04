import { RecipeVariants } from '@vanilla-extract/recipes'
import { useRef, useState } from 'react'
import { image } from './Image.css'

export const Image: React.FC<{
  alt: string
  src: string
  fallbackSrc?: string
  style: RecipeVariants<typeof image>
}> = ({ alt, src: _src, style, fallbackSrc = '/fallback.png' }) => {
  const [src, setSrc] = useState(_src)
  const imgRef = useRef<HTMLImageElement>(null)

  return (
    <img
      src={src}
      alt={alt}
      ref={imgRef}
      className={image(style)}
      onError={(): void => {
        setSrc(fallbackSrc)
      }}
    />
  )
}
