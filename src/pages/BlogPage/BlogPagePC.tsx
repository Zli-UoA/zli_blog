import { PCFooter } from '@/components/PCFooter'
import { PCHeader } from '@/components/PCHeader'
import { UserCard } from '@/components/UserCard'
import { Image } from '@/utils/components/Image'
import { MarkdownViewer } from '@/utils/components/MarkdownViewer'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { VStack } from '@/utils/components/Stack'
import { BlogPageProps } from '.'

export const BlogPagePC: React.FC<BlogPageProps> = ({ blog, author }) => {
  if (!blog || !author) {
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
        <Spacer size="grow" />
        <PCFooter />
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
              iconUrl: author.iconUrl,
              name: author.id,
              introduction: author.introduction,
            }}
          />
          <Spacer size={80} />
        </VStack>
      </main>
      <Spacer size="grow" />
      <PCFooter />
    </Page>
  )
}
