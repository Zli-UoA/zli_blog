import { BlogInfo } from '@/models/BlogInfo'
import { AdditionalInformation } from '@/utils/components/AdditionalInformation'
import { ExternalLink } from '@/utils/components/ExternalLink'
import { Footer } from '@/utils/components/Footer'
import { Header } from '@/utils/components/Header'
import { NavigationLink } from '@/utils/components/NavigationLink'
import { Page } from '@/utils/components/Page'
import { HStack, VStack } from '@/utils/components/Stack'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { Spacer } from '@/utils/components/Spacer'
import { PageTitle } from '@/utils/components/PageTitle'
import { ItemList } from '@/utils/components/ItemList'
import { BlogCard } from '@/components/BlogCard'
import { FooterLink } from '.'

export const BlogListPagePC: React.FC<{
  blogs: BlogInfo[] | undefined
  footerLinks: FooterLink[]
}> = ({ blogs, footerLinks }) => {
  return (
    <Page title="タイトル">
      <Header>
        <HStack
          style={{
            justifyContent: 'between',
            alignItems: 'center',
          }}
        >
          <Link to="/">
            <Logo />
          </Link>
          <nav>
            <HStack style={{ gap: 12, alignItems: 'center' }}>
              <NavigationLink to="/" active>
                Blog
              </NavigationLink>
              <NavigationLink to="/">Member</NavigationLink>
              <NavigationLink to="/">About</NavigationLink>
            </HStack>
          </nav>
        </HStack>
      </Header>
      <main>
        <VStack style={{ alignItems: 'center' }}>
          <Spacer size={32} />
          <PageTitle>Blog</PageTitle>
          <Spacer size={32} />
          <ItemList>
            {blogs?.map((blog, i) => {
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
      <Footer>
        <HStack style={{ justifyContent: 'between' }}>
          <VStack style={{ justifyContent: 'between' }}>
            <Logo />
            <AdditionalInformation>
              Copy right ©︎ 2022 Zli
            </AdditionalInformation>
          </VStack>
          <VStack style={{ justifyContent: 'between', gap: 8 }}>
            {footerLinks.map(({ label, url }, i) => (
              <ExternalLink to={url} key={i}>
                {label}
              </ExternalLink>
            ))}
          </VStack>
        </HStack>
      </Footer>
    </Page>
  )
}
