import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { ReactComponent as MenuIcon } from '@/assets/Menu.svg'
import { BlogCard } from '@/components/BlogCard'
import { MobileDrawerMenu } from '@/components/MobileDrawerMenu'
import { BlogInfo } from '@/models/BlogInfo'
import { Header } from '@/utils/components/Header'
import { ItemList } from '@/utils/components/ItemList'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { HStack, VStack } from '@/utils/components/Stack'
import { useOpen } from '@/utils/hooks/useOpen'
import { FooterLink } from '.'

export const BlogListPageMobile: React.FC<{
  blogs: BlogInfo[] | undefined
  footerLinks: FooterLink[]
}> = ({ blogs, footerLinks }) => {
  const drawer = useOpen(false)

  return (
    <Page title="Blog">
      <Header>
        <HStack
          style={{
            alignItems: 'center',
            gap: 12,
          }}
        >
          <button onClick={drawer.open}>
            <MenuIcon />
          </button>
          <Link to="/">
            <Logo />
          </Link>
        </HStack>
      </Header>
      <main>
        <VStack style={{ alignItems: 'center' }}>
          <Spacer size={40} />
          <PageTitle>Blog</PageTitle>
          <Spacer size={40} />
          <ItemList>
            {blogs?.map((blog, i) => {
              return <BlogCard blog={blog} key={i} />
            })}
          </ItemList>
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
