import { getBlog } from '@/api/getBlog'
import { useMobile } from '@/utils/hooks/useMobile'
import { extractMetaData, removeMetaData } from '@/utils/lib/mdMetaData'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogPageMobile } from './BlogPageMobile'
import { BlogPagePC } from './BlogPagePC'

export type FooterLink = {
  url: string
  label: string
}

const footerLinks = [
  { label: 'Twitter', url: 'https://twitter.com/zliofficial' },
  { label: 'Connpass', url: 'https://zli.connpass.com/' },
  { label: 'Qiita', url: 'https://qiita.com/organizations/zli' },
  { label: 'GitHub', url: 'https://github.com/zli-UoA' },
]

export type Blog = {
  mdText: string
  title: string
  eyeCatchUrl: string
  author: {
    id: string
    iconUrl: string
  }
  tags: string[]
}

const useBlogPage = (): {
  data: Blog | undefined
  loading: boolean
} => {
  const [data, setData] = useState<Blog>()
  const [loading, setLoading] = useState(false)
  const { blogName } = useParams()

  useEffect(() => {
    const hoge = async (): Promise<void> => {
      setLoading(true)
      const data = await getBlog(blogName ?? '')
      const metaData = extractMetaData<{
        title: [string]
        authorId: [string]
        tags: string[]
      }>(data)
      setData({
        mdText: removeMetaData(data),
        title: metaData.title ? metaData.title[0] : '',
        eyeCatchUrl: '/articles/' + (blogName ?? '') + '/eyeCatch.png',
        author: {
          id: metaData.authorId ? metaData.authorId[0] : '',
          iconUrl:
            '/articles/' +
            (metaData.authorId ? metaData.authorId[0] : '') +
            '/eyeCatch.png',
        },
        tags: metaData.tags ? metaData.tags : [],
      })
      setLoading(false)
    }

    hoge().catch((e) => console.log(e))
  }, [blogName])

  return {
    data,
    loading,
  }
}

export const BlogPage: React.FC = () => {
  const isMobile = useMobile()

  const { data } = useBlogPage()

  if (isMobile) {
    return <BlogPageMobile blog={data} footerLinks={footerLinks} />
  }

  return <BlogPagePC blog={data} footerLinks={footerLinks} />
}
