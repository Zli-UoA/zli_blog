import { header } from './Header.css'

export const Header: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <header className={header}>{children}</header>
}
