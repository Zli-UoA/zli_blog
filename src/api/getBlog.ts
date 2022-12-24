import { Blog } from '@/models/Blog'
import { getMarkdownBody, getMarkdownMetaData } from '@/utils/lib/markdown'

export const getBlog = async (blogName: string): Promise<Blog> => {
  const res = await fetch('/articles/' + blogName + '/index.md')
  return createBlog(blogName, await res.text())
}

const createBlog = (blogName: string, md: string): Blog => {
  const metaData = getMarkdownMetaData<{
    authorId: [string]
    title: [string]
    tags: string[]
  }>(md)

  return {
    authorId: metaData.authorId ? metaData.authorId[0] : '',
    title: metaData.title ? metaData.title[0] : '',
    tags: metaData.tags ? metaData.tags : [],
    eyeCatchUrl: '/articles/' + blogName + '/eyeCatch.png',
    mdText: getMarkdownBody(md),
  }
}
