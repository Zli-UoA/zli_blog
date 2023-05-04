import { Author } from '@/models/Author'
import { getMarkdownBody } from '@/utils/lib/markdown'

export const getAuthorById = async (authorId: string): Promise<Author> => {
  const res = await fetch('/authors/' + authorId + '/index.md')
  return createAuthor(authorId, await res.text())
}

const createAuthor = (authorId: string, md: string): Author => {
  return {
    id: authorId,
    iconUrl: '/authors/' + authorId + '/icon.png',
    introduction: getMarkdownBody(md),
  }
}
