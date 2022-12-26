import classNames from 'classnames'
import { ul } from './List.css'

export const Ul: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
}> = ({ children, className }) => {
  return <ul className={classNames(className, ul)}>{children}</ul>
}
