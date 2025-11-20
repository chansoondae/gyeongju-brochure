'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type FontSize = 'small' | 'medium' | 'large'

interface FontSizeContextType {
  fontSize: FontSize
  increaseFontSize: () => void
  decreaseFontSize: () => void
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined)

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>('medium')

  useEffect(() => {
    const saved = localStorage.getItem('fontSize') as FontSize
    if (saved && ['small', 'medium', 'large'].includes(saved)) {
      setFontSize(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize)
    document.documentElement.setAttribute('data-font-size', fontSize)
  }, [fontSize])

  const increaseFontSize = () => {
    setFontSize((current) => {
      if (current === 'small') return 'medium'
      if (current === 'medium') return 'large'
      return 'large'
    })
  }

  const decreaseFontSize = () => {
    setFontSize((current) => {
      if (current === 'large') return 'medium'
      if (current === 'medium') return 'small'
      return 'small'
    })
  }

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  )
}

export function useFontSize() {
  const context = useContext(FontSizeContext)
  if (!context) {
    throw new Error('useFontSize must be used within FontSizeProvider')
  }
  return context
}
