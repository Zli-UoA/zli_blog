import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { drawer, outer, underlay } from './Drawer.css'

export const Drawer: React.FC<{
  children: React.ReactNode
  isOpen: boolean
  close: () => void
}> = ({ children, isOpen, close }) => {
  const ref = useRef(null)

  useOnClickOutside(ref, (): void => {
    close()
  })

  if (!isOpen) {
    return null
  }

  return (
    <div className={outer}>
      <div ref={ref} className={underlay}>
        <div className={drawer}>{children}</div>
      </div>
    </div>
  )
}
