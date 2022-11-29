import { spacer, SpacingSize } from './Spacer.css'

export const Spacer: React.FC<{
  size: SpacingSize
}> = ({ size }) => {
  return <div className={spacer({ size })}></div>
}
