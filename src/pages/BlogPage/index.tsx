import { useMobile } from '@/utils/hooks/useMobile'
import { BlogPageMobile } from './BlogPageMobile'
import { BlogPagePC } from './BlogPagePC'

export const BlogPage: React.FC = () => {
  const isMobile = useMobile()

  if (isMobile) {
    return <BlogPageMobile />
  }

  return <BlogPagePC />
}
