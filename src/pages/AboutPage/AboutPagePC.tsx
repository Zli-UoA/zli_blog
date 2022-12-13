import { PCFooter } from '@/components/PCFooter'
import { PCHeader } from '@/components/PCHeader'
import { Image } from '@/utils/components/Image'
import { MarkdownViewer } from '@/utils/components/MdViewer'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { VStack } from '@/utils/components/Stack'
import { FooterLink } from '.'

export const AboutPagePC: React.FC<{
  about: string | undefined
  footerLinks: FooterLink[]
}> = ({ about, footerLinks }) => {
  if (!about) {
    return (
      <Page title="About">
        <PCHeader />
        <main>
          <VStack style={{ alignItems: 'center' }}>
            <Spacer size={32} />
            <PageTitle>About</PageTitle>
            <Spacer size={32} />
            now loading
            <Spacer size={80} />
          </VStack>
        </main>
        <PCFooter footerLinks={footerLinks} />
      </Page>
    )
  }

  return (
    <Page title="About">
      <PCHeader />
      <main>
        <VStack style={{ alignItems: 'center' }}>
          <Spacer size={40} />
          <Image
            src="/about/Logo.svg"
            alt="eyeCatch"
            style={{
              height: 270,
              ratio: 'screen',
              radius: 8,
            }}
          />
          <Spacer size={32} />
          <PageTitle>About</PageTitle>
          <Spacer size={56} />
          <article>
            <MarkdownViewer mdText={about} />
          </article>
          <Spacer size={80} />
        </VStack>
      </main>
      <PCFooter footerLinks={footerLinks} />
    </Page>
  )
}
