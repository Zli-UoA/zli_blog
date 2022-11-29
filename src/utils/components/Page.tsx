import { Helmet } from 'react-helmet-async'
import { page, pageInner } from './Page.css'

export const Page: React.FC<{
  children: React.ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <div className={page}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={pageInner}>{children}</div>
    </div>
  )
}
