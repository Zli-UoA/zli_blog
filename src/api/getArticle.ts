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
