import { externalLink } from './ExternalLink.css'

export const ExternalLink: React.FC<{
  children: string
  to: string
}> = ({ children, to }) => {
  return (
    <a className={externalLink} href={to}>
      {children}
    </a>
  )
}
