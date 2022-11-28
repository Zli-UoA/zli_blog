import { useEffect, useState } from 'react'
import { Header } from '@/utils/components/Header'
import { Page } from '@/utils/components/Page'
import { Link } from 'react-router-dom'
import { Spacer } from '@/utils/components/Spacer'
import { Image } from '@/utils/components/Image'
import { HStack, VStack } from '@/utils/components/Stack'
import { UserCard } from '@/components/UserCard'
import { extractMetaData, removeMetaData } from '@/utils/lib/mdMetaData'
import { MarkdownViewer } from '@/utils/components/MdViewer'
import { PageTitle } from '@/utils/components/PageTitle'
import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { ReactComponent as MenuIcon } from '@/assets/Menu.svg'
import { useOpen } from '@/utils/hooks/useOpen'
import { MobileDrawerMenu } from '@/components/MobileDrawerMenu'

const footerLinks = [
  { label: 'Twitter', url: 'https://twitter.com/zliofficial?lang=en' },
  { label: 'Connpass', url: 'https://zli.connpass.com/' },
  { label: 'Qiita', url: 'https://qiita.com/organizations/zli' },
  { label: 'GitHub', url: 'https://github.com/zli-UoA' },
]

export const BlogPageMobile: React.FC = () => {
  const [article, setArticle] = useState('')
  const drawer = useOpen(false)

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
    <Page title={metaData.title ? metaData.title[0] : ''}>
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
      <MobileDrawerMenu
        isOpen={drawer.isOpen}
        close={drawer.close}
        footerLinks={footerLinks}
      />
    </Page>
  )
}
