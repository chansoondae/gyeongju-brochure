'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { GoldCrown, GoldBelt } from '@/lib/types'

type ArtifactCardProps = {
  artifact: GoldCrown | GoldBelt
  type: 'crown' | 'belt'
}

export function ArtifactCard({ artifact, type }: ArtifactCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isCrown = type === 'crown'
  const crown = isCrown ? (artifact as GoldCrown) : null
  const belt = !isCrown ? (artifact as GoldBelt) : null

  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100/50 dark:border-amber-900/30 fade-in">
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-yellow-50/30 dark:from-amber-950/30 dark:via-transparent dark:to-yellow-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Section */}
      <div className="relative aspect-square w-full bg-gradient-to-br from-amber-50 via-white to-amber-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* 빛나는 효과 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent group-hover:animate-pulse" />

        <Image
          src={artifact.imageUrl}
          alt={artifact.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* 상단 배지 */}
        {crown?.grade && (
          <div className="absolute top-4 right-4">
            <div className="rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 px-4 py-2 shadow-lg backdrop-blur-sm">
              <span className="text-sm font-bold text-white drop-shadow-md">
                {crown.grade}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative space-y-4 p-6 sm:p-7">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-gradient-to-b from-gold via-amber-400 to-gold rounded-full" />
          <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 leading-tight">
            {artifact.name}
          </h3>
        </div>

        {/* Details - 아이콘과 함께 */}
        <div className="flex flex-wrap items-center gap-3 text-base text-amber-700 dark:text-amber-300">
          {crown && (
            <>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
                <span>📅</span>
                <span className="font-medium">{crown.period}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
                <span>📏</span>
                <span className="font-medium">높이 {crown.height}</span>
              </div>
            </>
          )}
          {belt && (
            <>
              {belt.decorations && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
                  <span>✨</span>
                  <span className="font-medium">{belt.decorations}</span>
                </div>
              )}
              {belt.pendants && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
                  <span>💫</span>
                  <span className="font-medium">{belt.pendants}</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 pt-2">
          {artifact.description}
        </p>

        {/* 상세 설명 */}
        {artifact.detailedDescription && (
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <span className="text-amber-500 mt-1 flex-shrink-0">📖</span>
              <div className="flex-1">
                <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {isExpanded ? (
                    <div className="whitespace-pre-line">
                      {artifact.detailedDescription}
                    </div>
                  ) : (
                    <div className="line-clamp-3">
                      {artifact.detailedDescription.split('\n')[0]}
                    </div>
                  )}
                </div>

                {/* 더보기 버튼 */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1 mt-2 text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 font-medium transition-colors"
                >
                  <span className="text-sm border-b border-amber-700 dark:border-amber-400">
                    {isExpanded ? '접기' : '더보기'}
                  </span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 하단 빛 효과 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </article>
  )
}
