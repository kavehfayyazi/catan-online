import { DevelopmentCardType } from "./DevelopmentCard"
import { Player } from "./Player"
import { Board } from "./Board"

export type Phase = "SETUP" | "ROLL" | "ROBBER" | "BUILD" | "TRADE"

export interface Turn {
  playerId: string
  hasRolled: boolean
  diceValue: number | null
  devCardPlayed: boolean
}

export interface GameState {
  gameId: string
  players: Player[]
  board: Board
  
  phase: Phase
  turn: Turn

  developmentDeck: DevelopmentCardType[]

  playersToDiscard?: string[]
  robberMovePending?: boolean
  
  largestArmyOwner: null
  longestRoadOwner: null
}