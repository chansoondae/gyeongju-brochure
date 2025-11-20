'use client'

import { useFontSize } from './FontSizeProvider'
import { type ReactNode } from 'react'

export function ContentWrapper({ children }: { children: ReactNode }) {
  const { fontSize } = useFontSize()

  return (
    <div data-font-size={fontSize}>
      {children}
    </div>
  )
}
