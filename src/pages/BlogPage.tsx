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

export const BlogPage: React.FC = () => {
  const [article, setArticle] = useState('')

  useEffect(() => {
    fetch('/src/assets/articles/mock/index.md')
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
          <HStack style={{ gap: 12, alignItems: 'center' }}>
            <Link to="">Blog</Link>
            <Link to="">Member</Link>
            <Link to="">About</Link>
          </HStack>
        </HStack>
      </Header>
      <main>
        <VStack style={{ alignItems: 'center' }}>
          <Spacer size={40} />
          <Image
            src="/src/assets/articles/mock/eyeCatch.png"
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
              iconUrl: '/src/assets/articles/mock/eyeCatch.png',
              name: metaData.authorId ? metaData.authorId[0] : '',
              introduction:
                '自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介',
            }}
          />
          <Spacer size={80} />
        </VStack>
      </main>
      <Footer>ふったー</Footer>
    </Page>
  )
}
