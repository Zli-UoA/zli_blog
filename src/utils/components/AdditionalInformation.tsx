import { additionalInformation } from './AdditionalInformation.css'

export const AdditionalInformation: React.FC<{
  children: string
}> = ({ children }) => {
  return <p className={additionalInformation}>{children}</p>
}
