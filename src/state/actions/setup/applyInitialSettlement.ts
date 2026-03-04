import { GameState } from "../../../models/GameState"

export function applyInitialSettlement(
  state: GameState,
  playerId: string,
  vertexId: string
): GameState {
  const next = structuredClone(state)

  next.board.vertices[vertexId].building = {
    playerId,
    type: "SETTLEMENT"
  }

  return next
}