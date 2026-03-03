import { DevelopmentCard } from "./DevelopmentCard"
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
    // version: number

    playersToDiscard?: string[]
    robberMovePending?: boolean
}