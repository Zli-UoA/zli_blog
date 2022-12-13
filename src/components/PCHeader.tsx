import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { routes } from '@/Router'
import { Header } from '@/utils/components/Header'
import { NavigationLink } from '@/utils/components/NavigationLink'
import { HStack } from '@/utils/components/Stack'

export const PCHeader: React.FC = () => {
  return (
    <Header>
      <HStack
        style={{
          justifyContent: 'between',
          alignItems: 'center',
        }}
      >
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <HStack style={{ gap: 12, alignItems: 'center' }}>
            <NavigationLink to={routes.BLOG_LIST} active>
              Blog
            </NavigationLink>
            <NavigationLink to="/">Member</NavigationLink>
            <NavigationLink to={routes.ABOUT}>About</NavigationLink>
          </HStack>
        </nav>
      </HStack>
    </Header>
  )
}
