import { BlogCard } from '@/components/BlogCard'
import { MobileDrawerMenu } from '@/components/MobileDrawerMenu'
import { MobileHeader } from '@/components/MobileHeader'
import { ItemList } from '@/utils/components/ItemList'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { VStack } from '@/utils/components/Stack'
import { useOpen } from '@/utils/hooks/useOpen'
import { BlogListPageProps } from '.'

export const BlogListPageMobile: React.FC<BlogListPageProps> = ({
  articles,
}) => {
  const drawer = useOpen(false)

  if (!articles) {
    return (
      <Page title="Blog">
        <MobileHeader onClickMenuIcon={drawer.open} />
        <main>
          <VStack style={{ alignItems: 'center' }}>
            <Spacer size={40} />
            <PageTitle>Blog</PageTitle>
            <Spacer size={40} />
            now loading
            <Spacer size={80} />
          </VStack>
        </main>
        <MobileDrawerMenu isOpen={drawer.isOpen} close={drawer.close} />
      </Page>
    )
  }

  return (
    <Page title="Blog">
      <MobileHeader onClickMenuIcon={drawer.open} />
      <main>
        <VStack style={{ alignItems: 'center' }}>
          <Spacer size={40} />
          <PageTitle>Blog</PageTitle>
          <Spacer size={40} />
          <ItemList>
            {articles.map((article, i) => {
              return <BlogCard article={article} key={i} />
            })}
          </ItemList>
          <Spacer size={80} />
        </VStack>
      </main>
      <MobileDrawerMenu isOpen={drawer.isOpen} close={drawer.close} />
    </Page>
  )
}
