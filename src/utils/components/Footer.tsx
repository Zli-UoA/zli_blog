import { footer } from './Footer.css'

export const Footer: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <footer className={footer}>{children}</footer>
}
