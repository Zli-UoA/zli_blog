import { useEffect, useState } from 'react'
import { getBlogInfoList } from '@/api/getBlogInfoList'
import { ArticleInfo } from '@/models/ArticleInfo'
import { useMobile } from '@/utils/hooks/useMobile'
import { BlogListPageMobile } from './BlogListPageMobile'
import { BlogListPagePC } from './BlogListPagePC'

export type BlogListPageProps = {
  articles: ArticleInfo[] | undefined
}

const useBlogListPage = (): {
  data?: ArticleInfo[]
  loading: boolean
} => {
  const [data, setData] = useState<ArticleInfo[]>()
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
    return <BlogListPageMobile articles={data} />
  }

  return <BlogListPagePC articles={data} />
}
