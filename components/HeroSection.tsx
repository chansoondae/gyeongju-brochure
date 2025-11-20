import { exhibition } from '@/lib/data'

export function HeroSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-gold/20 via-amber-200/20 to-transparent dark:from-gold/10 dark:via-amber-900/10 rounded-full blur-3xl" />
      </div>

      <div className="space-y-8 text-center fade-in">
        {/* 왕관 아이콘 */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold via-amber-400 to-yellow-600 dark:from-gold dark:via-amber-500 dark:to-yellow-500 flex items-center justify-center text-3xl shadow-lg shadow-gold/50">
            👑
          </div>
        </div>

        {/* 메인 타이틀 */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 dark:from-amber-200 dark:via-yellow-400 dark:to-amber-200 bg-clip-text text-transparent leading-tight">
            {exhibition.title}
          </h1>
          <p className="text-xl sm:text-2xl text-amber-700 dark:text-amber-300 font-medium italic">
            {exhibition.titleEn}
          </p>
        </div>

        {/* 장소 정보 */}
        <div className="inline-block">
          <div className="space-y-3 px-6 py-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-amber-200 dark:border-amber-900/50 shadow-lg">
            <div className="flex items-center gap-2 justify-center text-lg font-semibold text-gray-900 dark:text-gray-100">
              <span className="text-xl">🏛️</span>
              <span>{exhibition.location.name}</span>
            </div>
            <p className="text-base text-gray-600 dark:text-gray-400 flex items-center gap-2 justify-center">
              <span>📍</span>
              {exhibition.location.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
