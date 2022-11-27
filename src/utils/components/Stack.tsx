import { RecipeVariants } from '@vanilla-extract/recipes'
import { hStack, vStack } from './Stack.css'

export const VStack: React.FC<{
  children: React.ReactNode
  style: RecipeVariants<typeof vStack>
}> = ({ children, style }) => {
  return <div className={vStack(style)}>{children}</div>
}

export const HStack: React.FC<{
  children: React.ReactNode
  style: RecipeVariants<typeof hStack>
}> = ({ children, style }) => {
  return <div className={hStack(style)}>{children}</div>
}
