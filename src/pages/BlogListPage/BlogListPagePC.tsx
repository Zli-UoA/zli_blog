import { Link } from 'react-router-dom'
import { BlogCard } from '@/components/BlogCard'
import { PCFooter } from '@/components/PCFooter'
import { PCHeader } from '@/components/PCHeader'
import { ItemList } from '@/utils/components/ItemList'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { VStack } from '@/utils/components/Stack'
import { BlogListPageProps } from '.'

export const BlogListPagePC: React.FC<BlogListPageProps> = ({ blogs }) => {
  if (!blogs) {
    return (
      <Page title="Blog">
        <PCHeader />
        <main>
          <VStack style={{ alignItems: 'center' }}>
            <Spacer size={32} />
            <PageTitle>Blog</PageTitle>
            <Spacer size={32} />
            now loading
            <Spacer size={80} />
          </VStack>
        </main>
        <Spacer size="grow" />
        <PCFooter />
      </Page>
    )
  }

  return (
    <Page title="Blog">
      <PCHeader />
      <main>
        <VStack style={{ alignItems: 'center' }}>
          <Spacer size={32} />
          <PageTitle>Blog</PageTitle>
          <Spacer size={32} />
          <ItemList>
            {blogs.map((blog, i) => {
              return (
                <Link to={blog.dirName} key={i}>
                  <BlogCard blog={blog} />
                </Link>
              )
            })}
          </ItemList>
          <Spacer size={80} />
        </VStack>
      </main>
      <Spacer size="grow" />
      <PCFooter />
    </Page>
  )
}
