import { GameState } from "../../../models/GameState"
import { initializeBoard } from "../../init/initializeBoard"
import { initializeDevDeck } from "../../init/initializeDevDeck"

export function createGame(gameId: string): GameState {
  return {
    gameId,
    players: [],
    board: initializeBoard(),
    currentTurnPlayerId: "",
    phase: "SETUP",
    diceValue: null,
    developmentDeck: initializeDevDeck(),
    largestArmyOwner: null,
    longestRoadOwner: null,
  }
}