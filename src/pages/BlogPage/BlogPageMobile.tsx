import { Page } from '@/utils/components/Page'
import { Spacer } from '@/utils/components/Spacer'
import { Image } from '@/utils/components/Image'
import { VStack } from '@/utils/components/Stack'
import { UserCard } from '@/components/UserCard'
import { MarkdownViewer } from '@/utils/components/MdViewer'
import { PageTitle } from '@/utils/components/PageTitle'
import { useOpen } from '@/utils/hooks/useOpen'
import { MobileDrawerMenu } from '@/components/MobileDrawerMenu'
import { BlogPageProps } from '.'
import { MobileHeader } from '@/components/MobileHeader'

export const BlogPageMobile: React.FC<BlogPageProps> = ({
  blog,
  author,
  footerLinks,
}) => {
  const drawer = useOpen()

  if (!blog || !author) {
    return (
      <Page title="Blog">
        <MobileHeader onClickMenuIcon={drawer.open} />
        <main>
          <VStack style={{ alignItems: 'center' }}>
            <Spacer size={40} />
            now loading
            <Spacer size={56} />
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
    <Page title={blog.title}>
      <MobileHeader onClickMenuIcon={drawer.open} />
      <main>
        <VStack style={{ alignItems: 'center' }}>
          <Spacer size={40} />
          <Image
            src={blog.eyeCatchUrl}
            alt="eyeCatch"
            style={{
              height: 270,
              ratio: 'screen',
              radius: 8,
            }}
          />
          <Spacer size={32} />
          <PageTitle>{blog.title}</PageTitle>
          <Spacer size={56} />
          <article>
            <MarkdownViewer mdText={blog.mdText} />
          </article>
          <Spacer size={64} />
          <UserCard
            user={{
              iconUrl: author.iconUrl,
              name: author.id,
              introduction: author.introduction,
            }}
          />
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
