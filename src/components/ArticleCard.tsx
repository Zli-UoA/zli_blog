import { ArticleInfo } from '@/models/ArticleInfo'
import { Image } from '@/utils/components/Image'
import { HStack, VStack } from '@/utils/components/Stack'
import { authorName, title } from './ArticleCard.css'

export const ArticleCard: React.FC<{
  article: ArticleInfo
}> = ({ article }) => {
  return (
    <section>
      <HStack style={{ gap: 16 }}>
        <Image
          src={'/articles/' + article.dirName + '/eyeCatch.png'}
          alt="eyeCatch"
          style={{
            height: 92,
            ratio: 'square',
            radius: 8,
          }}
        />
        <VStack style={{ gap: 8 }}>
          <h1 className={title}>{article.title}</h1>
          <HStack style={{ gap: 8 }}>
            <Image
              src={'/authors/' + article.authorId + '/icon.png'}
              alt="icon"
              style={{
                height: 20,
                ratio: 'square',
                radius: 'rounded',
              }}
            />
            <p className={authorName}>{article.authorId}</p>
          </HStack>
        </VStack>
      </HStack>
    </section>
  )
}
