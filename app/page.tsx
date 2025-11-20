import { HeroSection } from '@/components/HeroSection'
import { ExhibitionInfo } from '@/components/ExhibitionInfo'
import { GoldCrownGallery } from '@/components/GoldCrownGallery'
import { GoldBeltGallery } from '@/components/GoldBeltGallery'
import { VisitInfo } from '@/components/VisitInfo'

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl pb-12">
      <HeroSection />
      <ExhibitionInfo />
      <GoldCrownGallery />
      <GoldBeltGallery />
      <VisitInfo />
    </div>
  )
}
