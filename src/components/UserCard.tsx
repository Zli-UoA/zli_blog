import { Image } from '@/utils/components/Image'
import { HStack, VStack } from '@/utils/components/Stack'
import { introduction, name } from './UserCard.css'

type User = {
  iconUrl: string
  name: string
  introduction: string
}

export const UserCard: React.FC<{
  user: User
}> = ({ user }) => {
  return (
    <section>
      <HStack style={{ gap: 16 }}>
        <Image
          src={user.iconUrl}
          alt="user"
          style={{
            height: 40,
            ratio: 'square',
            radius: 'rounded',
          }}
        />
        <VStack style={{ gap: 8 }}>
          <h1 className={name}>{user.name}</h1>
          <p className={introduction}>{user.introduction}</p>
        </VStack>
      </HStack>
    </section>
  )
}
