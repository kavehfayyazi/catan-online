import { GameState } from "../../../models/GameState"
import { calculateVictoryPoints } from "./calculateVictoryPoints"

export function checkWinCondition(
  state: GameState
): string | null {
  for (const player of state.players)
    if (calculateVictoryPoints(state, player.playerId) >= 10)
      return player.playerId

  return null
}