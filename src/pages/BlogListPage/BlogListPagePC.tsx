import { BlogCard } from '@/components/BlogCard'
import { PCFooter } from '@/components/PCFooter'
import { PCHeader } from '@/components/PCHeader'
import { BlogInfo } from '@/models/BlogInfo'
import { ItemList } from '@/utils/components/ItemList'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { VStack } from '@/utils/components/Stack'
import { Link } from 'react-router-dom'
import { FooterLink } from '.'

export const BlogListPagePC: React.FC<{
  blogs: BlogInfo[] | undefined
  footerLinks: FooterLink[]
}> = ({ blogs, footerLinks }) => {
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
        <PCFooter footerLinks={footerLinks} />
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
      <PCFooter footerLinks={footerLinks} />
    </Page>
  )
}
