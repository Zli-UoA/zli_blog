import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { footerLinks } from '@/consts/footerLinks'
import { AdditionalInformation } from '@/utils/components/AdditionalInformation'
import { ExternalLink } from '@/utils/components/ExternalLink'
import { Footer } from '@/utils/components/Footer'
import { HStack, VStack } from '@/utils/components/Stack'

export const PCFooter: React.FC = () => {
  return (
    <Footer>
      <HStack style={{ justifyContent: 'between' }}>
        <VStack style={{ justifyContent: 'between' }}>
          <Logo />
          <AdditionalInformation>Copy right ©︎ 2022 Zli</AdditionalInformation>
        </VStack>
        <VStack style={{ justifyContent: 'between', gap: 8 }}>
          {footerLinks.map(({ label, url }, i) => (
            <ExternalLink to={url} key={i}>
              {label}
            </ExternalLink>
          ))}
        </VStack>
      </HStack>
    </Footer>
  )
}
