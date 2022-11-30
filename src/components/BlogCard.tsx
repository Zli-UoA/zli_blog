import { BlogInfo } from '@/models/BlogInfo'
import { Image } from '@/utils/components/Image'
import { HStack, VStack } from '@/utils/components/Stack'
import { authorName, title } from './BlogCard.css'

export const BlogCard: React.FC<{
  blog: BlogInfo
}> = ({ blog }) => {
  return (
    <section>
      <HStack style={{ gap: 16 }}>
        <Image
          src={'/articles/' + blog.dirName + '/eyeCatch.png'}
          alt="eyeCatch"
          style={{
            height: 92,
            ratio: 'square',
            radius: 8,
          }}
        />
        <VStack style={{ gap: 8 }}>
          <h1 className={title}>{blog.title}</h1>
          <HStack style={{ gap: 8 }}>
            <Image
              src={'/authors/' + blog.authorId + '/icon.png'}
              alt="icon"
              style={{
                height: 20,
                ratio: 'square',
                radius: 'rounded',
              }}
            />
            <p className={authorName}>{blog.authorId}</p>
          </HStack>
        </VStack>
      </HStack>
    </section>
  )
}
