import { Resources } from "./Resources"
import { DevelopmentCard } from "./DevelopmentCard"

export interface Player {
  playerId: string
  resources: Resources
  roads: number
  settlements: number
  cities: number
  
  developmentCards: DevelopmentCard[]
  knightsPlayed: number
  hasLargestArmy: boolean
  hasLongestRoad: boolean
  victoryPointCards: number
  
  hasPlacedFirstSettlement: boolean
  hasPlacedSecondSettlement: boolean
}