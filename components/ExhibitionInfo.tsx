import { exhibition, features } from '@/lib/data'

export function ExhibitionInfo() {
  const featureIcons = ['✨', '💎', '🌿', '⚡']

  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="space-y-6">
        {/* Main Description */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-yellow-50/50 to-amber-100/30 dark:from-amber-950/50 dark:via-yellow-900/20 dark:to-amber-900/30 p-8 sm:p-10 shadow-xl border border-amber-200/50 dark:border-amber-800/30">
          {/* 배경 패턴 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-300/10 to-transparent rounded-full blur-2xl" />

          <div className="relative space-y-6">
            <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-100 font-medium">
              {exhibition.description}
            </p>
            <div className="flex gap-3">
              <div className="w-1 bg-gradient-to-b from-gold via-amber-400 to-gold rounded-full" />
              <p className="text-lg leading-relaxed text-amber-900 dark:text-amber-200 italic">
                {exhibition.theme}
              </p>
            </div>
          </div>
        </div>

        {/* Features - Grid Cards */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2">
            <span className="text-2xl">✦</span>
            주요 특징
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 dark:border-amber-900/50 hover:border-amber-300 dark:hover:border-amber-700"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-amber-300/20 dark:from-gold/30 dark:to-amber-600/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {featureIcons[index]}
                  </div>
                  <p className="flex-1 text-lg text-gray-700 dark:text-gray-200 leading-relaxed pt-2">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
