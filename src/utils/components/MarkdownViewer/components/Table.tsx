import classNames from 'classnames'
import { table, td, th } from './Table.css'

export const Table: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
}> = ({ children, className }) => {
  return <table className={classNames(className, table)}>{children}</table>
}

export const Th: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
}> = ({ children, className }) => {
  return <th className={classNames(className, th)}>{children}</th>
}

export const Td: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
}> = ({ children, className }) => {
  return <td className={classNames(className, td)}>{children}</td>
}
