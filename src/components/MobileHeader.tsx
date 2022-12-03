import { Link } from 'react-router-dom'
import { Header } from '@/utils/components/Header'
import { HStack } from '@/utils/components/Stack'
import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { ReactComponent as MenuIcon } from '@/assets/Menu.svg'

export const MobileHeader: React.FC<{
  onClickMenuIcon: () => void
}> = ({ onClickMenuIcon }) => {
  return (
    <Header>
      <HStack
        style={{
          alignItems: 'center',
          gap: 12,
        }}
      >
        <button onClick={onClickMenuIcon}>
          <MenuIcon />
        </button>
        <Link to="/">
          <Logo />
        </Link>
      </HStack>
    </Header>
  )
}
