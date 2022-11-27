import { Image } from '@/utils/components/Image'
import { HStack, VStack } from '@/utils/components/Stack'

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
        <VStack style={{ gap: 10 }}>
          <h1>{user.name}</h1>
          <p>{user.introduction}</p>
        </VStack>
      </HStack>
    </section>
  )
}
