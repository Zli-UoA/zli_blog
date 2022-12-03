import { Author } from '@/models/Author'
import { removeMetaData } from '@/utils/lib/mdMetaData'

export const getAuthorById = async (authorId: string): Promise<Author> => {
  const res = await fetch('/authors/' + authorId + '/index.md')
  const mdData = await res.text()

  return {
    id: authorId,
    iconUrl: '/authors/' + authorId + '/icon.png',
    introduction: removeMetaData(mdData),
  }
}
