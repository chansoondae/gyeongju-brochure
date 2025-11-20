'use client'

import Image from 'next/image'
import { DarkModeToggle } from './DarkModeToggle'
import { FontSizeControl } from './FontSizeControl'
import { useState } from 'react'

export function Header() {
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200/50 dark:border-amber-900/30 bg-gradient-to-r from-white via-amber-50/30 to-white dark:from-gray-950 dark:via-amber-950/10 dark:to-gray-950 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            {!logoError && (
              <div className="relative h-10 w-10 rounded-lg overflow-hidden ring-2 ring-amber-200 dark:ring-amber-800">
                <Image
                  src="/logo.jpg"
                  alt="국립경주박물관"
                  fill
                  className="object-contain"
                  priority
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
            <div>
              <h1 className="!text-[16px] font-bold bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 dark:from-amber-200 dark:via-yellow-400 dark:to-amber-200 bg-clip-text text-transparent">
                국립경주박물관
              </h1>
              <p className="!text-[11px] text-amber-600 dark:text-amber-400">
                Gyeongju National Museum
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontSizeControl />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
