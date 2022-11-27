import { pageTitle, pageTitleOuter, pageTitleUnderLine } from './PageTitle.css'

export const PageTitle: React.FC<{
  children: string
}> = ({ children }) => {
  return (
    <div className={pageTitleOuter}>
      <h1 className={pageTitle}>{children}</h1>
      <div className={pageTitleUnderLine} />
    </div>
  )
}
