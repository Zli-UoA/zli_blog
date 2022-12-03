import { getBlog } from '@/api/getBlog'
import { Blog } from '@/models/Blog'
import { useMobile } from '@/utils/hooks/useMobile'
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

export type Author = {
  id: string
  iconUrl: string
  introduction: string
}

export type BlogPageProps = {
  blog: Blog | undefined
  author: Author | undefined
  footerLinks: FooterLink[]
}

const useBlogPage = (): {
  data:
    | {
        blog: Blog
        author: Author
      }
    | undefined
  loading: boolean
} => {
  const [data, setData] = useState<{
    blog: Blog
    author: Author
  }>()
  const [loading, setLoading] = useState(false)
  const { blogName } = useParams()

  useEffect(() => {
    const hoge = async (): Promise<void> => {
      setLoading(true)
      const blog = await getBlog(blogName ?? '')
      setData({
        blog,
        author: {
          id: blog.authorId ? blog.authorId[0] : '',
          iconUrl:
            '/articles/' +
            (blog.authorId ? blog.authorId[0] : '') +
            '/eyeCatch.png',
          introduction: '',
        },
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
    return (
      <BlogPageMobile
        blog={data?.blog}
        author={data?.author}
        footerLinks={footerLinks}
      />
    )
  }

  return (
    <BlogPagePC
      blog={data?.blog}
      author={data?.author}
      footerLinks={footerLinks}
    />
  )
}
