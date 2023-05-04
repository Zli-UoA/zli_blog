import { ArticleInfo } from '@/models/ArticleInfo'

export const getArticleInfoList = async (): Promise<ArticleInfo[]> => {
  const res = await fetch('/articles/list.json')
  const data = (await res.json()) as {
    articles: ArticleInfo[]
  }

  return data.articles
}
