import { GameState } from "../../../models/GameState"
import { BUILD_COSTS } from "../../rules/resources/buildCosts"

export function applyBuildSettlement(
  state: GameState,
  playerId: string,
  vertexId: string
): GameState {
  const next = structuredClone(state)
  const player = next.players.find(p => p.playerId === playerId)!

  next.board.vertices[vertexId].building = {
    playerId,
    type: "SETTLEMENT"
  }

  player.resources.BRICK -= BUILD_COSTS.SETTLEMENT.BRICK
  player.resources.WOOD -= BUILD_COSTS.SETTLEMENT.WOOD
  player.resources.SHEEP -= BUILD_COSTS.SETTLEMENT.SHEEP
  player.resources.WHEAT -= BUILD_COSTS.SETTLEMENT.WHEAT

  return next
}