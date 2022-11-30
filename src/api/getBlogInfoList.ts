import { BlogInfo } from '@/models/BlogInfo'

export const getBlogInfoList = async (): Promise<BlogInfo[]> => {
  const res = await fetch('/articles/list.json')
  const data = (await res.json()) as {
    articles: BlogInfo[]
  }

  return data.articles
}
