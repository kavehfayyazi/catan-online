import { DevelopmentCardType } from "../models/DevelopmentCard"
import { shuffle } from "../utils/shuffle"

export function initializeDevDeck(): DevelopmentCardType[] {
  const deck: DevelopmentCardType[] = [
    ...Array(14).fill("KNIGHT"),
    ...Array(5).fill("VICTORY_POINT"),
    ...Array(2).fill("ROAD_BUILDING"),
    ...Array(2).fill("YEAR_OF_PLENTY"),
    ...Array(2).fill("MONOPOLY")
  ]

  return shuffle(deck)
}