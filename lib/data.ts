import exhibitionData from './exhibition-data.json'
import type { ExhibitionData } from './types'

export const data: ExhibitionData = exhibitionData as ExhibitionData

export const { exhibition, artifacts, features } = data
