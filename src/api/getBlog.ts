import { Blog } from '@/models/Blog'
import { extractMetaData, removeMetaData } from '@/utils/lib/mdMetaData'

export const getBlog = async (blogName: string): Promise<Blog> => {
  const res = await fetch('/articles/' + blogName + '/index.md')
  const data = await res.text()

  const metaData = extractMetaData<{
    authorId: [string]
    title: [string]
    tags: string[]
  }>(data)

  return {
    authorId: metaData.authorId ? metaData.authorId[0] : '',
    title: metaData.title ? metaData.title[0] : '',
    tags: metaData.tags ? metaData.tags : [],
    eyeCatchUrl: '/articles/' + blogName + '/eyeCatch.png',
    mdText: removeMetaData(data),
  }
}
