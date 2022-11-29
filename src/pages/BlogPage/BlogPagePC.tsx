import { useEffect, useState } from 'react'
import { Footer } from '@/utils/components/Footer'
import { Header } from '@/utils/components/Header'
import { Page } from '@/utils/components/Page'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { Spacer } from '@/utils/components/Spacer'
import { Image } from '@/utils/components/Image'
import { HStack, VStack } from '@/utils/components/Stack'
import { UserCard } from '@/components/UserCard'
import { extractMetaData, removeMetaData } from '@/utils/lib/mdMetaData'
import { MarkdownViewer } from '@/utils/components/MdViewer'
import { PageTitle } from '@/utils/components/PageTitle'
import { ExternalLink } from '@/utils/components/ExternalLink'
import { AdditionalInformation } from '@/utils/components/AdditionalInformation'
import { NavigationLink } from '@/utils/components/NavigationLink'

const footerLinks = [
  { label: 'Twitter', url: 'https://twitter.com/zliofficial' },
  { label: 'Connpass', url: 'https://zli.connpass.com/' },
  { label: 'Qiita', url: 'https://qiita.com/organizations/zli' },
  { label: 'GitHub', url: 'https://github.com/zli-UoA' },
]

export const BlogPagePC: React.FC = () => {
  const [article, setArticle] = useState('')

  useEffect(() => {
    fetch('/articles/mock/index.md')
      .then((res) => res.text())
      .then((data) => setArticle(data))
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const metaData = extractMetaData<{
    title: [string]
    tags: string[]
    authorId: [string]
  }>(article)

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
          <Spacer size={40} />
          <Image
            src="/articles/mock/eyeCatch.png"
            alt="eyeCatch"
            style={{
              height: 270,
              ratio: 'screen',
              radius: 8,
            }}
          />
          <Spacer size={32} />
          <PageTitle>{metaData.title ? metaData.title[0] : ''}</PageTitle>
          <Spacer size={56} />
          <article>
            <MarkdownViewer mdText={removeMetaData(article)} />
          </article>
          <Spacer size={64} />
          <UserCard
            user={{
              iconUrl: '/articles/mock/eyeCatch.png',
              name: metaData.authorId ? metaData.authorId[0] : '',
              introduction:
                '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
            }}
          />
          <Spacer size={80} />
        </VStack>
      </main>
      <Footer>
        <HStack style={{ justifyContent: 'between' }}>
          <VStack style={{ justifyContent: 'between' }}>
            <Logo />
            <AdditionalInformation>
              Copy right ©︎ 2020 Zli
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
