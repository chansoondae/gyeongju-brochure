import { exhibition } from '@/lib/data'

export function VisitInfo() {
  const infoItems = [
    { icon: '🕐', label: '관람 시간', value: exhibition.hours.regular },
    { icon: '🌙', label: '야간 연장', value: exhibition.hours.extended },
    { icon: '🚫', label: '휴관일', value: exhibition.hours.closed },
    { icon: '📞', label: '연락처', value: exhibition.location.phone },
    { icon: '📍', label: '주소', value: exhibition.location.address },
  ]

  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-8 sm:p-10 shadow-2xl border border-amber-200/50 dark:border-amber-900/30">
        {/* 배경 장식 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-300/10 to-transparent rounded-full blur-3xl" />

        <div className="relative space-y-8">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/50">
              <span className="text-2xl">ℹ️</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 dark:from-amber-200 dark:via-yellow-400 dark:to-amber-200 bg-clip-text text-transparent">
              관람 안내
            </h2>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-5">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-amber-100 dark:border-amber-900/50 hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <dt className="text-base font-bold text-amber-700 dark:text-amber-400">
                    {item.label}
                  </dt>
                  <dd className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="pt-4 text-center">
            <p className="text-base text-amber-600 dark:text-amber-400 flex items-center justify-center gap-2">
              <span>✨</span>
              <span>관람료 무료</span>
              <span>✨</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
