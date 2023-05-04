import { useEffect, useState } from 'react'
import { getAbout } from '@/api/getAbout'
import { useMobile } from '@/utils/hooks/useMobile'
import { AboutPageMobile } from './AboutPageMobile'
import { AboutPagePC } from './AboutPagePC'

export type AboutPageProps = {
  about: string | undefined
}

const useAboutPage = (): {
  about?: string
  loading: boolean
} => {
  const [about, setAbout] = useState<string>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetcher = async (): Promise<void> => {
      setLoading(true)
      setAbout(await getAbout())
      setLoading(false)
    }

    fetcher().catch((e) => console.log(e))
  }, [])

  return {
    about,
    loading,
  }
}

export const AboutPage: React.FC = () => {
  const isMobile = useMobile()

  const { about } = useAboutPage()

  if (isMobile) {
    return <AboutPageMobile about={about} />
  }

  return <AboutPagePC about={about} />
}
