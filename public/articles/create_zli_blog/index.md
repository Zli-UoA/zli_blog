---
title: Zliのブログを作った話
authorId: eraser5th
tags: Webフロント React
---

この記事は[Aizu Advent Calender 2022](https://adventar.org/calendars/7651) 7日目の記事です(投稿日が合わない？勘のいいry)。

https://adventar.org/calendars/7651

## はじめに

初めまして、会津大学Zliサークル所属の[eraser5th](https://github.com/eraser5th)と申します。今回は[Zliのブログ](https://zli-blog.pages.dev/blog)を作ったのでそのお話をしたいと思います。

内容としては、サークルのブログを作った話といいつつも、今回のディレクトリ構成とそれぞれの解説を行います。もし参考になれば幸いです。

https://twitter.com/eraser5th

https://github.com/eraser5th

https://zli-blog.pages.dev/blog

## 経緯

時は11月半ば。

部長 「ブログ内政したくね？」  
部員・Me 「したいね」  
部長 「やるか」  
Me （まぁ気長にやるか）  
部長 「来月アドカレあるし、なるはやで作って記事載せたいね」  
Me 「え”っ」  

## 📗 ライブラリ構成

基本はReact+Typescriptで、ビルドにはViteを使用しています。CSSにはVanilla-extractというゼロランタイムなCSS-in-JSライブラリを、ルーティングには無難にReact Routerを使用。また、リンターとフォーマッターにはそれぞれESLint、Prettierを使用しています。その他の細かいものに関してはここでは割愛しますが、後々出てきた時に追加で説明するかもしれません。

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Vanilla-extract](https://vanilla-extract.style/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 📁 ディレクトリ構成

本プロジェクトのディレクトリ構成は以下のとおり。

```
/
 public/
 │ about/          # Aboutページの内容を置いとく
 │ articles/       # 記事を置いとく
 └ authors/        # 筆者を置いとく
 src/
 │ api/            # apiを定義
 │ assets/         # ロゴやメニューのアイコンなどの置き場
 │ components/     # 特定の場面で使うコンポーネント
 │ models/         # ページ側で扱うデータの型を定義
 │ pages/          # ページ
 │ utils/          # 汎用的な
 │ │ components/     # コンポーネント
 │ │ hooks/          # フック
 │ │ lib/            # 関数
 │ └ style/          # CSSのスタイル
 │ Router.tsx      # ページのルーティングを定義
 │ index.css.ts    # グローバルなスタイリングを定義
 └ main.tsx        # エントリーポイント
```

## 💬 src 以下の解説

### src/models

BlogやAuthorなどといった、データの型を定義しています。APIで取得したデータはこの形式になるよう（必要であれば）加工します。

```typescript
export type Article = {
  authorId: string
  title: string
  eyeCatchUrl: string
  mdText: string
  tags: string[]
}
```

### src/utils

汎用的なものを配置しています。ここでの汎用的の基準は以下のような感じにしています。

- modelsを参照しない
- ビジネスロジックに関心がない
- コンポーネントの場合、ページとして完成する際の文書構造に関心がない。

とくに最後のものについて説明を入れると、例としてまずこのプロジェクトには`Footer`と`PCFooter`が存在しています。前者は`utils`に含まれ、後者は含まれません。前者は`children`に受け取った要素を`footer`タグで囲み、然るべきスタイリングをしたものを返すものです。対して後者は、`Footer`を使って実際にPC画面に映すフッターの内容を記述したものになっています。

```typescript
import { footer, footerInner } from './Footer.css'

export const Footer: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <footer className={footer}>
      <div className={footerInner}>{children}</div>
    </footer>
  )
}
```

```typescript
import { ReactComponent as Logo } from '@/assets/Logo.svg'
import { footerLinks } from '@/consts/footerLinks'
import { AdditionalInformation } from '@/utils/components/AdditionalInformation'
import { ExternalLink } from '@/utils/components/ExternalLink'
import { Footer } from '@/utils/components/Footer'
import { HStack, VStack } from '@/utils/components/Stack'

export const PCFooter: React.FC = () => {
  return (
    <Footer>
      <HStack style={{ justifyContent: 'between' }}>
        <VStack style={{ justifyContent: 'between' }}>
          <Logo />
          <AdditionalInformation>Copy right ©︎ 2022 Zli</AdditionalInformation>
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
  )
}
```

#### src/utils/lib

ここに配置するのは単純なTypeScriptの関数です。

```typescript
export const getMarkdownMetaData = <T extends Record<string, string[]>>(
  text: string
): Partial<T> => {
  const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m)

  const rawMetaData = metaRegExp.exec(text)

  if (!rawMetaData) {
    return {}
  }

  return rawMetaData[1]
    .split('\n')
    .map((keyValue) => {
      const [key, value] = keyValue.split(':')

      return {
        [key]: value.trim().split(' '),
      }
    })
    .reduce((a, b) => ({ ...a, ...b })) as Partial<T>
}

export const getMarkdownBody = (text: string): string => {
  const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m)
  return text.replace(metaRegExp, '')
}
```

#### src/utils/components

ここにはユースケースに縛られないようなコンポーネントを配置しています。例としてはPage、Stack、Spacer、Header、Footer、Drawerなどなど、です。逆に汎用的でない例としては、後々出てくる、UserCardなどが挙げられます。

```typescript
import { Helmet } from 'react-helmet-async'
import { page, pageInner } from './Page.css'

export const Page: React.FC<{
  children: React.ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <div className={page}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={pageInner}>{children}</div>
    </div>
  )
}
```

```typescript
import { style } from '@vanilla-extract/css'

export const page = style({
  padding: '0 16px',
  minHeight: '100vh',
})

export const pageInner = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  maxWidth: '930px',
  margin: 'auto',
})
```

#### src/utils/hooks

以下はビューのサイズがモバイルかどうかを取得する`hooks`。

```typescript
import { useMediaQuery } from 'usehooks-ts'

export const useMobile = (): boolean => {
  return useMediaQuery('(max-width: 600px)')
}
```

ここで使用している`usehooks-ts`は、いろいろな便利`hooks`を提供してくれるライブラリです。ここでは、`useMediaQuery`という`media query`を扱える`hooks`を使い、ブラウザのビューサイズがモバイルサイズかどうかを判定する`hooks`を作成しています。

https://github.com/juliencrn/usehooks-ts

#### src/utils/style

色などの定数や、テキストサイズなど、ある程度デザイン側で決まっているものを作っておきます。

#### src/utils/api

ブログ記事や筆者の情報などを取得する関数を配置しています。現在、記事のメタ情報や筆者の情報はフロントに置いておりバックエンドが存在しません。しかし、これからバックエンド担当の手が開き次第移行するはずなので、その時のためにもAPI処理を切り出しています。これによりページ側ではデータの取得元を意識することはなく使うことができています。

```typescript
import { Article } from '@/models/Article'
import { getMarkdownBody, getMarkdownMetaData } from '@/utils/lib/markdown'

export const getArticle = async (articleName: string): Promise<Article> => {
  const res = await fetch('/articles/' + articleName + '/index.md')
  return createArticle(articleName, await res.text())
}

const createArticle = (articleName: string, md: string): Article => {
  const metaData = getMarkdownMetaData<{
    authorId: [string]
    title: [string]
    tags: string[]
  }>(md)

  return {
    authorId: metaData.authorId ? metaData.authorId[0] : '',
    title: metaData.title ? metaData.title[0] : '',
    tags: metaData.tags ? metaData.tags : [],
    eyeCatchUrl: '/articles/' + articleName + '/eyeCatch.png',
    mdText: getMarkdownBody(md),
  }
}
```

### src/components

特定の場面で使われる（汎用とは呼べなかった）コンポーネントを配置しています。先ほど`src/utils/components`で解説した`PCFooter`もここに含まれます。

```typescript
import { ArticleInfo } from '@/models/ArticleInfo'
import { Image } from '@/utils/components/Image'
import { HStack, VStack } from '@/utils/components/Stack'
import { authorName, title } from './ArticleCard.css'

export const ArticleCard: React.FC<{
  article: ArticleInfo
}> = ({ article }) => {
  return (
    <section>
      <HStack style={{ gap: 16 }}>
        <Image
          src={'/articles/' + article.dirName + '/eyeCatch.png'}
          alt="eyeCatch"
          style={{
            height: 92,
            ratio: 'square',
            radius: 8,
          }}
        />
        <VStack style={{ gap: 8 }}>
          <h1 className={title}>{article.title}</h1>
          <HStack style={{ gap: 8 }}>
            <Image
              src={'/authors/' + article.authorId + '/icon.png'}
              alt="icon"
              style={{
                height: 20,
                ratio: 'square',
                radius: 'rounded',
              }}
            />
            <p className={authorName}>{article.authorId}</p>
          </HStack>
        </VStack>
      </HStack>
    </section>
  )
}
```

```typescript
import { style } from '@vanilla-extract/css'
import { fontSize, fontWeight, lineHeight } from '@/utils/style/text.css'

export const title = style([fontSize.px16, fontWeight.bold, lineHeight.per175])

export const authorName = style([
  fontSize.px14,
  fontWeight.normal,
  lineHeight.per150,
])
```

### src/pages

ページを定義します。先ほど`src/utils/hooks`で紹介した`useMobile`を用いてPC版の表示とMobile版の表示を切り替えています。そのため`pages`の中は以下のような形のディレクトリになっています。

```sh
src/pages/
 {PageName}/
  │ index.tsx
  │ {PageName}PC.tsx
  └ {PageName}Mobile.tsx
```

それぞれの実装は以下のような形です(記事を見るページであるBlogPageを例にします)。

```typescript
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from '@/api/getArticle'
import { getAuthorById } from '@/api/getAuthorById'
import { Article } from '@/models/Article'
import { Author } from '@/models/Author'
import { useMobile } from '@/utils/hooks/useMobile'
import { BlogPageMobile } from './BlogPageMobile'
import { BlogPagePC } from './BlogPagePC'

export type BlogPageProps = {
  blog: Article | undefined
  author: Author | undefined
}

const useBlogPage = (): {
  blog: Article | undefined
  author: Author | undefined
  loading: boolean
} => {
  const [blog, setBlog] = useState<Article>()
  const [author, setAuthor] = useState<Author>()
  const [loading, setLoading] = useState(false)
  const { blogName } = useParams()

  useEffect(() => {
    const fetcher = async (blogName: string): Promise<void> => {
      setLoading(true)
      setBlog(await getArticle(blogName))
      setLoading(false)
    }

    if (blogName) {
      fetcher(blogName).catch((e) => console.log(e))
    }
  }, [blogName])

  useEffect(() => {
    const fetcher = async (authorId: string): Promise<void> => {
      setLoading(true)
      setAuthor(await getAuthorById(authorId))
      setLoading(false)
    }

    if (blog) {
      fetcher(blog.authorId).catch((e) => console.log(e))
    }
  }, [blog])

  return {
    blog,
    author,
    loading,
  }
}

export const BlogPage: React.FC = () => {
  const isMobile = useMobile()

  const { blog, author } = useBlogPage()

  if (isMobile) {
    return <BlogPageMobile blog={blog} author={author} />
  }

  return <BlogPagePC blog={blog} author={author} />
}
```

```typescript
import { MobileDrawerMenu } from '@/components/MobileDrawerMenu'
import { MobileHeader } from '@/components/MobileHeader'
import { UserCard } from '@/components/UserCard'
import { Image } from '@/utils/components/Image'
import { MarkdownViewer } from '@/utils/components/MarkdownViewer'
import { Page } from '@/utils/components/Page'
import { PageTitle } from '@/utils/components/PageTitle'
import { Spacer } from '@/utils/components/Spacer'
import { VStack } from '@/utils/components/Stack'
import { useOpen } from '@/utils/hooks/useOpen'
import { BlogPageProps } from '.'

export const BlogPageMobile: React.FC<BlogPageProps> = ({ blog, author }) => {
  const drawer = useOpen()

  if (!blog || !author) {
    return (
      <Page title="Blog">
        <MobileHeader onClickMenuIcon={drawer.open} />
        <main>
          <VStack style={{ alignItems: 'center' }}>
            <Spacer size={40} />
            now loading
            <Spacer size={56} />
          </VStack>
        </main>
        <MobileDrawerMenu isOpen={drawer.isOpen} close={drawer.close} />
      </Page>
    )
  }

  return (
    <Page title={blog.title}>
      <MobileHeader onClickMenuIcon={drawer.open} />
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
      <MobileDrawerMenu isOpen={drawer.isOpen} close={drawer.close} />
    </Page>
  )
}
```

`BlogPagePC`については`BlogPageMobile`のPC版なだけ（ドロワーメニューがなくなり内容がヘッダーに移動するなど）なので割愛。

以上、src以下の解説終了。

## おわりに

果たしてブログ自体は完成し、あとはZliのドメインに紐づけてホームページをリプレイスするだけになりました。

というところで今回の内容はおわります、最後まで読んでいただきありがとうございました！
