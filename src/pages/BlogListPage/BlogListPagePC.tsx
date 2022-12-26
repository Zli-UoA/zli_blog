import { Link } from 'react-router-dom'
import { ArticleCard } from '@/components/BlogCard'
import { PCFooter } from '@/components/PCFooter'
import { PCHeader } from '@/components/PCHeader'
import { ItemList } from '@/utils/components/ItemList'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { VStack } from '@/utils/components/Stack'
import { BlogListPageProps } from '.'

export const BlogListPagePC: React.FC<BlogListPageProps> = ({ articles }) => {
  if (!articles) {
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
            {articles.map((article, i) => {
              return (
                <Link to={article.dirName} key={i}>
                  <ArticleCard article={article} />
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
