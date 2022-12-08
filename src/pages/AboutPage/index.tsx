import { useMobile } from '@/utils/hooks/useMobile'
import { AboutPageMobile } from './AboutPageMobile'
import { AboutPagePC } from './AboutPagePC'

export type FooterLink = {
  url: string
  label: string
}

const footerLinks = [
  { label: 'Twitter', url: 'https://twitter.com/zliofficial' },
  { label: 'Connpass', url: 'https://zli.connpass.com/' },
  { label: 'Qiita', url: 'https://qiita.com/organizations/zli' },
  { label: 'GitHub', url: 'https://github.com/zli-UoA' },
]

export const AboutPage: React.FC = () => {
  const isMobile = useMobile()

  if (isMobile) {
    return <AboutPageMobile footerLinks={footerLinks} />
  }

  return <AboutPagePC footerLinks={footerLinks} />
}
