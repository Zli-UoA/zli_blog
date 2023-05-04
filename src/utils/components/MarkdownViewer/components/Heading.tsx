import { h1, h2, h3, h4, h5, h6 } from './Heading.css'

export const H1: React.FC<{
  children: React.ReactNode & React.ReactNode[]
}> = ({ children }) => {
  return <h1 className={h1}>{children}</h1>
}

export const H2: React.FC<{
  children: React.ReactNode & React.ReactNode[]
}> = ({ children }) => {
  return <h2 className={h2}>{children}</h2>
}

export const H3: React.FC<{
  children: React.ReactNode & React.ReactNode[]
}> = ({ children }) => {
  return <h3 className={h3}>{children}</h3>
}

export const H4: React.FC<{
  children: React.ReactNode & React.ReactNode[]
}> = ({ children }) => {
  return <h4 className={h4}>{children}</h4>
}

export const H5: React.FC<{
  children: React.ReactNode & React.ReactNode[]
}> = ({ children }) => {
  return <h5 className={h5}>{children}</h5>
}

export const H6: React.FC<{
  children: React.ReactNode & React.ReactNode[]
}> = ({ children }) => {
  return <h6 className={h6}>{children}</h6>
}
