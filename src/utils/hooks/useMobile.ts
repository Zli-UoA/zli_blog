import { useMediaQuery } from 'usehooks-ts'

export const useMobile = (): boolean => {
  return useMediaQuery('(max-width: 600px)')
}
