import { Drawer } from '@/utils/components/Drawer'
import { HStack, VStack } from '@/utils/components/Stack'
import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { ReactComponent as CloseIcon } from '@/assets/Close.svg'
import { Link } from 'react-router-dom'
import { Spacer } from '@/utils/components/Spacer'
import { NavigationLink } from '@/utils/components/NavigationLink'
import { ExternalLink } from '@/utils/components/ExternalLink'
import { AdditionalInformation } from '@/utils/components/AdditionalInformation'
import { Header } from '@/utils/components/Header'
import { Footer } from '@/utils/components/Footer'

export const MobileDrawerMenu: React.FC<{
  isOpen: boolean
  close: () => void
  footerLinks: { label: string; url: string }[]
}> = ({ isOpen, close, footerLinks }) => {
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
              <NavigationLink to="/" active>
                Blog
              </NavigationLink>
              <NavigationLink to="/">Member</NavigationLink>
              <NavigationLink to="/">About</NavigationLink>
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
                Copy right ©︎ 2020 Zli
              </AdditionalInformation>
            </VStack>
          </Footer>
        </VStack>
      </VStack>
    </Drawer>
  )
}
