import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAuthorById } from '@/api/getAuthorById'
import { getBlog } from '@/api/getBlog'
import { FooterLink } from '@/consts/footerLinks'
import { Author } from '@/models/Author'
import { Blog } from '@/models/Blog'
import { useMobile } from '@/utils/hooks/useMobile'
import { BlogPageMobile } from './BlogPageMobile'
import { BlogPagePC } from './BlogPagePC'

export type BlogPageProps = {
  blog: Blog | undefined
  author: Author | undefined
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
