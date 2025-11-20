'use client'

import { useFontSize } from './FontSizeProvider'

export function FontSizeControl() {
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={decreaseFontSize}
        disabled={fontSize === 'small'}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50 hover:bg-amber-200 dark:hover:bg-amber-800 transition-all duration-300 shadow-md hover:shadow-lg border border-amber-200 dark:border-amber-800 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="글자 크기 줄이기"
      >
        <span className="text-lg font-bold text-amber-700 dark:text-amber-300">A-</span>
      </button>
      <button
        onClick={increaseFontSize}
        disabled={fontSize === 'large'}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50 hover:bg-amber-200 dark:hover:bg-amber-800 transition-all duration-300 shadow-md hover:shadow-lg border border-amber-200 dark:border-amber-800 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="글자 크기 키우기"
      >
        <span className="text-lg font-bold text-amber-700 dark:text-amber-300">A+</span>
      </button>
    </div>
  )
}
