import { Page } from '@/utils/components/Page'
import { Spacer } from '@/utils/components/Spacer'
import { Image } from '@/utils/components/Image'
import { VStack } from '@/utils/components/Stack'
import { UserCard } from '@/components/UserCard'
import { MarkdownViewer } from '@/utils/components/MdViewer'
import { PageTitle } from '@/utils/components/PageTitle'
import { Blog, FooterLink } from '.'
import { PCHeader } from '@/components/PCHeader'
import { PCFooter } from '@/components/PCFooter'

export const BlogPagePC: React.FC<{
  blog: Blog | undefined
  footerLinks: FooterLink[]
}> = ({ blog, footerLinks }) => {
  if (!blog) {
    return (
      <Page title="Blog">
        <PCHeader />
        <main>
          <VStack style={{ alignItems: 'center' }}>
            <Spacer size={40} />
            now loading
            <Spacer size={56} />
          </VStack>
        </main>
        <PCFooter footerLinks={footerLinks} />
      </Page>
    )
  }

  return (
    <Page title={blog.title}>
      <PCHeader />
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
              iconUrl: blog.author.iconUrl,
              name: blog.author.id,
              introduction:
                '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
            }}
          />
          <Spacer size={80} />
        </VStack>
      </main>
      <PCFooter footerLinks={footerLinks} />
    </Page>
  )
}
