import { footer, footerInner } from './Footer.css'

export const Footer: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <footer className={footer}>
      <div className={footerInner}>{children}</div>
    </footer>
  )
}
