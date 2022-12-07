import classNames from 'classnames'
import { em } from './Em.css'

export const Em: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
}> = ({ className, children }) => {
  return <em className={classNames(className, em)}>{children}</em>
}
