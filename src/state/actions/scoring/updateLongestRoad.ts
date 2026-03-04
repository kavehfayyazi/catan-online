import { GameState } from "../../../models/GameState"
import { getLongestRoad } from "../../graph/longestRoad"

export function updateLongestRoad(
  state: GameState
): GameState {
  const next = structuredClone(state)
  
  let owner = next.longestRoadOwner
  let ownerLength = owner
    ? getLongestRoad(next.board, owner)
    : 4

  for (const player of next.players) {
    const length = getLongestRoad(next.board, player.playerId)
    if (length >= 5 && length > ownerLength) {
      owner = player.playerId
      ownerLength = length
    }
  }

  next.longestRoadOwner = owner

  return next
}