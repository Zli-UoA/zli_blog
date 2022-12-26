import { useEffect, useState } from 'react'
import { getBlogInfoList } from '@/api/getBlogInfoList'
import { BlogInfo } from '@/models/BlogInfo'
import { useMobile } from '@/utils/hooks/useMobile'
import { BlogListPageMobile } from './BlogListPageMobile'
import { BlogListPagePC } from './BlogListPagePC'

export type BlogListPageProps = {
  blogs: BlogInfo[] | undefined
}

const useBlogListPage = (): {
  data?: BlogInfo[]
  loading: boolean
} => {
  const [data, setData] = useState<BlogInfo[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetcher = async (): Promise<void> => {
      setLoading(true)
      setData(await getBlogInfoList())
      setLoading(false)
    }

    fetcher().catch((e) => console.log(e))
  }, [])

  return {
    data,
    loading,
  }
}

export const BlogListPage: React.FC = () => {
  const isMobile = useMobile()

  const { data } = useBlogListPage()

  if (isMobile) {
    return <BlogListPageMobile blogs={data} />
  }

  return <BlogListPagePC blogs={data} />
}
