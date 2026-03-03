import { DevelopmentCardType } from "./DevelopmentCard"
import { Player } from "./Player"
import { Board } from "./Board"

export type Phase = "SETUP" | "ROLL" | "ROBBER" | "BUILD" | "TRADE"

export interface GameState {
  gameId: string
  players: Player[]
  board: Board
  currentTurnPlayerId: string
  phase: Phase
  diceValue: number | null
  developmentDeck: DevelopmentCardType[]
  playersToDiscard?: string[]
  robberMovePending?: boolean
  largestArmyOwner: null,
  longestRoadOwner: null,
}