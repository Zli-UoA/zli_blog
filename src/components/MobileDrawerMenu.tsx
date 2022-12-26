import { Link } from 'react-router-dom'
import { ReactComponent as CloseIcon } from '@/assets/Close.svg'
import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { footerLinks } from '@/consts/footerLinks'
import { routes } from '@/Router'
import { AdditionalInformation } from '@/utils/components/AdditionalInformation'
import { Drawer } from '@/utils/components/Drawer'
import { ExternalLink } from '@/utils/components/ExternalLink'
import { Footer } from '@/utils/components/Footer'
import { Header } from '@/utils/components/Header'
import { NavigationLink } from '@/utils/components/NavigationLink'
import { Spacer } from '@/utils/components/Spacer'
import { HStack, VStack } from '@/utils/components/Stack'

export const MobileDrawerMenu: React.FC<{
  isOpen: boolean
  close: () => void
}> = ({ isOpen, close }) => {
  return (
    <Drawer isOpen={isOpen} close={close}>
      <VStack fill>
        <Header>
          <HStack style={{ alignItems: 'center', gap: 12 }}>
            <button type="button" onClick={close}>
              <CloseIcon />
            </button>
            <Link to="/">
              <Logo></Logo>
            </Link>
          </HStack>
        </Header>
        <Spacer size={24} />
        <VStack style={{ justifyContent: 'between' }} fill>
          <nav>
            <VStack style={{ gap: 12, alignItems: 'start' }}>
              <NavigationLink to={routes.BLOG_LIST} active>
                Blog
              </NavigationLink>
              <NavigationLink to="/">Member</NavigationLink>
              <NavigationLink to={routes.ABOUT}>About</NavigationLink>
            </VStack>
          </nav>
          <Footer>
            <VStack style={{ justifyContent: 'between', gap: 8 }}>
              {footerLinks.map(({ label, url }, i) => (
                <ExternalLink to={url} key={i}>
                  {label}
                </ExternalLink>
              ))}
              <AdditionalInformation>
                Copy right ©︎ 2022w Zli
              </AdditionalInformation>
            </VStack>
          </Footer>
        </VStack>
      </VStack>
    </Drawer>
  )
}
