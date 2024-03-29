import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAuthorById } from '@/api/getAuthorById'
import { getBlog } from '@/api/getBlog'
import { Author } from '@/models/Author'
import { Blog } from '@/models/Blog'
import { useMobile } from '@/utils/hooks/useMobile'
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

export type BlogPageProps = {
  blog: Blog | undefined
  author: Author | undefined
  footerLinks: FooterLink[]
}

const useBlogPage = (): {
  blog: Blog | undefined
  author: Author | undefined
  loading: boolean
} => {
  const [blog, setBlog] = useState<Blog>()
  const [author, setAuthor] = useState<Author>()
  const [loading, setLoading] = useState(false)
  const { blogName } = useParams()

  useEffect(() => {
    const fetcher = async (blogName: string): Promise<void> => {
      setLoading(true)
      setBlog(await getBlog(blogName))
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
    blog: blog,
    author: author,
    loading,
  }
}

export const BlogPage: React.FC = () => {
  const isMobile = useMobile()

  const { blog, author } = useBlogPage()

  if (isMobile) {
    return (
      <BlogPageMobile blog={blog} author={author} footerLinks={footerLinks} />
    )
  }

  return <BlogPagePC blog={blog} author={author} footerLinks={footerLinks} />
}
