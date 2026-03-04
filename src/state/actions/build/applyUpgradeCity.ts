import { GameState } from "../../../models/GameState"
import { BUILD_COSTS } from "../../rules/resources/buildCosts"

export function applyUpgradeCity(
  state: GameState,
  playerId: string,
  vertexId: string
): GameState {
  const next = structuredClone(state)
  const player = next.players.find(p => p.playerId === playerId)!

  next.board.vertices[vertexId].building = {
    playerId,
    type: "CITY"
  }

  player.resources.WHEAT -= BUILD_COSTS.CITY.WHEAT
  player.resources.ORE -= BUILD_COSTS.CITY.ORE

  return next
}