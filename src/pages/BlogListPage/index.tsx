import { useEffect, useState } from 'react'
import { getBlogInfoList } from '@/api/getBlogInfoList'
import { BlogInfo } from '@/models/BlogInfo'
import { useMobile } from '@/utils/hooks/useMobile'
import { BlogListPageMobile } from './BlogListPageMobile'
import { BlogListPagePC } from './BlogListPagePC'

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

const useBlogListPage = (): {
  data?: BlogInfo[]
  loading: boolean
} => {
  const [data, setData] = useState<BlogInfo[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const hoge = async (): Promise<void> => {
      setLoading(true)
      setData(await getBlogInfoList())
      setLoading(false)
    }

    hoge().catch((e) => console.log(e))
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
    return <BlogListPageMobile blogs={data} footerLinks={footerLinks} />
  }

  return <BlogListPagePC blogs={data} footerLinks={footerLinks} />
}
