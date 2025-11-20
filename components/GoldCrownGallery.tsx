import { artifacts } from '@/lib/data'
import { ArtifactCard } from './ArtifactCard'

export function GoldCrownGallery() {
  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/50">
              <span className="text-2xl">👑</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 dark:from-amber-200 dark:via-yellow-400 dark:to-amber-200 bg-clip-text text-transparent">
                금관 갤러리
              </h2>
              <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
                {artifacts.goldCrowns.length}개의 신라 금관
              </p>
            </div>
          </div>
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-gold via-amber-400 to-transparent rounded-full" />
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {artifacts.goldCrowns.map((crown) => (
            <ArtifactCard key={crown.id} artifact={crown} type="crown" />
          ))}
        </div>
      </div>
    </section>
  )
}
