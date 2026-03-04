import { GameState } from "../../../models/GameState"
import { initializeBoard } from "../../init/initializeBoard"
import { initializeDevDeck } from "../../init/initializeDevDeck"

export function createGame(gameId: string): GameState {
  return {
    gameId,
    players: [],
    board: initializeBoard(),
    phase: "SETUP",
    turn: {
      playerId: "", 
      hasRolled: false, 
      diceValue: null,
      devCardPlayed: false,
    },
    developmentDeck: initializeDevDeck(),
    largestArmyOwner: null,
    longestRoadOwner: null,
  }
}