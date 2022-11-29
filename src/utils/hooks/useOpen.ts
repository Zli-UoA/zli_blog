import { useState } from 'react'

export const useOpen = (
  init = false
): {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
} => {
  const [isOpen, setIsOpen] = useState(init)

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((current) => !current),
  }
}
