import { MobileDrawerMenu } from '@/components/MobileDrawerMenu'
import { MobileHeader } from '@/components/MobileHeader'
import { Image } from '@/utils/components/Image'
import { MarkdownViewer } from '@/utils/components/MdViewer'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { VStack } from '@/utils/components/Stack'
import { useOpen } from '@/utils/hooks/useOpen'
import { FooterLink } from '.'

export const AboutPageMobile: React.FC<{
  about: string | undefined
  footerLinks: FooterLink[]
}> = ({ about, footerLinks }) => {
  console.log(about)
  const drawer = useOpen()

  if (!about) {
    return (
      <Page title="About">
        <MobileHeader onClickMenuIcon={drawer.open} />
        <main>
          <VStack style={{ alignItems: 'center' }}>
            <Spacer size={40} />
            <PageTitle>About</PageTitle>
            <Spacer size={40} />
            now loading
            <Spacer size={80} />
          </VStack>
        </main>
        <MobileDrawerMenu
          isOpen={drawer.isOpen}
          close={drawer.close}
          footerLinks={footerLinks}
        />
      </Page>
    )
  }

  return (
    <Page title="About">
      <MobileHeader onClickMenuIcon={drawer.open} />
      <main>
        <VStack style={{ alignItems: 'center' }}>
          <Spacer size={40} />
          <Image
            src="/about/Logo.svg"
            alt="eyeCatch"
            style={{
              height: 270,
              border: 'none',
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
      <MobileDrawerMenu
        isOpen={drawer.isOpen}
        close={drawer.close}
        footerLinks={footerLinks}
      />
    </Page>
  )
}
