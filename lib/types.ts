export interface Exhibition {
  title: string
  titleEn: string
  date: string
  location: {
    name: string
    address: string
    phone: string
  }
  hours: {
    regular: string
    extended: string
    closed: string
  }
  description: string
  theme: string
}

export interface GoldCrown {
  id: string
  name: string
  period: string
  height: string
  number: string
  grade: string
  imageUrl: string
  description: string
  detailedDescription: string
}

export interface GoldBelt {
  id: string
  name: string
  decorations: string
  pendants: string
  imageUrl: string
  description: string
  detailedDescription: string
}

export interface ExhibitionData {
  exhibition: Exhibition
  artifacts: {
    goldCrowns: GoldCrown[]
    goldBelts: GoldBelt[]
  }
  features: string[]
  sourceUrl: string
}
