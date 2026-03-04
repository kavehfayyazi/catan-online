import { GameState } from "../../../models/GameState"
import { BUILD_COSTS } from "../../rules/resources/buildCosts"

export function applyBuildRoad(
  state: GameState,
  playerId: string,
  edgeId: string
): GameState {
  const next = structuredClone(state)
  const player = next.players.find(p => p.playerId === playerId)!

  next.board.edges[edgeId].road = { playerId }

  player.resources.BRICK -= BUILD_COSTS.ROAD.BRICK
  player.resources.WOOD -= BUILD_COSTS.ROAD.WOOD

  return next
}