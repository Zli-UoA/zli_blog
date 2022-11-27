import { NavLink } from 'react-router-dom'
import { navigationLink } from './NavigationLink.css'
import { pageTitleUnderLine } from './PageTitle.css'

export const NavigationLink: React.FC<{
  active?: boolean
  to: string
  children: string
}> = ({ active, to, children }) => {
  return (
    <div>
      <NavLink className={navigationLink} to={to}>
        {children}
      </NavLink>
      {active && <div className={pageTitleUnderLine} />}
    </div>
  )
}
