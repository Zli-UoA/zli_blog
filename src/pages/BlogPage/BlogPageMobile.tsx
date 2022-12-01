import { Page } from '@/utils/components/Page'
import { Spacer } from '@/utils/components/Spacer'
import { Image } from '@/utils/components/Image'
import { VStack } from '@/utils/components/Stack'
import { UserCard } from '@/components/UserCard'
import { MarkdownViewer } from '@/utils/components/MdViewer'
import { PageTitle } from '@/utils/components/PageTitle'
import { useOpen } from '@/utils/hooks/useOpen'
import { MobileDrawerMenu } from '@/components/MobileDrawerMenu'
import { Blog, FooterLink } from '.'
import { MobileHeader } from '@/components/MobileHeader'

export const BlogPageMobile: React.FC<{
  blog: Blog | undefined
  footerLinks: FooterLink[]
}> = ({ blog, footerLinks }) => {
  const drawer = useOpen()

  if (!blog) {
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
              iconUrl: '/articles/mock/eyeCatch.png',
              name: blog.author.id,
              introduction:
                '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
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
